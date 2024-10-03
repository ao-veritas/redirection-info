# Funtion stake
- uint256 poolId_: the pool in which the user wants to stake
- uint256 amount_: amount to stake
- bytes32 arweaveAddress_: (?)
- external: The function can be called from outside
- poolExists(poolId_): checks whethe the pool with poolId_ exists

# Function _stake
## Args
- _msgSender(): get sender
- poolId_: The pool where the staking is occurring.
- amount_: The amount the staker is staking.
- arweaveAddress_: The Arweave address associated with the staking. (?)
- private
## Flow
- Ensures that the amount to stake is greater than 0.
- pools[poolId_]: data structure associated with the specific pool
- poolsData[poolId_]: additional data for the pool
- usersData[user_][poolId_]: data for the user related to their stakes in this specific pool
-  transfers the staking tokens from the user to the contract, safeTransferFrom from erc20
- _joinDsr(amount_) adjusts the staking amount to the actual value that the contract received or that will be counted toward the staking mechanism 
- checks that the total amount deposited by the user (including the new stake) is greater than or equal to the pool's minimum staking requirement (pool.minimalStake).
- The total amount of tokens deposited across all public pools is updated by adding the current staking amount.
- pool's last update timestamp is set to the current block timestamp.
- total amount deposited in the pool is incremented by the staked amount.
- user's last stake timestamp is set to the current block timestamp.
- user's total deposited amount is updated by adding the staked amount.
- emits a UserStaked event, which logs the pool ID, user address, staked amount, and Arweave address. (WHERE IS THIS EMIT GOING)