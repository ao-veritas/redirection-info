-- 6DUZNNYLej8L2e2wtrXJMQTJIdM693zkebK-2nlDJY8
-- module: "dal.sources"
local function _loaded_mod_dal_sources()
    local Sources = { _version = "0.0.1"}
    
    -- maybe make this a metatable so we can inject dbAdmin into instance
    Sources.__index = Sources 
    
    -- create table
    function Sources.new(dbAdmin)
      local self = setmetatable({}, Sources)
      self.dbAdmin = dbAdmin  
      self.dbAdmin:exec([[
    CREATE TABLE IF NOT EXISTS Oracles (
      Oracle TEXT PRIMARY KEY,
      Name TEXT NOT NULL,
      StartTimestamp TEXT NOT NULL,
      DelayDepositInterval TEXT NOT NULL,
      RewardRatio TEXT,
      NativeYieldRate TEXT,
      Token TEXT
    );
      ]])
    
      return self
    end
    
    -- upsert record
    function Sources:upsert(record)
      assert(type(record) == "table", 'record must be table')
      assert(record.Oracle ~= nil, 'oracle property is required')
    
      local results = self.dbAdmin:select('SELECT * FROM Oracles where Oracle = ?', { record.Oracle })
      local source = #results == 1 and results[1] or nil  
      if source ~= nil then
        -- update
        print('update source')
        self.dbAdmin:apply('update Oracles set Name = ?, StartTimestamp = ?, DelayDepositInterval = ? WHERE Oracle = ?', 
          { 
            record.Name or source.Name, 
            record.StartTimestamp or source.StartTimestamp, 
            record.DelayDepositInterval or source.DelayDepositInterval,
            record.Token or source.Token
          }
        )
      else
        -- insert
        print('insert source')
        self.dbAdmin:apply('insert into Oracles (Oracle, Name, StartTimestamp, DelayDepositInterval, Token) VALUES (?,?,?,?,?)', 
          { record.Oracle, record.Name, record.StartTimestamp, record.DelayDepositInterval, record.Token }
        )
      end
    end
    
    function Sources:getById(oracle)
      local results = self.dbAdmin:select('SELECT * FROM Oracles where Oracle = ?', { oracle })
      return results[1] or {}
    end
    
    function Sources:getByToken(token)
      return self.dbAdmin:select('SELECT * FROM Oracles where Token = ?', { token })
    end
    
    function Sources:getBridgeOracles()
      return self.dbAdmin:exec([[SELECT * FROM Oracles WHERE Token != "AR";]])
    end
    
    
    return Sources
    end
    
    _G.package.loaded["dal.sources"] = _loaded_mod_dal_sources()
    
    -- module: "dal.deposits"
    local function _loaded_mod_dal_deposits()
    local Deposits = { _version = "0.0.1" }
    
    Deposits.__index = Deposits
    local GET_DEPOSIT_BY_KEY = 'SELECT * FROM Rewards WHERE Recipient = ? and Token = ? and User = ?'
    local GET_DEPOSITS_BY_TOKEN = 'SELECT * FROM Rewards WHERE Token = ?'
    local GET_DEPOSITS_BY_TOKEN_AND_USER = 'SELECT Amount, Recipient FROM Rewards WHERE Token = ? and User = ?'
    
    -- @param dbAdmin - dbAdmin instances from @rakis/DbAdmin
    function Deposits.new(dbAdmin)
      local self = setmetatable({}, Deposits)
      self.dbAdmin = dbAdmin
      self.dbAdmin:exec([[
    CREATE TABLE IF NOT EXISTS Rewards (
      Recipient TEXT NOT NULL,
      Token TEXT NOT NULL,
      Oracle TEXT NOT NULL,
      User TEXT NOT NULL,
      Amount TEXT NOT NULL,
      Updated TEXT NOT NULL,
      PRIMARY KEY (Recipient, Token, User),
      FOREIGN KEY (Oracle) REFERENCES Oracles(Oracle)
    );
      ]])
      return self
    end
    
    function Deposits:getBridgeDeposits()
      return dbAdmin:exec([[SELECT * FROM Rewards WHERE Token != 'AR';]])
    end
    
    -- @param token deposit token
    -- @param user deposit user
    function Deposits:getByTokenAndUser(token, user)
      assert(token ~= nil, 'Token is required!')
      assert(user ~= nil, 'User is required!')
      
      return self.dbAdmin:select(GET_DEPOSITS_BY_TOKEN_AND_USER, { token, user })
    end
    
    -- @param token deposit token to get deposit list
    function Deposits:getByToken(token)
      assert(token ~= nil, 'Token is required!')
      return self.dbAdmin:select('SELECT * FROM Rewards WHERE Token = ?', { token })
    end
    
    -- @param key table with recipient, token, user
    function Deposits:getByKey(key)
      local results = self.dbAdmin:select(GET_DEPOSIT_BY_KEY, key)
      return #results == 1 and results[1] or nil
    end
    
    -- @param record a table object representing the record in the Rewards table
    function Deposits:upsert(record)
      assert(type(record) == "table", "input must be table")
      assert(record.Recipient ~= nil, "Recipient is required")
      assert(record.Token ~= nil, "Token is required")
      assert(record.User ~= nil, "User is required")
    
      local results = self.dbAdmin:select(GET_DEPOSIT_BY_KEY, { record.Recipient, record.Token, record.User })
      local deposit = #results == 1 and results[1] or nil
      if deposit ~= nil then
        -- print('update reward ' .. record.Token .. ':' .. record.User .. ':' .. record.Recipient .. ':' .. record.Amount)
        self.dbAdmin:apply('update Rewards set Amount = ?, Updated = ? WHERE Recipient = ? and Token = ? and User = ?',
          { 
            record.Amount or deposit.Amount,
            record.Updated or deposit.Updated,
            record.Recipient,
            record.Token,
            record.User
          }
        )
      else
        --print('insert reward'  .. record.Token .. ':' .. record.User .. ':' .. record.Recipient .. ':' .. record.Amount)
        --print(record)
        self.dbAdmin:apply('INSERT INTO Rewards (Recipient, Token, User, Oracle, Amount, Updated) VALUES (?,?,?,?,?,?)', {
          record.Recipient,
          record.Token,
          record.User,
          record.Oracle,
          record.Amount,
          record.Updated
        })
      end
    end
    
    return Deposits
    
    
    end
    
    _G.package.loaded["dal.deposits"] = _loaded_mod_dal_deposits()
    
    local sources = require('dal.sources').new(dbAdmin)
    local deposits = require('dal.deposits').new(dbAdmin)
    
    function Import(msg)
      if msg.Domain == "Info" then
        MintCount = msg.Data.MintCount
        MintedSupply = msg.Data.MintedSupply
        AOMIRRORS = msg.Data.AOMIRRORS
        AOETH_MIRROR = msg.Data.AOETH_MIRROR
        LastMintTimestamp = msg.Data.LastMintTimestamp
        -- Prices
        Utils.map(
          function (token) 
            print(token)
            print(msg.Data.Prices[token])
            Prices.update(token, {
              Price = msg.Data.Prices[token].price,
              Currency = msg.Data.Prices[token].currency,
              Timestamp = msg.Data.Prices[token].timestamp
            })
          end,  
          Utils.keys(msg.Data.Prices)
        )
        print('imported prices')
    
        -- TODO Yields
        Utils.map(
          function (token) 
            Yields.update(token, {
              Yield = msg.Data.Yields[token].yield,
              Timestamp = msg.Data.Yields[token].timestamp
            })
          end,  
          Utils.keys(msg.Data.Yields)
        )
        print('imported yields')
        
        LastMintHeight = msg.Data.LastMintHeight
        RewardBufferMode = msg.Data.RewardBufferMode
        print('imported info')
      -- else
      --    table.insert(Inbox, msg)
      end
      if msg.Domain == "Oracles" then
        Utils.map(function (oracle) sources:upsert(oracle) end, msg.Data)
        print('imported oracles')
      end
    
      if msg.Domain == "Rewards" then
        Utils.map(function (deposit) deposits:upsert(deposit) end, msg.Data)
        print('imported deposits')
      end
    
      if msg.Domain == "EventHashes" then
        Utils.map(function (entry)
          EventHashes[entry.hash] = entry.value
        end, msg.Data)
        print('imported Event Hashes')
      end
    
      if msg.Domain == "EventQueue" then
        Utils.map(function (deposit) table.insert(EventQueue, deposit) end, msg.Data)
        print('imported Event Queue')
      end
    
      if msg.Domain == "STETH_LOGS" then
        Utils.map(function (event) table.insert(STETH_LOGS, event) end, msg.Data)
        print('imported STETH_LOGS')
      end
    
      if msg.Domain == "Balances" then
        Utils.map(function (entry)
          if not Balances[entry.address] then
            Balances[entry.address] = "0"
          end
          Balances[entry.address] = entry.value
        end, msg.Data)
      end  
      
      if msg.Domain == "BlockHeights" then
        Utils.map(function (key) BlockHeights[key] = msg.Data[key] end, Utils.keys(msg.Data))
        print('imported BlockHeights')
      end
    end
    
    Handlers.add("X-Import", Import)

