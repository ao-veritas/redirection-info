# Function \_loaded_mod_token()

## Utils

- for adding subtracting strings as bints and returning ast strings

## BASIC HANDLERS

### Info

- Has "Balances-Mirror", points to an address which can be used to chack balances
  (?)

### Balance

- Same, check From's balance

### Balances

- Disabled

### Transfer

- While MintCount is less than 100000 cant use tranfer
  (?) doesnt make sense since mintcount is updated nNOT proportional to how much is being minted
- Rest Same

### Total Supply

- cant call from ao.id else loop lol
- Just sends the total supply to asker

### Burn

- Same

# Funtion \_loaded_mod_dal_prices()

## var/table prices.data

- gives the data of all tokens, ie price, in currency and timestamp. WRT ticker

## func prices.update

### args

- token: ticker
- info.Price = new price
- info.Currency = in which fiat (?)

### flow

- make sure args came
- update in the prices.data table

## func prices.get

### args

- token: ticker

### flow

- return prices.data table

# Function \_loaded_mod_dal_yields()

## var/table yields.data

- gives yields of all tokens, ie yiels, timestamp WRT token ticker
  (?) : what do i need the timestamp for

## func yields.update

### args

- token: ticker
- info.Yield = new yield (?): what format
- info.Timestamp = (?) : again why timestamp what time stamp

### flow

- make sure args came
- update in the yields.data table

## func yields.get

### args

- token: ticker

### flow

- return yields.data table

# Function \_loaded_mod_dal_sources()

## metatable Sources.\_\_index

- metatable so dbadmin can be used

## func Sources.new

- to create new table

### args

- dbAdmin

### flow

- setmetatables makes sources a metatable for itself
- self.dbAdmit sets metamethod on it as dbAdmin
- create table SQL query (?) : what do all the fields tell
- returns this instance

## func Sources:upsert

- to update if exists or insert record

### args

- record of type table

### flow

- make sure record arg is a table
- make sure has oracle prop
- find all oracles that are same as record ke oracles
- (i think will return only one so store that as sources)
- if source, then update this oracle to the local table, if record then that ELSE the existing entry
- else no sources (no matching oracle) then add this new one to local oracles

## func Sources:getById

- get oracle

### args

- oracle for oracle field text

### flow

- select all SQL query
- return the result[1] cause only one will be there

## func Sources:getByToken

- get oracle from token ticker

### args

- token for token field text

### flow

- select all SQL query
- return all since more than one possible

## func Sources:getBridgeOracles

- gves all oracles which are not for AR

# Function \_loaded_mod_dal_deposits()

## metatable Deposits.\_\_index

- metatable so dbadmin can be used

## vars

- SQL queries to get deposits based on key, token, token+user
- NOTE: rewards table used here even tho calling it deposits

## func Deposits.new

- to create new table

### args

- dbAdmin

### flow

- setmetatables makes Deposits a metatable for itself
- self.dbAdmit sets metamethod on it as dbAdmin
- create table SQL query (?) : what do all the fields tell
- returns this instance

## func Deposits:getBridgeDeposits

- gives all deposits which are not for AR

## func Deposits:getByTokenAndUser

- get deposits from token and user

### args

- token for token field text
- user

### flow

- make sure args there
- select all SQL query from variable
- return all since more than one possible

## func Deposits:getByToken

- get deposits from token

### args

- token for token field text

### flow

- make sure args there
- select all SQL query from variable
- return all since more than one possible

## func Deposits:getByKey

- get deposits from key

### args

- key for key field text

### flow

- make sure args there
- select all SQL query from variable
- return results[1], only one possible

## func Deposits:upsert

- to update if exists or insert record

### args

- record of type table

### flow

- make sure record arg is a table
- make sure record has the fields, Recipient, Token and User
- get result by the key, ie the above fields
- ill return only one so store that as deposit
- if deposit, then update this reward to the local table, if record then that ELSE the existing entry
- else no deposit (no matching reward) then add this new one to local rewards

# Function \_loaded_mod_allocator_calcvalue()

- this function calculates the value of units given price with an optional yield, if no yield is provided it calculates the total cost, if yield is provide it calculates the total yield of a given item.

## var of func calculateValue

### args

- amount, price, yield
  -- @param amount the amount in units of a priced item
  -- @param price the unit price of an item denominated by 4
  -- @param yield the percent gain of a given item based on a specific price over time

### flow

- make sure amount and price
- if yield not given then 1
- return amount _ (price _ 10^14) \* yield


