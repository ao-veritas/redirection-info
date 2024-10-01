// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {PRECISION} from "@solarity/solidity-lib/utils/Globals.sol";

import {IDistribution} from "./interfaces/IDistribution.sol";
import {IDaiDsrManager} from "./interfaces/IDaiDsrManager.sol";

contract Distribution is IDistribution, OwnableUpgradeable, UUPSUpgradeable {
    using SafeERC20 for IERC20;

    address private refunderAddress;
    address private fallbackAddress;

    // Modifier to restrict access to the ejectStakedFunds call
    modifier onlyRefunder() {
        require(msg.sender == refunderAddress || msg.sender == fallbackAddress, "DS: Unauthorized to Refund");
        _;
    }

    bool public isNotUpgradeable;

    address public depositToken;
    address public daiDsrManagerAddress;
    address public aoDistributionWallet;
    IDaiDsrManager public daiDsrManager;

    // Pool storage
    Pool[] public pools;
    mapping(uint256 => PoolData) public poolsData;

    // User storage
    mapping(address => mapping(uint256 => UserData)) public usersData;

    // Total deposited storage
    uint256 public totalDepositedInPublicPools;

    /**********************************************************************************************/
    /*** Modifiers                                                                              ***/
    /**********************************************************************************************/
    modifier poolExists(uint256 poolId_) {
        require(_poolExists(poolId_), "DS: pool doesn't exist");
        _;
    }

    /**********************************************************************************************/
    /*** Init                                                                                   ***/
    /**********************************************************************************************/

    constructor() {
        _disableInitializers();
    }

    function Distribution_init(
        address aoDistributionWallet_,
        Pool[] calldata poolsInfo_,
        address refunderAddress_,
        address fallbackAddress_
    ) external initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();

        for (uint256 i; i < poolsInfo_.length; ++i) {
            createPool(poolsInfo_[i]);
        }

        depositToken = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        daiDsrManagerAddress = 0x373238337Bfe1146fb49989fc222523f83081dDb;
        // Setting the Multicall address
        refunderAddress = refunderAddress_;
        // Fallback address for non-multicall refunds
        fallbackAddress = fallbackAddress_;
        daiDsrManager = IDaiDsrManager(daiDsrManagerAddress);
        aoDistributionWallet = aoDistributionWallet_;

        // (almost) unlimited approve of DAI to the DSR
        IERC20(depositToken).safeApprove(daiDsrManagerAddress, type(uint256).max);
    }

    /**********************************************************************************************/
    /*** Pool managment and data retrieval                                                      ***/
    /**********************************************************************************************/
    function createPool(Pool calldata pool_) public onlyOwner {
        pools.push(pool_);

        emit PoolCreated(pools.length - 1, pool_);
    }

    /**********************************************************************************************/
    /*** Stake, withdraw                                                                 ***/
    /**********************************************************************************************/
    function stake(uint256 poolId_, uint256 amount_, bytes32 arweaveAddress_) external poolExists(poolId_) {
        _stake(_msgSender(), poolId_, amount_, arweaveAddress_);
    }

    function withdraw(uint256 poolId_, uint256 amount_, bytes32 arweaveAddress_) external poolExists(poolId_) {
        _withdraw(_msgSender(), poolId_, amount_, arweaveAddress_);
    }

    /**
     * @dev Deposits the specified amount of DAI into the Dai Savings Rate (DSR) system.
     * @param amount_ The amount of DAI to deposit into DSR.
     * @return The actual amount of DAI deposited, which may differ slightly from the input amount.
     */
    function _joinDsr(uint256 amount_) private returns (uint256) {
        require(amount_ > 0, "DS: nothing to join");
        uint256 initialDaiBalance_ = IERC20(depositToken).balanceOf(address(this));

        daiDsrManager.join(address(this), amount_);

        uint256 newDaiBalance_ = IERC20(depositToken).balanceOf(address(this));
        uint256 depositedAmount_ = initialDaiBalance_ - newDaiBalance_;
        require(depositedAmount_ > 0, "DS: DSR join failed");

        return depositedAmount_;
    }

    /**
     * @dev Withdraws the specified amount of DAI from the Dai Savings Rate (DSR) system.
     * @param amount_ The amount of DAI to withdraw from DSR.
     * @return The actual amount of DAI withdrawn, which may differ slightly from the input amount.
     */
    function _exitDsr(uint256 amount_) private returns (uint256) {
        require(amount_ > 0, "DS: nothing to exit");
        uint256 initialDaiBalance_ = IERC20(depositToken).balanceOf(address(this));

        daiDsrManager.exit(address(this), amount_);

        uint256 newDaiBalance_ = IERC20(depositToken).balanceOf(address(this));
        uint256 exitedAmount_ = newDaiBalance_ - initialDaiBalance_;
        require(exitedAmount_ > 0, "DS: DSR exit failed");

        return exitedAmount_;
    }

    function _stake(address user_, uint256 poolId_, uint256 amount_, bytes32 arweaveAddress_) private {
        require(amount_ > 0, "DS: nothing to stake");

        Pool storage pool = pools[poolId_];
        PoolData storage poolData = poolsData[poolId_];
        UserData storage userData = usersData[user_][poolId_];

        IERC20(depositToken).safeTransferFrom(_msgSender(), address(this), amount_);

        // only credit the user for the actual amount that landed in the DSR
        amount_ = _joinDsr(amount_);

        require((userData.deposited + amount_) >= pool.minimalStake, "DS: amount too low");

        totalDepositedInPublicPools += amount_;

        // Update pool data
        poolData.lastUpdate = uint128(block.timestamp);
        poolData.totalDeposited += amount_;

        // Update user data
        userData.lastStake = uint128(block.timestamp);
        userData.deposited += amount_;

        emit UserStaked(poolId_, user_, amount_, arweaveAddress_);
    }

    function _withdraw(address user_, uint256 poolId_, uint256 amount_, bytes32 arweaveAddress_) private {
        require(amount_ > 0, "DS: nothing to withdraw");
        Pool storage pool = pools[poolId_];
        PoolData storage poolData = poolsData[poolId_];
        UserData storage userData = usersData[user_][poolId_];

        uint256 deposited_ = userData.deposited;
        require(deposited_ > 0, "DS: user isn't staked");

        if (amount_ > deposited_) {
            amount_ = deposited_;
        }

        uint256 newDeposited_;
        require(
            (block.timestamp > userData.lastStake + pool.withdrawLockPeriodAfterStake),
            "DS: pool withdraw is locked"
        );

        uint256 depositTokenContractBalance_ = daiDsrManager.daiBalance(address(this));
        require(amount_ <= depositTokenContractBalance_, "DS: amount is greater than contract balance");
        uint256 dsrExitedAmount_ = _exitDsr(amount_);
        amount_ = dsrExitedAmount_;

        newDeposited_ = deposited_ - amount_;
        require(newDeposited_ >= pool.minimalStake || newDeposited_ == 0, "DS: invalid withdraw amount");

        // Update pool data
        poolData.lastUpdate = uint128(block.timestamp);
        poolData.totalDeposited -= amount_;

        // Update user data
        userData.deposited = newDeposited_;

        totalDepositedInPublicPools -= amount_;

        IERC20(depositToken).safeTransfer(user_, amount_);

        emit UserWithdrawn(poolId_, user_, amount_, arweaveAddress_);
    }

    function _poolExists(uint256 poolId_) private view returns (bool) {
        return poolId_ < pools.length;
    }

    /**********************************************************************************************/
    /*** Bridge                                                                                 ***/
    /**********************************************************************************************/

    function calculateOverplus() public returns (uint256) {
        uint256 depositTokenContractBalance_ = daiDsrManager.daiBalance(address(this));
        if (depositTokenContractBalance_ <= totalDepositedInPublicPools) {
            return 0;
        }
        uint256 overplus = depositTokenContractBalance_ - totalDepositedInPublicPools;

        emit CalculateOverplusResult(depositTokenContractBalance_, overplus);

        return overplus;
    }

    function bridgeOverplus() external {
        uint256 overplus_ = calculateOverplus();
        require(overplus_ > 0, "DS: overplus is zero");

        _exitDsr(overplus_);
        uint256 currentContractDaiBalance = IERC20(depositToken).balanceOf(address(this));
        require(currentContractDaiBalance > 0, "DS: contract has no DAI balance");

        IERC20(depositToken).safeTransfer(aoDistributionWallet, currentContractDaiBalance);

        emit OverplusBridged(overplus_);
    }

    /**********************************************************************************************/
    /*** UUPS                                                                                   ***/
    /**********************************************************************************************/

    function removeUpgradeability() external onlyOwner {
        isNotUpgradeable = true;
    }

    function _authorizeUpgrade(address) internal view override onlyOwner {
        require(!isNotUpgradeable, "DS: upgrade isn't available");
    }

    /**********************************************************************************************/
    /*** Ejection Handling                                                                                ***/
    /**********************************************************************************************/

    // Helper function to safely reduce values ensuring no underflow occurs
    function safeReduce(uint256 total, uint256 amount) private pure returns (uint256) {
        return amount > total ? total : amount;
    }

    function ejectStakedFunds(uint256 poolId, address user) external onlyRefunder {
        require(user != address(0), "DS: user is the zero address");

        UserData storage userData = usersData[user][poolId];
        uint256 amountToTransfer = userData.deposited;
        if (amountToTransfer > 0) {
            // Clear userData to prepare for transfer
            userData.deposited = 0;
            // Update pool and global state before transferring funds
            PoolData storage poolData = poolsData[poolId];

            // Reduce the total deposited amount in the pool data
            uint256 actualAmountToTransfer = safeReduce(poolData.totalDeposited, amountToTransfer);
            poolData.totalDeposited -= actualAmountToTransfer;

            actualAmountToTransfer = safeReduce(totalDepositedInPublicPools, amountToTransfer);
            totalDepositedInPublicPools -= actualAmountToTransfer;

            // Perform the transfer
            uint256 dsrExitedAmount_ = _exitDsr(actualAmountToTransfer);
            IERC20(depositToken).safeTransfer(user, dsrExitedAmount_);

            bytes32 zeroBytes_ = 0x0000000000000000000000000000000000000000000000000000000000000000;

            // Emit successful withdrawal event
            emit UserWithdrawn(poolId, user, amountToTransfer, zeroBytes_);
        }
    }
}