-- vsglemvRlEa1Lw7Q6NAYWV4g4QIxF-iOYnTXVYs2ny8


-- module: "token"
local function _loaded_mod_token()
    local token = { _version = "0.0.4" }
    
    local json = require('json')
    local bint = require('.bint')(256)
    
    local utils = {
      add = function(a, b)
        return tostring(bint(a) + bint(b))
      end,
      subtract = function(a, b)
        return tostring(bint(a) - bint(b))
      end,
      toBalanceValue = function(a)
        return tostring(bint(a))
      end,
      toNumber = function(a)
        return tonumber(a)
      end
    }
    
    --[[
         Initialize State
    
         ao.id is equal to the Process.Id
       ]]
    --
    Variant = "0.0.3"
    
    -- token should be idempotent and not change previous state updates
    Denomination = Denomination or 12
    Balances = Balances or {}
    -- 21_000_000 AO Tokens
    -- 21_000_000_000_000_000_000 Armstrongs
    TotalSupply = "21000000000000000000"
    Name = 'AO'
    Ticker = 'AO'
    Logo = Logo or 'SBCCXwwecBlDqRLUjb8dYABExTJXLieawf7m2aBJ-KY'
    
    
    --[[
         Add handlers for each incoming Action defined by the ao Standard Token Specification
       ]]
    --
    
    --[[
         Info
       ]]
    --
    token.info = function(msg)
      print("Return Info")
      Send({
        Target = msg.From,
        Name = Name,
        Ticker = Ticker,
        Logo = Logo,
        Denomination = tostring(Denomination),
        ['Balance-Mirror'] = "ptCu-Un-3FF8sZ5zNMYg43zRgSYAGVkjz2Lb0HZmx2M",
        ['Balances-Mirror'] = "ptCu-Un-3FF8sZ5zNMYg43zRgSYAGVkjz2Lb0HZmx2M",
        MintCount = tostring(MintCount),
        Action = "Info-Response"
      })
    end
    
    
    --[[
         Balance
       ]]
    --
    token.balance = function(msg)
      local bal = '0'
    
      -- If not Recipient is provided, then return the Senders balance
      if (msg.Tags.Recipient and Balances[msg.Tags.Recipient]) then
        bal = Balances[msg.Tags.Recipient]
      elseif msg.Tags.Target and Balances[msg.Tags.Target] then
        bal = Balances[msg.Tags.Target]
      elseif Balances[msg.From] then
        bal = Balances[msg.From]
      end
    
      ao.send({
        Target = msg.From,
        Balance = bal,
        Ticker = Ticker,
        Account = msg.Tags.Recipient or msg.From,
        Data = bal
      })
    end
    
    --[[
         Balances
       ]]
    --
    token.balances = function(msg)
      -- if msg.Format  == "CSV" then
      --   Send({Target = msg.From, Data = Utils.reduce(function (csv, key)
      --     csv = csv .. key .. "," .. Balances[key] .. "\n"
      --     return csv
      --   end, "", Utils.keys(Balances))})
      --   print('got data')
      --   return "ok"
      -- end
      -- ao.send({ Target = msg.From, Data = Balances })
      Send({ Target = msg.From, Data = "{}", Note = "Feature disabled" })
    end
    --[[
         Transfer
       ]]
    --
    token.transfer = function(msg)
      if MintCount < 100000 then
        Send({ Target = msg.From, Data = "Transfer is locked!" })
        return "Transfer is locked"
      end
      local status, err = pcall(function()
        assert(type(msg.Recipient) == 'string', 'Recipient is required!')
        assert(type(msg.Quantity) == 'string', 'Quantity is required!')
        assert(bint(msg.Quantity) > bint(0), 'Quantity must be greater than 0')
    
        if not Balances[msg.From] then Balances[msg.From] = "0" end
        if not Balances[msg.Recipient] then Balances[msg.Recipient] = "0" end
    
        if bint(msg.Quantity) <= bint(Balances[msg.From]) then
          Balances[msg.From] = utils.subtract(Balances[msg.From], msg.Quantity)
          Balances[msg.Recipient] = utils.add(Balances[msg.Recipient], msg.Quantity)
    
          --[[
              Only send the notifications to the Sender and Recipient
              if the Cast tag is not set on the Transfer message
            ]]
          --
          if not msg.Cast then
            -- Debit-Notice message template, that is sent to the Sender of the transfer
            local debitNotice = {
              Target = msg.From,
              Action = 'Debit-Notice',
              Recipient = msg.Recipient,
              Quantity = msg.Quantity,
              Data = Colors.gray ..
                  "You transferred " ..
                  Colors.blue .. msg.Quantity .. Colors.gray .. " to " .. Colors.green .. msg.Recipient .. Colors.reset
            }
            -- Credit-Notice message template, that is sent to the Recipient of the transfer
            local creditNotice = {
              Target = msg.Recipient,
              Action = 'Credit-Notice',
              Sender = msg.From,
              Quantity = msg.Quantity,
              Data = Colors.gray ..
                  "You received " ..
                  Colors.blue .. msg.Quantity .. Colors.gray .. " from " .. Colors.green .. msg.From .. Colors.reset
            }
    
            -- Add forwarded tags to the credit and debit notice messages
            for tagName, tagValue in pairs(msg) do
              -- Tags beginning with "X-" are forwarded
              if string.sub(tagName, 1, 2) == "X-" then
                debitNotice[tagName] = tagValue
                creditNotice[tagName] = tagValue
              end
            end
    
            -- Send Debit-Notice and Credit-Notice
            ao.send(debitNotice)
            ao.send(creditNotice)
          end
        else
          ao.send({
            Target = msg.From,
            Action = 'Transfer-Error',
            ['Message-Id'] = msg.Id,
            Error = 'Insufficient Balance!'
          })
        end
      end)
      if err then
        Send({ Target = msg.From, Data = err })
        return err
      end
      return "OK"
    end
    
    --[[
         Total Supply
       ]]
    --
    token.totalSupply = function(msg)
      assert(msg.From ~= ao.id, 'Cannot call Total-Supply from the same process!')
    
      ao.send({
        Target = msg.From,
        Action = 'Total-Supply',
        Data = TotalSupply,
        Ticker = Ticker
      })
    end
    
    --[[
     Burn
    ]] --
    token.burn = function(msg)
      assert(type(msg.Quantity) == 'string', 'Quantity is required!')
      assert(bint(msg.Quantity) <= bint(Balances[msg.From]), 'Quantity must be less than or equal to the current balance!')
    
      Balances[msg.From] = utils.subtract(Balances[msg.From], msg.Quantity)
      TotalSupply = utils.subtract(TotalSupply, msg.Quantity)
    
      ao.send({
        Target = msg.From,
        Data = Colors.gray .. "Successfully burned " .. Colors.blue .. msg.Quantity .. Colors.reset
      })
    end
    
    
  return token
    
end  
_G.package.loaded["token"] = _loaded_mod_token()
    
-- module: "dal.prices"
local function _loaded_mod_dal_prices()
    local prices = { _version = "0.0.1" }
    
    prices.data = prices.data or {
      ["AR"] = {
        price = "10000",
        currency = "USD",
        timestamp = "0"
      }
    }
    
    function prices.update(token, info)
      assert(info.Price ~= nil, 'Price is required')
      assert(info.Currency ~= nil, 'Currency is required')
    
      prices.data[token] = {
        price = info.Price,
        currency = info.Currency,
        timestamp = info.Timestamp
      }
    
    end
    
    function prices.get(token)
      return prices.data[token]
    end
    
  return prices
end 
_G.package.loaded["dal.prices"] = _loaded_mod_dal_prices()
    
-- module: "dal.yields"
local function _loaded_mod_dal_yields()
    local yields = { _version = "0.0.1" }
    
    yields.data = yields.data or {
      ["AR"] = {
        yield = "100",
        timestamp = "0"
      }
    }
    
    function yields.update(token, info)
      assert(info.Yield ~= nil, 'Yield is required')
      
      yields.data[token] = {
        yield = info.Yield,
        timestamp = info.Timestamp
      }
    
    end
    
    function yields.get(token)
      return yields.data[token]
    end
    
  return yields
end
_G.package.loaded["dal.yields"] = _loaded_mod_dal_yields()
    