# Function _loaded_mod_allocator_distribute()
- distribute a reward using weighted distribution 
## var of func distribute
### args
- reward, scoreTotal, scoreProp, rewardProp
    -- @param reward Amount of Units you want to distribute
    -- @param scoreTotal The total score of the accounts in the list
    -- @param scoreProp The name of the property to read the score from
    -- @param rewardProp The name of the property to set the reward to
### flow
- make sure reward and scoreTotal given
- set defaults for scoreProp and rewardProp if not given
- var scoreRewardUnit = scoreTotal/reward
- funtion (param acct - table containing a score property)
  make sure acct is table, act has [scoreProp]
  acct[rewardProp] = acct[scoreProp]/ scoreRewardUnit
  Calcs the reward (?)

# Funtion _loaded_mod_allocator_helpers()
## func helpers.sum
- finds sum of some prop in any table
## func take
- gives the first n tables ki list (?): why would we need this

# Function _loaded_mod_allocator_main()
## use calcValue, distribute, and helpers modules
## func allocate.compute
### args
- deposits: table of table objects w/t amount, token
- reward: bint compatable number or string to distribute
- prices: lookup table of prices denominated by 4 by token
- yields lookup table of yields denominated by 4 by token
- returns: a table of items with a score and reward property 
### flow
- func calcScore
  args: deposit w/t .Token and .Amount
  make sure deposit, deposit.Token.price, deposit.Token.yield available
  calc deposit.Score = calcValue, ie calculates the yield
  returns: deposit object
- make sure deposit is table, reward is bint-able, prices is table and yields is table
- local var scores, ie tabke of calcScore from deposits
- local var totalScores = sums the above table
- returns call to distribute function with rewards, the score table and finally scores
(?) lets excali this

# Function _loaded_mod_ntime()
## local table time_units_in_seconds
- maps time units to values in seconds
## func ntime.toseconds
### args
- time_format
### flow
- check against regex for valid unit or not
- pass and get seconds return

# Function _loaded_mod_either()
- Either algebraic data type (ADT)
- handle operations that can succeed or fail
- Left: Typically represents failure or an error case.
- Right: Typically represents success or a valid result.
- basically an err handler will check later if needed

# Function _loaded_mod_helpers()
## func utils.isValid(event)
- checks validity based on type sand the params it should have
### args 
- an event
### flow
- func for if string returns is string
- func for if nil returns is nil
- some either stuff
- (?) can be usefull later to implement similar
## func addTransactionKey(event)
### args
- event
### flow
- has create key functions
- for AR: string of hash .. - .. -D or -W (deposit or withdraw)
- for new stEth: hash .. - .. LofIndex of event
- for old steth: hash .. - .. -D or -W
## func addUniqueIdentifier(event)
### args
- event
### flow
- AR: transaction hash
- stEth: BlockNumber (its ~ ar so same for dai?) (?)
## func utils.isDuplicate()
### args
- event
### flow
- make sure not string, Price-Update or Yield-Update type event
- addTransactionkey and addUniqueIdentifier to event
- if not AR, check for duplicates, update record if is duplicate
- if AR something about if hash is done ro not idk
(?)

# Function _loaded_mod_mint()
- load everything
- using dbadmin and sql open_memory
- ar ratio 1/3 and bridge ratio 2/3
- Utils :add, sub
- time funcs to check if millisecs and cnvert to millisecs
## func insertDeposits
### Args
- hash, recipient, oracle, user, token, amount, timestamp, tx
### flow
- if NOT AR, insert in EventQueue
- gets CURRENT total deposited amount by (recipient, token, user) as key
- add current to new and update
## func ProcessEventQueueWithdraw
### Args
- user, remaining_amount, recipient, oracle
### Flow
- find event in event queue using orcle and user
- make sure withdraw amount < available amount
- subtract
- return the amount withdrawed
## func updateWithdraw
### Args
- hash, user, amount, timestamp, token, recipient, oracle
### Flow
- find deposits using Token and User as key
- if no result from that process the eventqueuefor withdraw
 Basically menas that deposit not done yet so withdraw cant either
Parse the deposits 
- now the amount to be withdrawn (remaining amount) if greater than current deposit amount, current deposut us made zero, remaining amount is reduced accordingly and rest is put in ProcessEventQueueWithdraw (?)( why put in that maybe kinda processing this)
## func ProcessDelayedDeposits()
### Args
- oracle, timestamp
### Flow
- mke sure something in event queue
- get the source oracle by id, make sure oracle exists
- 



## Contract Ids
stEth: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
stEthBridge: '0xfE08D40Eee53d64936D3128838867c867602665c',
dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
daiBridge: '0x6A1B588B0684dACE1f53C5820111F400B3dbfeBf'
AO Mint Contract is 1OEAToQGhSKV76oa1MFIGZ9bYxCJoxpXqtksApDdcu8