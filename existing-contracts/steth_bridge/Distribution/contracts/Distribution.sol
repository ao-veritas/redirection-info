// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {PRECISION} from "@solarity/solidity-lib/utils/Globals.sol";

import {LinearDistributionIntervalDecrease} from "./libs/LinearDistributionIntervalDecrease.sol";

import {IDistribution} from "./interfaces/IDistribution.sol";

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
    address public aoDistributionWallet;

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

    modifier poolPublic(uint256 poolId_) {
        require(pools[poolId_].isPublic, "DS: pool isn't public");
        _;
    }

    /**********************************************************************************************/
    /*** Init                                                                                   ***/
    /**********************************************************************************************/

    constructor() {
        _disableInitializers();
    }

    function Distribution_init(
        address depositToken_,
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

        // Setting the Multicall address
        refunderAddress = refunderAddress_;
        // Fallback address for non-multicall refunds
        fallbackAddress = fallbackAddress_;

        depositToken = depositToken_;
        aoDistributionWallet = aoDistributionWallet_;
    }

    /**********************************************************************************************/
    /*** Pool managment and data retrieval                                                      ***/
    /**********************************************************************************************/
    function createPool(Pool calldata pool_) public onlyOwner {
        require(pool_.payoutStart > block.timestamp, "DS: invalid payout start value");

        _validatePool(pool_);
        pools.push(pool_);

        emit PoolCreated(pools.length - 1, pool_);
    }

    function getPeriodReward(uint256 poolId_, uint128 startTime_, uint128 endTime_) public view returns (uint256) {
        if (!_poolExists(poolId_)) {
            return 0;
        }

        Pool storage pool = pools[poolId_];

        return
            LinearDistributionIntervalDecrease.getPeriodReward(
                pool.initialReward,
                pool.rewardDecrease,
                pool.payoutStart,
                pool.decreaseInterval,
                startTime_,
                endTime_
            );
    }

    function _validatePool(Pool calldata pool_) private pure {
        require(pool_.decreaseInterval > 0, "DS: invalid decrease interval");
    }

    /**********************************************************************************************/
    /*** Stake, withdraw                                                                 ***/
    /**********************************************************************************************/
    function stake(
        uint256 poolId_,
        uint256 amount_,
        bytes32 arweaveAddress_
    ) external poolExists(poolId_) poolPublic(poolId_) {
        _stake(_msgSender(), poolId_, amount_, _getCurrentPoolRate(poolId_), arweaveAddress_);
    }

    function withdraw(
        uint256 poolId_,
        uint256 amount_,
        bytes32 arweaveAddress_
    ) external poolExists(poolId_) poolPublic(poolId_) {
        _withdraw(_msgSender(), poolId_, amount_, _getCurrentPoolRate(poolId_), arweaveAddress_);
    }

    function getCurrentUserReward(uint256 poolId_, address user_) external view returns (uint256) {
        if (!_poolExists(poolId_)) {
            return 0;
        }

        UserData storage userData = usersData[user_][poolId_];
        uint256 currentPoolRate_ = _getCurrentPoolRate(poolId_);

        return _getCurrentUserReward(currentPoolRate_, userData);
    }

    function _stake(
        address user_,
        uint256 poolId_,
        uint256 amount_,
        uint256 currentPoolRate_,
        bytes32 arweaveAddress_
    ) private {
        require(amount_ > 0, "DS: nothing to stake");

        Pool storage pool = pools[poolId_];
        PoolData storage poolData = poolsData[poolId_];
        UserData storage userData = usersData[user_][poolId_];

        if (pool.isPublic) {
            // https://docs.lido.fi/guides/lido-tokens-integration-guide/#steth-internals-share-mechanics
            uint256 balanceBefore_ = IERC20(depositToken).balanceOf(address(this));
            IERC20(depositToken).safeTransferFrom(_msgSender(), address(this), amount_);
            uint256 balanceAfter_ = IERC20(depositToken).balanceOf(address(this));

            amount_ = balanceAfter_ - balanceBefore_;

            require(userData.deposited + amount_ >= pool.minimalStake, "DS: amount too low");

            totalDepositedInPublicPools += amount_;
        }

        userData.pendingRewards = _getCurrentUserReward(currentPoolRate_, userData);

        // Update pool data
        poolData.lastUpdate = uint128(block.timestamp);
        poolData.rate = currentPoolRate_;
        poolData.totalDeposited += amount_;

        // Update user data
        userData.lastStake = uint128(block.timestamp);
        userData.rate = currentPoolRate_;
        userData.deposited += amount_;

        emit UserStaked(poolId_, user_, amount_, arweaveAddress_);
    }

    function _withdraw(
        address user_,
        uint256 poolId_,
        uint256 amount_,
        uint256 currentPoolRate_,
        bytes32 arweaveAddress_
    ) private {
        Pool storage pool = pools[poolId_];
        PoolData storage poolData = poolsData[poolId_];
        UserData storage userData = usersData[user_][poolId_];

        uint256 deposited_ = userData.deposited;
        require(deposited_ > 0, "DS: user isn't staked");

        if (amount_ > deposited_) {
            amount_ = deposited_;
        }

        uint256 newDeposited_;
        if (pool.isPublic) {
            require(
                block.timestamp < pool.payoutStart ||
                    (block.timestamp > pool.payoutStart + pool.withdrawLockPeriod &&
                        block.timestamp > userData.lastStake + pool.withdrawLockPeriodAfterStake),
                "DS: pool withdraw is locked"
            );

            uint256 depositTokenContractBalance_ = IERC20(depositToken).balanceOf(address(this));
            if (amount_ > depositTokenContractBalance_) {
                amount_ = depositTokenContractBalance_;
            }

            newDeposited_ = deposited_ - amount_;

            require(amount_ > 0, "DS: nothing to withdraw");
            require(newDeposited_ >= pool.minimalStake || newDeposited_ == 0, "DS: invalid withdraw amount");
        } else {
            newDeposited_ = deposited_ - amount_;
        }

        uint256 pendingRewards_ = _getCurrentUserReward(currentPoolRate_, userData);

        // Update pool data
        poolData.lastUpdate = uint128(block.timestamp);
        poolData.rate = currentPoolRate_;
        poolData.totalDeposited -= amount_;

        // Update user data
        userData.rate = currentPoolRate_;
        userData.deposited = newDeposited_;
        userData.pendingRewards = pendingRewards_;

        if (pool.isPublic) {
            totalDepositedInPublicPools -= amount_;

            IERC20(depositToken).safeTransfer(user_, amount_);
        }

        emit UserWithdrawn(poolId_, user_, amount_, arweaveAddress_);
    }

    function _getCurrentUserReward(uint256 currentPoolRate_, UserData memory userData_) private pure returns (uint256) {
        uint256 newRewards_ = ((currentPoolRate_ - userData_.rate) * userData_.deposited) / PRECISION;

        return userData_.pendingRewards + newRewards_;
    }

    function _getCurrentPoolRate(uint256 poolId_) private view returns (uint256) {
        PoolData storage poolData = poolsData[poolId_];

        if (poolData.totalDeposited == 0) {
            return poolData.rate;
        }

        uint256 rewards_ = getPeriodReward(poolId_, poolData.lastUpdate, uint128(block.timestamp));

        return poolData.rate + (rewards_ * PRECISION) / poolData.totalDeposited;
    }

    function _poolExists(uint256 poolId_) private view returns (bool) {
        return poolId_ < pools.length;
    }

    /**********************************************************************************************/
    /*** Bridge                                                                                 ***/
    /**********************************************************************************************/

    function overplus() public view returns (uint256) {
        uint256 depositTokenContractBalance_ = IERC20(depositToken).balanceOf(address(this));
        if (depositTokenContractBalance_ <= totalDepositedInPublicPools) {
            return 0;
        }

        return depositTokenContractBalance_ - totalDepositedInPublicPools;
    }

    function bridgeOverplus() external {
        uint256 overplus_ = overplus();
        require(overplus_ > 0, "DS: overplus is zero");

        IERC20(depositToken).safeTransfer(aoDistributionWallet, overplus_);

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
            userData.pendingRewards = 0;
            userData.rate = 0;

            // Update pool and global state before transferring funds
            PoolData storage poolData = poolsData[poolId];
            Pool storage pool = pools[poolId];

            // Reduce the total deposited amount in the pool data
            uint256 actualAmountToTransfer = safeReduce(poolData.totalDeposited, amountToTransfer);
            poolData.totalDeposited -= actualAmountToTransfer;

            if (pool.isPublic) {
                actualAmountToTransfer = safeReduce(totalDepositedInPublicPools, amountToTransfer);
                totalDepositedInPublicPools -= actualAmountToTransfer;
            }

            // Perform the transfer
            IERC20(depositToken).safeTransfer(user, actualAmountToTransfer);

            bytes32 zeroBytes_ = 0x0000000000000000000000000000000000000000000000000000000000000000;

            // Emit successful withdrawal event
            emit UserWithdrawn(poolId, user, amountToTransfer, zeroBytes_);
        }
    }
}