-- module: "dal.sources"
local function _loaded_mod_dal_sources()
    local Sources = { _version = "0.0.1"}
    
    -- maybe make this a metatable so we can inject dbAdmin into instance
    Sources.__index = Sources 
    
    -- create table
    function Sources.new(dbAdmin)
      local self = setmetatable({}, Sources)
      self.dbAdmin = dbAdmin  
      self.dbAdmin:exec([[
    CREATE TABLE IF NOT EXISTS Oracles (
      Oracle TEXT PRIMARY KEY,
      Name TEXT NOT NULL,
      StartTimestamp TEXT NOT NULL,
      DelayDepositInterval TEXT NOT NULL,
      RewardRatio TEXT,
      NativeYieldRate TEXT,
      Token TEXT
    );
      ]])
    
      return self
    end
    
    -- upsert record
    function Sources:upsert(record)
      assert(type(record) == "table", 'record must be table')
      assert(record.Oracle ~= nil, 'oracle property is required')
    
      local results = self.dbAdmin:select('SELECT * FROM Oracles where Oracle = ?', { record.Oracle })
      local source = #results == 1 and results[1] or nil  
      if source ~= nil then
        -- update
        print('update source')
        self.dbAdmin:apply('update Oracles set Name = ?, StartTimestamp = ?, DelayDepositInterval = ? WHERE Oracle = ?', 
          { 
            record.Name or source.Name, 
            record.StartTimestamp or source.StartTimestamp, 
            record.DelayDepositInterval or source.DelayDepositInterval,
            record.Token or source.Token
          }
        )
      else
        -- insert
        print('insert source')
        self.dbAdmin:apply('insert into Oracles (Oracle, Name, StartTimestamp, DelayDepositInterval, Token) VALUES (?,?,?,?,?)', 
          { record.Oracle, record.Name, record.StartTimestamp, record.DelayDepositInterval, record.Token }
        )
      end
    end
    
    function Sources:getById(oracle)
      local results = self.dbAdmin:select('SELECT * FROM Oracles where Oracle = ?', { oracle })
      return results[1] or {}
    end
    
    function Sources:getByToken(token)
      return self.dbAdmin:select('SELECT * FROM Oracles where Token = ?', { token })
    end
    
    function Sources:getBridgeOracles()
      return self.dbAdmin:exec([[SELECT * FROM Oracles WHERE Token != "AR";]])
    end
    
    
  return Sources
end
_G.package.loaded["dal.sources"] = _loaded_mod_dal_sources()
    
-- module: "dal.deposits"
local function _loaded_mod_dal_deposits()
    local Deposits = { _version = "0.0.1" }
    
    Deposits.__index = Deposits
    local GET_DEPOSIT_BY_KEY = 'SELECT * FROM Rewards WHERE Recipient = ? and Token = ? and User = ?'
    local GET_DEPOSITS_BY_TOKEN = 'SELECT * FROM Rewards WHERE Token = ?'
    local GET_DEPOSITS_BY_TOKEN_AND_USER = 'SELECT Amount, Recipient FROM Rewards WHERE Token = ? and User = ?'
    
    -- @param dbAdmin - dbAdmin instances from @rakis/DbAdmin
    function Deposits.new(dbAdmin)
      local self = setmetatable({}, Deposits)
      self.dbAdmin = dbAdmin
      self.dbAdmin:exec([[
      CREATE TABLE IF NOT EXISTS Rewards (
        Recipient TEXT NOT NULL,
        Token TEXT NOT NULL,
        Oracle TEXT NOT NULL,
        User TEXT NOT NULL,
        Amount TEXT NOT NULL,
        Updated TEXT NOT NULL,
        PRIMARY KEY (Recipient, Token, User),
        FOREIGN KEY (Oracle) REFERENCES Oracles(Oracle)
      );
      ]])
      return self
    end
    
    function Deposits:getBridgeDeposits()
      return dbAdmin:exec([[SELECT * FROM Rewards WHERE Token != 'AR';]])
    end
    
    -- @param token deposit token
    -- @param user deposit user
    function Deposits:getByTokenAndUser(token, user)
      assert(token ~= nil, 'Token is required!')
      assert(user ~= nil, 'User is required!')
      
      return self.dbAdmin:select(GET_DEPOSITS_BY_TOKEN_AND_USER, { token, user })
    end
    
    -- @param token deposit token to get deposit list
    function Deposits:getByToken(token)
      assert(token ~= nil, 'Token is required!')
      return self.dbAdmin:select('SELECT * FROM Rewards WHERE Token = ?', { token })
    end
    
    -- @param key table with recipient, token, user
    function Deposits:getByKey(key)
      local results = self.dbAdmin:select(GET_DEPOSIT_BY_KEY, key)
      return #results == 1 and results[1] or nil
    end
    
    -- @param record a table object representing the record in the Rewards table
    function Deposits:upsert(record)
      assert(type(record) == "table", "input must be table")
      assert(record.Recipient ~= nil, "Recipient is required")
      assert(record.Token ~= nil, "Token is required")
      assert(record.User ~= nil, "User is required")
    
      local results = self.dbAdmin:select(GET_DEPOSIT_BY_KEY, { record.Recipient, record.Token, record.User })
      local deposit = #results == 1 and results[1] or nil
      if deposit ~= nil then
        -- print('update reward ' .. record.Token .. ':' .. record.User .. ':' .. record.Recipient .. ':' .. record.Amount)
        self.dbAdmin:apply('update Rewards set Amount = ?, Updated = ? WHERE Recipient = ? and Token = ? and User = ?',
          { 
            record.Amount or deposit.Amount,
            record.Updated or deposit.Updated,
            record.Recipient,
            record.Token,
            record.User
          }
        )
      else
        --print('insert reward'  .. record.Token .. ':' .. record.User .. ':' .. record.Recipient .. ':' .. record.Amount)
        --print(record)
        self.dbAdmin:apply('INSERT INTO Rewards (Recipient, Token, User, Oracle, Amount, Updated) VALUES (?,?,?,?,?,?)', {
          record.Recipient,
          record.Token,
          record.User,
          record.Oracle,
          record.Amount,
          record.Updated
        })
      end
    end
    
  return Deposits
end
_G.package.loaded["dal.deposits"] = _loaded_mod_dal_deposits()
    
-- module: "allocator.calcvalue"
local function _loaded_mod_allocator_calcvalue()
    --[[
      this function calculates the value of units given price
      with an optional yield, if no yield is provided it calculates
      the total cost, if yield is provide it calculates the total yield
      of a given item.
    ]]
    local bint = require('.bint')(256)
    -- @param amount the amount in units of a priced item
    -- @param price the unit price of an item denominated by 4
    -- @param yield the percent gain of a given item based on a specific price over time
    local calculateValue = function(amount, price, yield)
      assert(bint(amount), 'amount is required')
      assert(bint(price), 'unit price is required')
      -- print('calc: ' .. amount .. ':' .. price .. ':' .. yield)
      if not yield then yield = 1 end
      return bint(amount) * (bint(price) * bint.ipow(10, 14)) * bint(yield)
    end
    
    return calculateValue
    end
    
    _G.package.loaded["allocator.calcvalue"] = _loaded_mod_allocator_calcvalue()
    
    -- module: "allocator.distribute"
    local function _loaded_mod_allocator_distribute()
    local bint = require('.bint')(256)
    
    -- distribute a reward using weighted distribution 
    -- Higher Order Function 
    -- @param reward Amount of Units you want to distribute
    -- @param scoreTotal The total score of the accounts in the list
    -- @param scoreProp The name of the property to read the score from
    -- @param rewardProp The name of the property to set the reward to
    local function distribute(reward, scoreTotal, scoreProp, rewardProp)
      assert(bint(reward), "reward must be able to be parsed as a bint")
      assert(bint(scoreTotal), "score Total must be able to parsed by a bint")
      -- set defaults
      if not scoreProp then scoreProp = 'Score' end
      if not rewardProp then rewardProp = 'Reward' end
    
      -- we calculate the score reward unit by dividing the scoreTotal by the reward 
      local scoreRewardUnit = bint(scoreTotal) // (bint(reward))
      
      -- returned function to receive a table with a score property to calcuate the reward
      -- @param acct - table containing a score property
      return function (acct)
        assert(type(acct) == "table", 'acct must be a table')
        assert(type(acct[scoreProp]) == "string", 'score property is required')
        -- print('distribute: ' .. acct[scoreProp] .. ':' .. tostring(scoreRewardUnit))
        -- to determine the reward we divide using integer division the score by the reward units
        acct[rewardProp] = tostring(bint(acct[scoreProp]) // scoreRewardUnit)
        return acct
      end
    end
    
  return distribute
end
_G.package.loaded["allocator.distribute"] = _loaded_mod_allocator_distribute()
    
-- module: "allocator.helpers"
local function _loaded_mod_allocator_helpers()
    local bint = require('.bint')(256)
    
    local helpers = { _version = "0.0.1" }
    
    -- gets the sum of a specific property in a list of tables
    -- @param prop the name of the proper
    -- @param list the list of table items
    function helpers.sum(prop, list)
      return tostring(Utils.reduce(
        function (a,b) return bint(a) + bint(b) end,
        "0", 
        Utils.map(Utils.prop(prop), list)
      ))
    end
    
    function helpers.take(n, tbl)
      local result = {}
      for i = 1, math.min(n, #tbl) do
          table.insert(result, tbl[i])
      end
      return result
    end
    
  return helpers
end
_G.package.loaded["allocator.helpers"] = _loaded_mod_allocator_helpers()
    
-- module: "allocator.main"
local function _loaded_mod_allocator_main()
    local bint = require('.bint')(256)
    local calcValue = require('allocator.calcvalue')
    local distribute = require('allocator.distribute')
    local helpers = require('allocator.helpers')
    
    --[[
      allocate rewards based on a list of deposits
    ]]
    local allocate = { _version = "0.0.2" }
    
    -- @param deposits is a table of table objects with an amount and token property
    -- @param reward is a bint compatable number or string to distribute
    -- @param prices is a lookup table of prices denominated by 4 by token
    -- @param yields is a lookup table of yields denominated by 4 by token
    -- @returns a table of items with a score and reward property
    function allocate.compute(deposits, reward, prices, yields)
      -- takes a deposit gets the price and yield and calcuates a score
      -- @param deposit
      local function calcScore(deposit)
        assert(type(deposit), 'deposit must be table')
        assert(deposit.Token ~= nil, 'deposit must have a token symbol')
        assert(deposit.Amount ~= nil, 'deposit must have an amount')
    
        deposit.Price = prices.get(deposit.Token).price
        deposit.Yield = yields.get(deposit.Token).yield
        -- print(deposit)
        deposit.Score = tostring(calcValue(deposit.Amount, deposit.Price, deposit.Yield))
        return deposit
      end
      
      assert(type(deposits) == "table", 'deposits must be a table')
      assert(bint(reward), 'reward must be bint')
      assert(type(prices) == "table", 'prices must be table')
      assert(type(yields) == "table", 'yields must be table')
    
      local scores = Utils.map(calcScore, deposits)
      local totalScores = helpers.sum('Score', scores)
      return Utils.map(distribute(reward, totalScores), scores)
    
      -- this would be a good either
      -- of(deposits)
      --   :map(Utils.map(calcScore))
      --   :map(... get and map totalScores )
      --   :map(Utils.map(distribute(reward)))
      --   :fold(error, success)
    end
    
  return allocate
end
_G.package.loaded["allocator.main"] = _loaded_mod_allocator_main()
    
-- module: "ntime"
local function _loaded_mod_ntime()
    -- ntime.lua
    
    local ntime = {}
    
    -- A table to map time units to their corresponding values in seconds
    local time_units_in_seconds = {
      sec = 1,
      secs = 1,
      second = 1,
      seconds = 1,
      min = 60,
      mins = 60,
      minute = 60,
      minutes = 60,
      hr = 3600,
      hrs = 3600,
      hour = 3600,
      hours = 3600,
      day = 86400,
      days = 86400,
      week = 604800,
      weeks = 604800
    }
    
    -- Function to convert time format to seconds
    function ntime.toseconds(time_format)
      local n, unit = time_format:match("(%d+)%-(%a+)")
    
      if not n or not unit then
        error("Invalid time format. Expected format is {n}-{interval unit(s)}")
      end
    
      n = tonumber(n)
      unit = unit:lower()
    
      local seconds = time_units_in_seconds[unit]
    
      if not seconds then
        error("Invalid time unit provided.")
      end
    
      return n * seconds
    end
    
  return ntime
    
end
_G.package.loaded["ntime"] = _loaded_mod_ntime()
    
-- module: "either"
local function _loaded_mod_either()
    -- Either.lua
    --[[
    Either ADT
    
    Either is an ADT that allows developers to create functional pipelines in their business
    logic. The capability allows you to break your business logic into small reusable functions
    that can be composed in an Either data type via the map or chain functions. The map function 
    takes any unary function and returns a new value. The chain function expects any function 
    to return a Left or Right type. Finally, the fold function applies a handle function for the 
    Left and Right values then based on the last type returned will execute the correct function.
      
    ]]
    
    local Either = { _version = "0.0.1" }
    Either.__index = Either
    
    -- Constructor for Left
    function Either.Left(value)
        return setmetatable({ isLeft = true, value = value }, Either)
    end
    
    -- Constructor for Right
    function Either.Right(value)
        return setmetatable({ isLeft = false, value = value }, Either)
    end
    
    -- Method to check if it's Left
    function Either:isLeft()
        return self.isLeft
    end
    
    -- Method to check if it's Right
    function Either:isRight()
        return not self.isLeft
    end
    
    -- Method to map over Right value
    function Either:map(fn)
        if self:isRight() then
            return Either.Right(fn(self.value))
        else
            return self
        end
    end
    
    -- Method to map over Left value
    function Either:mapLeft(fn)
        if self:isLeft() then
            return Either.Left(fn(self.value))
        else
            return self
        end
    end
    
    -- Method to get the value with a default
    function Either:getOrElse(default)
        if self:isRight() then
            return self.value
        else
            return default
        end
    end
    
    -- Method to get the Left value with a default
    function Either:getLeftOrElse(default)
        if self:isLeft() then
            return self.value
        else
            return default
        end
    end
    
    -- Method to chain operations (flatMap)
    function Either:chain(fn)
        if self:isRight() then
            return fn(self.value)
        else
            return self
        end
    end
    
    -- Method to handle both cases
    function Either:fold(leftFn, rightFn)
        if self.isLeft then
            return leftFn(self.value)
        else
            return rightFn(self.value)
        end
    end
    
    Either.of = Either.Right
    
  return Either
end
_G.package.loaded["either"] = _loaded_mod_either()
    
-- module: "helpers"
local function _loaded_mod_helpers()
    local Either = require('either')
    
    -- internal utility functions
    local function always (v) 
      return function ()
        return v
      end
    end
    
    local function identity(v)
      return v
    end
    
    
    local utils = { _version = "0.0.1" }
    
    
    
    function utils.isValid(event)
      local function isString(v) return type(v) == 'string' end
      local function isNil(v) return v == nil  end
      local function checkProperty(key) 
        return function (event) 
          if not isNil(event[key]) then
            return Either.Right(event)
          else
            return Either.Left(key .. " is not nil")
          end
        end
      end
      local function check_BRIDGE_Property (key)
        return function (event)
          if event.Token ~= "AR" then
            return checkProperty(key)(event)
          else
            return Either.Right(event)
          end
        end
      end
      local function check_Recipient_Property (key)
        return function (event)
          -- property is not required if event is "Withdraw" for "BRIDGE TOKEN"
          if event.Token ~= "AR" and event.Action == "Withdraw" then
            return Either.Right(event)
          else
            return checkProperty(key)(event)
          end
        end
      end
      
      if event.Type == "Price-Update" or event.Action == "Price-Update" then
        return Either.of(event)
          :chain(checkProperty('Token'))
          :chain(checkProperty('Currency'))
          :chain(checkProperty('Price'))
          :chain(checkProperty('Timestamp'))
          :fold(function (errors)
            print('Not Valid Event: ' .. require('json').encode(event))
          end, identity)
      end
    
      if event.Type == "Yield-Update" or event.Action == "Yield-Update" then
        return Either.of(event)
          :chain(checkProperty('Token'))
          :chain(checkProperty('Yield'))
          :chain(checkProperty('Timestamp'))
          :fold(function (errors)
            print('Not Valid Event: ' .. require('json').encode(event))
          end, identity)
      end
    
      return Either.of(event)
        :chain(checkProperty('TransactionHash'))
        :chain(checkProperty('Token'))
        :chain(checkProperty('TokenAmount'))
        :chain(checkProperty('User'))
        :chain(check_Recipient_Property('Recipient'))
        :chain(checkProperty('BlockNumber'))
        :chain(checkProperty('Action'))
        :chain(check_BRIDGE_Property('LogIndex'))
        -- :chain(check_stETH_Property('BlockHash'))
        :chain(check_BRIDGE_Property('TransactionIndex'))
        :fold(
          function (errors) 
            -- not valid
            print('Not Valid Event: ' .. event.TransactionHash)
            print(errors)
            return false
          end,
          identity
        )
    
    end
    
    local function addTransactionKey(event)
      local function create_AR_Key(event)
        if event.Token == "AR" then
          if event.Action == "Deposit" then
            event.TransactionKey = event.TransactionHash .. "-D"
          elseif event.Action == "Withdraw" then
            event.TransactionKey = event.TransactionHash .. "-W"
          end
        end
        return event
      end
    
      local function create_stETH_Key(event)
        if event.Token ~= "AR" then
          event.TransactionKey = event.TransactionHash .. "-" .. event.LogIndex
        end
        return event 
      end
    
      local function create_stETH_Old_Key(event)
        if event.Token ~= "AR" then
          if event.Action == "Deposit" then
            event.OldKey = event.TransactionHash .. "-D"
          elseif event.Action == "Withdraw" then
            event.OldKey = event.TransactionHash .. "-W"
          end
        end
        return event
      end
    
      return Either.of(event)
        :map(create_AR_Key)
        :map(create_stETH_Key)
        :map(create_stETH_Old_Key)
        :fold(always(false), identity)
    end
    
    local function addUniqueIdentifier(event)
      local function create_AR_Identifier(event)
        if event.Token == "AR" then
          event.UniqueIdentifier = event.TransactionHash
        end
        return event
      end
    
      local function create_stETH_Identifier(event)
        if event.Token ~= "AR" then
          event.UniqueIdentifier = tostring(event.BlockNumber) .. "-" .. tostring(event.BlockHash) .. event.TransactionIndex .. "-" .. event.TransactionHash .. "-" .. event.LogIndex
        end
        return event
      end
    
    
      return Either.of(event)
        :map(create_AR_Identifier)
        :map(create_stETH_Identifier)
        :fold(always(false), identity)
    end
    
    
    function utils.isDuplicate(event)
      if type(event.Type) == "string" and (event.Type == "Price-Update" or event.Type == "Yield-Update") then
        return false
      end
    
      event = addTransactionKey(event)
      event = addUniqueIdentifier(event)
    
      local transactionKey = event.TransactionKey
      local oldKey = event.OldKey
      local uniqueIdentifier = event.UniqueIdentifier
      
      if event.Token ~= "AR" then
        local previousIdentifier = false
        -- check old key first if dupe return
        if EventHashes[oldKey] == true then
          return true -- is duplicate 
        end
        previousIdentifier = EventHashes[transactionKey] or false
        if previousIdentifier == false then
          -- record hash
          EventHashes[transactionKey] = uniqueIdentifier
          -- not found return
          return false
        end
        if previousIdentifier ~= uniqueIdentifer then
          local logEntry = Utils.find(function (e) 
            return e.TransactionHash == event.TransactionHash and e.Action == event.Action
          end, STETH_LOGS)
          -- update logs
          if logEntry ~= undefined then
            logEntry.BlockNumber = event.BlockNumber
            logEntry.BlockHash = event.BlockHash
          end
        end
        EventHashes[transactionKey] = uniqueIdentifier 
        return uniqueIdentifier
      elseif event.Token == "AR" then
        local r = false
        if event.Action == "Deposit" then
          r = EventHashes[transactionKey] or false
          EventHashes[transactionKey] = true
        else 
          r = EventHashes[transactionKey] or false
          EventHashes[transactionKey] = true
        end
        return r
      end
    end
    
  return utils  
end
_G.package.loaded["helpers"] = _loaded_mod_helpers()
    
-- module: "mint"
local function _loaded_mod_mint()
    --[[
      Mint Module handles the minting functions for AO Token
    
    ]]
    local bint = require('.bint')(256)
    local sqlite3 = require('lsqlite3')
    MintDb = MintDb or sqlite3.open_memory()
    -- DbAdmin Module is required
    dbAdmin = dbAdmin or require('@rakis/DbAdmin').new(MintDb)
    
    MintCount = MintCount or 0
    
    Prices = Prices or require('dal.prices')
    Yields = Yields or require('dal.yields')
    local Sources = require('dal.sources').new(dbAdmin)
    local Deposits = require('dal.deposits').new(dbAdmin)
    
    
    local Allocator = require('allocator.main')
    local ntime = require('ntime')
    
    local mintHelpers = require('helpers')
    local isValid = mintHelpers.isValid
    local isDuplicate = mintHelpers.isDuplicate
    
    -- local allocate = Allocator.allocate
    -- processes or wallets allowed to send event batches
    
    LastMintHeight = LastMintHeight or "1443785"
    
    Rewards = {}
    
    AR_RATIO = bint(1) / bint(3)
    BRIDGE_RATIO = bint(2) / bint(3)
    
    DEBUG = DEBUG or "OFF"
    
    local utils = {
      add = function(a, b)
        if (bint(a) < bint(0)) then
          a = 0
        end
        if (bint(b) < bint(0)) then
          b = 0
        end
        return tostring(bint(a) + bint(b))
      end,
      subtract = function(a, b)
        if bint(b) < bint(0) then
          b = 0
        end
        local value = bint(a) - bint(b)
        if value < bint(0) then
          return "0"
        else
          return tostring(bint(a) - bint(b))
        end
      end,
      toBalanceValue = function(a)
        return tostring(bint(a))
      end,
      toNumber = function(a)
        return tonumber(a)
      end,
      greaterThan = function(a, b)
        return bint(a) > bint(b)
      end
    }
    
    
    local function is_milliseconds(timestamp)
      -- Consider timestamps larger than 10^10 to be in milliseconds
      return timestamp > 10 ^ 10
    end
    
    local function convert_to_milliseconds(timestamp)
      -- Check if the timestamp is already in milliseconds
      if is_milliseconds(timestamp) then
        return timestamp
      else
        -- Convert seconds to milliseconds
        return timestamp * 1000
      end
    end
    
    local mint = { _version = "0.0.6" }
    
    EventHashes = EventHashes or {}
    EventQueue = EventQueue or {}
    STETH_LOGS = STETH_LOGS or {}
    DAI_LOGS = DAI_LOGS or {}
    
    local function insertDeposit(hash, recipient, oracle, user, token, amount, timestamp, tx)
      if token ~= "AR" then
        -- Queue Deposit
        table.insert(EventQueue,
        {
          Action = "Deposit",
          Hash = hash,
          Recipient = recipient,
          Oracle = oracle,
          User = user,
          Token = token,
          Amount = amount,
          Timestamp = timestamp,
          BlockNumber = tx.BlockNumber,
          BlockHash = tx.BlockHash,
          TransactionIndex = tx.TransactionIndex,
          LogIndex = tx.LogIndex
        })
        return "Queued Deposit"
      end
    
      local deposit = Deposits:getByKey(table.pack(recipient, token, user))
      local current_amount = bint(0)
      if (deposit) then
        current_amount = bint(deposit.Amount)
      end
      local total_amount = utils.add(current_amount, amount)
      
      Deposits:upsert({
        Recipient = recipient,
        Token = token,
        User = user,
        Oracle = oracle,
        Amount = total_amount,
        Updated = timestamp
      })
      
      if hash ~= "DEPOSIT" then
        EventHashes[hash] = true
      end
    end
    
    function ProcessEventQueueWithdraw(user, remaining_amount, recipient, oracle)
      local withdrawAmount = bint(remaining_amount)
      for i = 1, #EventQueue do
        local event = EventQueue[i]
        if event.Oracle == oracle and event.User == user then
          if bint(event.Amount) >= withdrawAmount then
            event.Amount = tostring(bint(event.Amount) - withdrawAmount)
            break
          else
            withdrawAmount = withdrawAmount - bint(event.Amount)
            event.Amount = "0"
          end
        end
      end
      return tostring(withdrawAmount)
    end
    
    local function updateWithdraw(hash, user, amount, timestamp, token, recipient, oracle)
      local remaining_amount = bint(amount)
      -- if no recipient address then I remove balances based on multiple recipient addresses
      local results = Deposits:getByTokenAndUser(token, user)
    
      if #results == 0 then
        ProcessEventQueueWithdraw(user, tostring(remaining_amount), recipient, oracle)
        return "Reward not on active list sending withdraw to queue"
      end
      print("Results: " .. #results)
      for i = 1, #results do
        local current_amount = 0
        current_amount = bint(results[i].Amount)
    
        -- Calculate the new total amount
        local total_amount = "0"
    
        if remaining_amount > current_amount then
          total_amount = "0"
          remaining_amount = remaining_amount - current_amount
        else
          total_amount = utils.subtract(current_amount, remaining_amount)
        end
        print("Total Amount: " .. tostring(total_amount))
        print("Current Amount: " .. tostring(current_amount))
        if current_amount > 0 then
          Deposits:upsert({
            Recipient = results[i].Recipient,
            Token = token,
            User = user,
            Amount = total_amount,
            Updated = timestamp
          })
          -- DbApply("UPDATE Rewards SET Amount = ?, Updated = ? WHERE Recipient = ? and Token = ? and User = ?",
          --   table.pack(total_amount, timestamp, results[i].Recipient, token, user))
        end
        if remaining_amount > bint(0) then
          remaining_amount = ProcessEventQueueWithdraw(user, tostring(remaining_amount), recipient, oracle)
        end
        if token == "AR" then
          EventHashes[hash] = true
        end
      end
    end
    
    -- insert delayed deposits
    function ProcessDelayedDeposits(oracle, timestamp)
      if #EventQueue == 0 then
        return "No Events"
      end
      local source = Sources:getById(oracle)
    
      if not source then
        print('Oracle not found!')
        return "Oracle not found!"
      end
    
      local DelayInterval = convert_to_milliseconds(ntime.toseconds(source.DelayDepositInterval))
      local DepositTime = tonumber(timestamp) - tonumber(DelayInterval)
      for i = #EventQueue, 1, -1 do
        if EventQueue[i] then
          local event = EventQueue[i]
          local eventTimestamp = is_milliseconds(tonumber(event.Timestamp)) and tonumber(event.Timestamp) or
              convert_to_milliseconds(tonumber(event.Timestamp))
          if event.Oracle == oracle and eventTimestamp < tonumber(DepositTime) then
            print("Depositing Event " .. i)
            if event.Action == "Deposit" then
              local deposit = Deposits:getByKey({event.Recipient, event.Token, event.User})
              local current_amount = bint(0)
    
              if (deposit) then
                current_amount = bint(deposit.Amount)
              end
    
              local total_amount = utils.add(current_amount, event.Amount)
    
              Deposits:upsert({
                Recipient = event.Recipient,
                Token = event.Token,
                User = event.User,
                Oracle = oracle,
                Amount = total_amount,
                Updated = tostring(timestamp)
              })
    
              EventHashes[event.Hash] = true
              table.remove(EventQueue, i)
            end
          end
        end
      end
      return ao.outbox.Output.data
    end
    
    mint.utils = utils
    
    function mint.updatePrice(priceUpdate) 
      Prices.update(priceUpdate.Token, priceUpdate)
    end
    
    function mint.updateYield(yieldUpdate)
      Yields.update(yieldUpdate.Token, yieldUpdate)
    end
    
    function mint.isOracle(msg)
      if not Utils.includes(msg.Owner, ao.authorities) then
        return false
      end
      local oracle = msg.From
      local results = Sources:getById(oracle)
      return #results == 1
    end
    
    -- handle register Oracle
    function mint.registerOracle(msg)
      local status, err = pcall(function()
        assert(type(msg.Oracle) == "string", "Oracle is required!")
        assert(type(msg.Name) == "string", "Name is required!")
        -- assert(type(msg.Start) == "string", "Start Timestamp required!")
        assert(type(msg.DepositDelay) == "string", "Deposit Delay is required")
        assert(type(msg.Token) == "string", "Token is required")
    
        Sources:upsert({
          Oracle = msg.Oracle,
          Name = msg.Name,
          Token = msg.Token,
          StartTimestamp = msg.Start or msg.Timestamp,
          DelayDepositInterval = msg.DepositDelay
        })
        Send({ Target = msg.From, Data = "registered." })
      end)
      if err then
        print(err)
        return err
      end
      return "OK"
    end
    
    -- [DEPRECATED] handle Oracle Deposit request
    function mint.handleDeposit(msg)
      if MODE == "BRIDGE" then
        print("not supported")
        return "Not Implemented"
      end
    end
    
    -- [DEPRECATED] handle Oracle Withdraw request
    function mint.handleWithdraw(msg)
      if MODE == "BRIDGE" then
        print("not supported")
        return "Not Implemented"
      end
      return "OK"
    end
    
    -- handle Oracle OverPlus reward distribution
    function mint.handleOverPlus(msg)
      -- TODO:
    end
    
    local function split_by_linefeed(str)
      local result = {}
      for line in str:gmatch("[^\r\n]+") do
        table.insert(result, line)
      end
      return result
    end
    
    local function split_by_comma(str)
      local result = {}
      for line in str:gmatch("[^,]+") do
        table.insert(result, line)
      end
      return result
    end
    
    BlockHeights = BlockHeights or {}
    
    -- Handle Batch Deposits mainly for loading WalletList
    function mint.Batch(msg)
      local status, err = pcall(function()
        if msg.Height and BlockHeights[msg.Height] then
          print("Already Applied Block: " .. msg.Height)
          return "OK"
        end
        if msg.Height then
          BlockHeights[msg.Height] = true
          print("Height: " .. msg.Height)
          LastMintHeight = msg.Height
        end
        assert(type(msg.Token) == "string", "Token is required!")
        -- Batch can be in two formats
        -- 1. Address:Balance KeyValue
        -- 2. Mint Event Transactions "Format = 'Event-List'"
        if msg.Format and msg.Format == "Event-List" then
          print('Format: ' .. msg.Format)
          -- event list
          local events = type(msg.Data) == "string" and require('json').decode(msg.Data) or msg.Data
          print(string.format("Received %d events to process", #events))
          for i = 1, #events do
            local event = events[i]
            -- set BlockNumber if transaction is AR
            if event.Token == "AR" then event.BlockNumber = msg.Height end
    
            if isValid(event) then
              -- handle Price and Yield Updates
              if event.Action == "Price-Update" then
                mint.updatePrice(event)
                print('updated price for ' .. event.Token)
              elseif event.Action == "Yield-Update" then
                mint.updateYield(event)
                print('updated yield for ' .. event.Token)
              else
                print('Token: ' .. event.Token .. ' Hash: ' .. event.TransactionHash )
                --- Check For Duplicates or ReOrders
                if not isDuplicate(event) then
                  if event.Token == "stETH" then table.insert(STETH_LOGS, event) end
                  if event.Token == "DAI" then table.insert(DAI_LOGS, event) end
    
                  if event.Action == "Deposit" then
                    insertDeposit(event.TransactionHash, event.Recipient, msg.From, event.User, event.Token,
                      event.TokenAmount,
                      event.Timestamp or msg.Timestamp, event)
                  elseif event.Action == "Withdraw" then
                    local total = utils.add(event.TokenAmount, event.Fee or "0")
                    -- print(string.format("Withdraw %s for %s", total, event.User))
                    updateWithdraw(event.TransactionHash, event.User, total, event.Timestamp, event.Token or "AR",
                      event.Recipient,
                      msg.From)
                  end
                else
                  print('Duplicate Event')
                end
              end
            end
          end
        elseif msg.Format and msg.Format == "Event-List-CSV" then
          local lines = split_by_linefeed(msg.Data)
          for i = 1, #lines do
            local fields = split_by_comma(lines[i])
            local event = {
              Action = fields[1],
              Recipient = fields[2],
              Amount = fields[3],
              Fee = fields[4],
              Timestamp = fields[5],
              TransactionHash = fields[6]
            }
            if not isDuplicate(event) then
              if event.Action == "Deposit" then
                insertDeposit(event.TransactionHash, event.Recipient, msg.From, event.Recipient, "AR", event.Amount,
                  event.Timestamp, event)
              elseif event.Action == "Withdraw" then
                local total = utils.add(event.Amount or "0", event.Fee or "0")
                updateWithdraw(event.TransactionHash, event.Recipient, total, event.Timestamp, msg.Token, event.Recipient,
                  msg.From)
              end
            else
              print("Duplicate Event: ")
              print(event)
            end
            -- print('Processed: ' .. lines[i])
          end
          return #lines
        elseif msg.Format and msg.Format == "Event-List-Balances" then
          -- do key/value
          local deposits = require('json').decode(msg.Data)
          for k, v in pairs(deposits) do
            --print('insert deposit: ' .. v .. ' to ' .. k)
            insertDeposit("DEPOSIT", k, msg.From, k, msg.Token, v, msg.Timestamp, {})
          end
          print("Loaded Batch " .. msg.Batch)
        end
      end)
      if err then
        Send({ Target = msg.From, Data = err })
        return err
      end
      return "OK"
    end
    
    function mint.LoadBalances(msg)
      local status, err = pcall(function()
        local deposits = require('json').decode(msg.Data)
        for k, v in pairs(deposits) do
          -- print('initialize balance: ' .. v .. ' to ' .. k)
          Balances[k] = v
        end
        print('Loaded Batch ' .. msg.Batch)
      end)
      if err then
        Send({ Target = msg.From, Data = err })
        return err
      end
      return "OK"
    end
    
    -- handle Mint
    function mint.Mint(msg)
      local status, err = pcall(function()
        if msg.Action == "Cron" and MODE == "OFF" then
          print("Not Minting by CRON untils MODE is set to ON")
          return "OK"
        end
    
        if MODE == "BRIDGE" then
          mint.MintBridge(msg)
          return string.format([[
    Total Minted Supply: %s
    Mints: %s
            ]], MintedSupply, MintCount)
        end
    
        print('Minting Every 5 minutes!')
        -- Get Reward List
        local list = mint.GetAccounts("AR")
        -- Get Remaining Supply
        local remainingSupply = utils.subtract(TotalSupply, MintedSupply)
        -- Get Reward Percent
        local reward = string.format('%.0f', bint(remainingSupply) * ARM_Mint_PCT)
        -- Allocate Rewards
        local rewards = allocate(list, reward)
        -- Update Balances
        for k, v in pairs(rewards) do
          if not Balances[k] then
            Balances[k] = "0"
          end
          Balances[k] = utils.add(Balances[k], v)
        end
        -- Calculate Circulating Supply
        MintedSupply = Utils.reduce(function(a, b) return tostring(bint(a) + bint(b)) end, "0", Utils.values(Balances))
        MintCount = MintCount + 1
    
        print("Total Minted Supply" .. MintedSupply)
        print("Mints: " .. MintCount)
    
        LastMintTimestamp = msg.Timestamp
      end)
      if err then
        print(err)
        Send({ Target = msg.From, Data = err })
        return err
      end
      return string.format([[
      Total Minted Supply: %s
      Mints: %s
      ]], MintedSupply, MintCount)
    end
    
    BridgeBuffer = BridgeBuffer or {}
    if RewardBufferMode == nil then
      RewardBufferMode = true
    end
    
    local function splitBy(str, delimiter)
      local result = {}
      for part in string.gmatch(str, "([^" .. delimiter .. "]+)") do
          table.insert(result, part)
      end
      return result
    end
    
    function mint.MintBridge(msg)
      -- Get Reward Percent
      local reward = string.format('%.0f', (bint(TotalSupply) - bint(MintedSupply)) * ARM_Mint_PCT)
      -- assign allocation about by 1/3 AR and 2/3 BRIDGE
      local arReward = string.format('%.0f', bint(reward) * AR_RATIO)
      local brReward = string.format('%.0f', bint(reward) * BRIDGE_RATIO)
      local updateBalances = Utils.map(function (deposit) 
        if not Balances[deposit.Recipient] then
          Balances[deposit.Recipient] = "0"
        end
        Balances[deposit.Recipient] = utils.add(Balances[deposit.Recipient], deposit.Reward)
        return deposit
      end)
      local onlyPositiveAmounts = Utils.filter(function (d) return d.Amount ~= "0" end)
    
      if RewardBufferMode then
        table.insert(BridgeBuffer, { MintTimestamp = msg.Timestamp, MintSupply = brReward, MintCount = MintCount })
        print('Buffered stETH ' .. brReward)
      else
        local Oracles = Sources:getBridgeOracles()
        -- Apply Delayed Deposists
        for i = 1, #Oracles do
          ProcessDelayedDeposits(Oracles[i].Oracle, msg.Timestamp)
        end
        local ds = onlyPositiveAmounts(Deposits:getBridgeDeposits())
        print("Bridge Accounts: " .. #ds)
        updateBalances(
          Allocator.compute(ds, brReward, Prices, Yields)
        )
    
        if DEBUG == "ON" then
          BRIDGE_LOGS = BRIDGE_LOGS or {}
          table.insert(BRIDGE_LOGS, {
            MintCount = MintCount,
            MintedSupply = MintedSupply,
            Rewards = results
          })
        end
        print('Distributed Bridge Rewards: ' .. brReward)
      end
      local ars = onlyPositiveAmounts(Deposits:getByToken("AR"))
      print("Ar accounts: " .. #ars)
      updateBalances(
        Allocator.compute(ars, arReward, Prices, Yields)
      )
      print('Distributed Arweave Rewards: ' .. arReward)
      -- Calculate Circulating Supply
      if RewardBufferMode then
        MintedSupply = utils.add(BridgeBuffer[#BridgeBuffer].MintSupply,
          Utils.reduce(function(a, b) return tostring(bint(a) + bint(b)) end, "0", Utils.values(Balances)))
      else
        MintedSupply = Utils.reduce(function(a, b) return tostring(bint(a) + bint(b)) end, "0", Utils.values(Balances))
      end
      MintCount = MintCount + 1
    
      print("Total Minted Supply: " .. MintedSupply)
      print("Mints: " .. MintCount)
    
      LastMintTimestamp = msg.Timestamp
      -- free memory
      collectgarbage('collect')
      return "Minted Bridge Successfully."
    end
    
    function mint.getBalancesByUser(msg)
      local status, err = pcall(function()
        assert(type(msg.User) == "string", "User is required!")
        local results = dbAdmin:exec(string.format([[select Recipient from Rewards where User = "%s";]], msg.User))
        local balances = {}
        for i = 1, #results do
          balances[results[i].Recipient] = Balances[results[i].Recipient]
        end
        Send({ Target = msg.From, Action = "Get-Balances-By-User-Response", Data = require('json').encode(balances) })
        return "OK" -- balances
      end)
      if err then
        print(err)
        Send({ Target = msg.From, Data = err })
        return err
      end
    end
    
    function mint.handleRebase(msg)
      -- TODO: Store dailyYield and annualYield on oracle.
      SQL = [[UPDATE Oracles set NativeYieldRate = ? where Oracle = ?]]
      DbApply(SQL, table.pack(msg.DailyRate, msg.From))
      return "ok"
    end
    
    -- this handler is prepended to the top of the handlers list and
    -- always fires, it checks
    function mint.MintBackup(msg)
      local five_minutes_ms = 300000 -- 5 minutes in milliseconds
      local Now = msg.Timestamp
      local delta = Now - LastMintTimestamp
      
      if delta > five_minutes_ms then
        local mintsTodo = math.floor(delta/five_minutes_ms)
        for i=1,mintsTodo do
          mint.Mint({Timestamp = msg.Timestamp})
        end
      end
    
    end
    
    function mint.unregister(msg)
      local status, err = pcall(function()
        local results = dbAdmin:exec(string.format([[DELETE FROM Oracles WHERE Oracle = "%s";]], msg.Oracle))
        Send({Target = msg.From, Data = "Unregistered."})
      end)
    end
    -- matchers
    function mint.isRegister(msg)
      return msg.From == PEDG and msg.Action == "PEDG.Oracle-Register" 
    end
    
    function mint.isUnregister(msg) 
      return msg.From == PEDG and msg.Action == "PEDG.Oracle-Unregister"
    end
    
    function mint.isDeposit(msg)
      return msg.Action == "Deposit" and mint.isOracle(msg)
    end
    
    function mint.isWithdraw(msg)
      return msg.Action == "Withdraw" and mint.isOracle(msg)
    end
    
    function mint.isOverPlus(msg)
      return msg.Action == "OverPlus" and mint.isOracle(msg)
    end
    
    function mint.isBatch(msg)
      BatchesAllowed = Utils.map(function (row) return row.Oracle end, dbAdmin:exec[[select Oracle from Oracles;]])
      return msg.Action == "Mint.Batch" and Utils.includes(msg.From, BatchesAllowed)
    end
    
    function mint.isLoadBalances(msg)
      return msg.Action == "Mint.LoadBalances" and Utils.includes(msg.From, BatchesAllowed)
    end
    
    function mint.isCron(msg)
      -- return msg.Action == "Cron" and msg.From == "gCpQfnG6nWLlKs8jYgV8oUfe38GYrPLv59AC7LCtCGg"
      -- print("msgFrom: " .. msg.From)
      return msg.Action == "Cron" and (msg.From == ao.env.Process.Owner or msg.From == ao.id)
    end
    
    function mint.isGetBalancesByUser(msg)
      return msg.Action == "Get-Balances-By-User"
    end
    
    function mint.isLidoTokenRebase(msg)
      return msg.Action == "LidoTokenRebased" and mint.isOracle(msg)
    end
    
    function mint.isCronBackup(msg)
      if msg.Action == "Cron" then
        return false
      end
      if msg.Action == "Eval" then
        return false
      end
      if MODE == "OFF" then
        return false
      end
      return "continue"
    end
    
    BridgeSnapshots = BridgeSnapshots or {}
    
    function mint.BridgeBufferMint(BridgeBuffer)
      local Oracles = dbAdmin:exec([[SELECT Oracle, Token From Oracles where Token != "AR";]])
      local stETH_ORACLE = Utils.find(function(o) return o.Token == "stETH" end, Oracles).Oracle
    
      for i = 1, #BridgeBuffer do
        ProcessDelayedDeposits(stETH_ORACLE, BridgeBuffer[i].MintTimestamp)
        local brReward = BridgeBuffer[i].MintSupply
        local brAccounts = mint.GetAccounts('stETH')
        local deposits = allocate(brAccounts, brReward)
        -- snapshot data
        table.insert(BridgeSnapshots, {
          MintSupply = BridgeBuffer[i].MintSupply,
          Timestamp = BridgeBuffer[i].Timestamp,
          MintCount = BridgeBuffer[i].MintCount,
          Mint = deposits
        })
        -- apply to AOTOKEN
        for k, v in pairs(deposits) do
          if not Balances[k] then
            Balances[k] = "0"
          end
          Balances[k] = utils.add(Balances[k], v)
        end
        -- remove from buffer
        BridgeBuffer[i] = nil
        print('Distributed stETH ' .. brReward)
      end
    end
    
    function mint.MintBridgeDemo(i)
      local Oracles = dbAdmin:exec([[SELECT Oracle, Token From Oracles where Token != "AR";]])
      local stETH_ORACLE = Utils.find(function(o) return o.Token == "stETH" end, Oracles).Oracle
    
      print("MintCount " .. BridgeBuffer[i].MintCount)
      ProcessDelayedDeposits(stETH_ORACLE, BridgeBuffer[i].MintTimestamp)
      local brReward = BridgeBuffer[i].MintSupply
      local brAccounts = Mint.GetAccounts('stETH')
      local deposits = allocate(brAccounts, brReward)
      -- snapshot data
      table.insert(BridgeSnapshots, {
        MintSupply = BridgeBuffer[i].MintSupply,
        Timestamp = BridgeBuffer[i].MintTimestamp,
        MintCount = BridgeBuffer[i].MintCount,
        Mint = deposits
      })
      -- apply to AOTOKEN
      for k, v in pairs(deposits) do
        if not Balances[k] then
          Balances[k] = "0"
        end
        Balances[k] = utils.add(Balances[k], v)
      end
      -- remove from buffer
      BridgeBuffer[i] = nil
      print('Distributed stETH ' .. brReward)
      return ao.outbox.Output.data
    end
    
  return mint  
end
_G.package.loaded["mint"] = _loaded_mod_mint()
    
    --[[
      AO Token uses the local token contract
    ]]
    local token = require('token')
    local bint = require('.bint')(256)
    
    -- PEDG Test
    PEDG = PEDG or "lUsDXY5s-pTQNXgXJjIJDxX5whyWGKJ5syxMyq3PLOk"
    
    -- LastMintTimestamp
    LastMintTimestamp = LastMintTimestamp or 0
    -- MODE - OFF = Manual Minting only, ON = Automated Minting, BRIDGE = AR/BRIDGE MINT RULES
    MODE = MODE or "OFF"
    
    -- Circulating Supply
    MintedSupply = MintedSupply or "0"
    -- 5 MIN REWARD SUPPLY PERCENT
    AR_Mint_PCT = bint("1647321875") / bint("1000")
    ARM_Mint_PCT = AR_Mint_PCT / bint("1000000000000")
    
    Mint = require('mint')
    
    -- Handlers.remove("mint.deposit")
    -- Handlers.remove("mint.withdraw")
    
    Handlers.add('mint.register', Mint.isRegister, Mint.registerOracle)
    Handlers.add('mint.unregister', Mint.isUnregister, Mint.unregister)
    
    Handlers.add('cron.mint', Mint.isCron, Mint.Mint)
    Handlers.add('mint.batch', Mint.isBatch, Mint.Batch)
    Handlers.add('mint.loadbalances', Mint.isLoadBalances, Mint.LoadBalances)
    Handlers.add('mint.balancesByUser', Mint.isGetBalancesByUser, Mint.getBalancesByUser)
    Handlers.add('mint.LidoTokenRebased', Mint.isLidoTokenRebase, Mint.handleRebase)
    -- should be first handler
    Handlers.prepend('mint.cronBackup', Mint.isCronBackup, Mint.MintBackup)
    
    Handlers.add('token.info',
      Handlers.utils.hasMatchingTag("Action", "Info"),
      token.info
    )
    
    Handlers.add('token.balance',
      Handlers.utils.hasMatchingTag("Action", "Balance"),
      token.balance
    )
    
    Handlers.add('token.balances',
      Handlers.utils.hasMatchingTag("Action", "Balances"),
      token.balances
    )
    
    -- No token transfers...
    -- Handlers.add('token.transfer',
    --   Handlers.utils.hasMatchingTag("Action", "Transfer"),
    --   token.transfer
    -- )
    
    Handlers.add('token.totalSupply',
      Handlers.utils.hasMatchingTag("Action", "Total-Supply"),
      token.totalSupply
    )
    
    Handlers.add('token.burn',
      Handlers.utils.hasMatchingTag("Action", "Burn"),
      token.burn
    )
    
    Handlers.add('token.mintedSupply',
      Handlers.utils.hasMatchingTag("Action", "Minted-Supply"),
      function(msg)
        Send({ Target = msg.From, Data = MintedSupply })
        print("Id: " .. msg.From .. " Requested Minted Supply: " .. MintedSupply)
      end
    )
    
    Handlers.add('collect.garbage',
      function (msg)
        return "continue"
      end,
      function (msg)
        collectgarbage('collect')
        MintDb:close_vm(false)
      end
    )
    
    function SendBalances(msg)
      -- if msg.Format == "CSV" then
      local batchSize = 10000
      local batch = 1
      local batchItems = 0
      local csv = ""
      for k, v in pairs(Balances) do
        if batchItems > batchSize then
          batch = batch + 1
          Send({ Target = msg.From, Action = "Import", Format = "CSV", Data = csv, Batch = tostring(batch) })
          batchItems = 0
          csv = ""
        end
        local users = dbAdmin:exec(string.format([[select User from Rewards where Recipient = "%s" and Token != "AR";]], k))
        local usersString = require('json').encode(Utils.map(Utils.prop('User'),users))
        csv = csv .. k .. "," .. v .. ", '" .. usersString .. "'\n"
        batchItems = batchItems + 1
      end
      -- send last batch
      Send({ Target = msg.From, Action = "Import", Format = "CSV", Data = csv, Batch = tostring(batch) })
      print("Sent CSV Batches...")
      return "ok"
      -- end
      --Send({ Target = msg.From, Data = Balances })
    end
    
    AOMIRRORS = AOMIRRORS or {"F-EvpwmZXIlndrEqXOXSSifUeyn-LMBdeJKI6Gflk1g","Pi-WmAQp2-mh-oWH9lWpz5EthlUDj_W0IusAv-RXhRk"}
    Handlers.add("Export-Balances",
      function(msg)
        return msg.Action == "Export-Balances" and Utils.includes(msg.From, AOMIRRORS)
      end,
      SendBalances
    )
    
    function SendRewards(msg)
      local status, err = pcall(function()
        assert(type(msg.Token) == "string", "Token is required!")
        -- if msg.Format == "CSV" then
        local batchSize = 10000
        local batch = 1
        local batchItems = 0
        local csv = ""
        local RewardToken = msg.Token
    
        local bint = require('.bint')(256)
        local ethBalances = dbAdmin:exec(string.format(
          [[select User, Amount from Rewards where Token = "%s";]], RewardToken))
        
        ethBalances = Utils.reduce(function (acc, rec)
          if not acc[rec.User] then
            acc[rec.User] = {
              Amount = "0",
              Delayed = "0"
            }
          end
          acc[rec.User].Amount = Mint.utils.add(acc[rec.User].Amount or "0", rec.Amount)
          return acc
        end, {}, ethBalances)
    
        -- ethBalances = Utils.map(function(d)
        --   d.Total = string.format("%.0f", d.Total)
        --   return d
        -- end, ethBalances)
        for k, v in pairs(ethBalances) do
          local deposits = Utils.filter(function(e) return e.User == k end, EventQueue)
    
          local delayed_balance = bint("0")
          for i = 1, #deposits do
            delayed_balance = Mint.utils.add(delayed_balance, deposits[i].Amount)
          end
          ethBalances[k].Delayed = tostring(delayed_balance)
        end
    
        for k,v in pairs(ethBalances) do
          local balance = ethBalances[k]
          if batchItems > batchSize then
            batch = batch + 1
            Send({ Target = msg.From, Action = "Import", Format = "CSV", Data = csv, Batch = tostring(batch) })
            batchItems = 0
            csv = ""
          end
          csv = csv .. k .. "," .. balance.Amount .. "," .. balance.Delayed .. "\n"
          batchItems = batchItems + 1
        end
        -- send last batch
        Send({ Target = msg.From, Action = "Import", Format = "CSV", Data = csv, Batch = tostring(batch) })
        print("Sent CSV to ETH_MIRROR Batches...")
        -- return "ok"
        -- end
        --Send({ Target = msg.From, Data = Balances })
      end)
      if err then
        print(err)
        Send({ Target = msg.From, Data = err })
        return err
      end
    end
    
    AOETH_MIRROR = {"sda7uk_1vYxWk2_NhGcFWPSPj2ar4YRh8cE1dRxniNg"}
    Handlers.add("Export-Rewards",
      function(msg)
        return msg.Action == "Export-Rewards" and Utils.includes(msg.From, AOETH_MIRROR)
      end,
      SendRewards
    )
    
    
    
    return 2
    