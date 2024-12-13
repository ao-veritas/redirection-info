-- -@diagnostic disable: lowercase-global
local json = require("json")
base64 = require(".base64")
sqlite3 = require("lsqlite3")
db = db or sqlite3.open_memory()
local bint = require('.bint')(256)
Staked = Staked or 0

Config = {
    UNSTAKE_DELAY = 3,
    TOTAL_SUPPLY = 3150000,
    TOKENS = {
        PTOKEN = "34jmjvIwlz_GvNElXe1yVW_dcQl7Xs1rscfHM8tfrlE",
        QAR = "2GJ6V2TnJw0YplnSqEjSDFwILYopWSFGTGrDxS_vCCk"
    },
}

-- CREATE TABLE IF NOT EXISTS BridgedTokens(
--     TokenID TEXT,
--     PRIMARY KEY (TokenID)
-- );
-- FOREIGN KEY (BridgedTokenID) REFERENCES BridgedTokens(TokenID)

-- CREATE TABLE IF NOT EXISTS CronTransactions (
--     Timestamp TEXT, 
--     TransID TEXT,
--     UserID TEXT,
--     TokenID TEXT,
--     Quantity TEXT,
--     ProjectID TEXT,
--     Status TEXT,
--     Type TEXT
-- );
-- DROP TABLE IF EXISTS Stakers;
-- DROP TABLE IF EXISTS Transactions;
-- DROP TABLE IF EXISTS CronTransactions;

db:exec([[
        PRAGMA foreign_keys = ON;
        CREATE TABLE IF NOT EXISTS Stakers (
            UserID TEXT NOT NULL,
            TotalStaked TEXT DEFAULT '0',
            UnstakeAt INTEGER,
            PRIMARY KEY (UserID)
        );
        
        CREATE TABLE IF NOT EXISTS Transactions (
            TransID TEXT PRIMARY KEY,
            Timestamp TEXT NOT NULL, 
            SenderID TEXT NOT NULL,
            RecieverID TEXT NOT NULL,
            TokenID TEXT NOT NULL,
            Quantity TEXT NOT NULL,
            Status TEXT NOT NULL,
            Type TEXT NOT NULL
        );
        
        CREATE INDEX IF NOT EXISTS idx_transactions_sender ON Transactions(SenderID);
        CREATE INDEX IF NOT EXISTS idx_transactions_receiver ON Transactions(RecieverID);
        CREATE INDEX IF NOT EXISTS idx_transactions_status ON Transactions(Status);
        
        CREATE TABLE IF NOT EXISTS CronTransactions (
            TransID TEXT PRIMARY KEY,
            Timestamp TEXT NOT NULL, 
            UserID TEXT NOT NULL,
            TokenID TEXT NOT NULL,
            Quantity TEXT NOT NULL,
            Status TEXT NOT NULL,
            Type TEXT NOT NULL
        );
        
        CREATE INDEX IF NOT EXISTS idx_cron_transactions_user ON CronTransactions(UserID);
        CREATE INDEX IF NOT EXISTS idx_cron_transactions_status ON CronTransactions(Status);
    ]])

local utils = {
    add = function (a,b) 
      return tostring(bint(a) + bint(b))
    end,
    subtract = function (a,b)
      return tostring(bint(a) - bint(b))
    end
  }--cron

function sql_run(query, ...)
    print("enter sql run")
    local m = {}
    local stmt = db:prepare(query)
    print(query)
    -- print("run stmt:" .. tostring(stmt));
    if stmt then
        -- print("enter stmt1")
        local bind_res = stmt:bind_values(...)
        assert(bind_res, "❌[bind error] " .. db:errmsg())
        for row in stmt:nrows() do
            table.insert(m, row)
            -- print("enter for loop1")
        end
        stmt:finalize()
    end
    return m
end

function sql_write(query, ...)
    print("enter sql write")
    print(query)
    local stmt = db:prepare(query)
    -- print("write stmt : " .. tostring(stmt))
    if stmt then
        -- print("enter write stmt")
        local bind_res = stmt:bind_values(...)
        assert(bind_res, "❌[bind error] " .. db:errmsg())
        local step = stmt:step()
        assert(step == sqlite3.DONE, "❌[write error] " .. db:errmsg())
        stmt:finalize()
    end
    -- print("before return")
    return db:changes()
end


Handlers.add(
    "Stake",
    Handlers.utils.hasMatchingTag("X-Action", "Stake"),
    function(msg)
        if msg.Action ~= "Credit-Notice" or msg.From ~= Config.TOKENS.QAR then
            print("❌ Invalid token source or action")
            return
        end
        -- Check if recieved from bridged tokens list or not
            local tags = msg.Tags
            local newQuantity = bint(tags.Quantity) -- New quantity to add
            local height = tonumber(msg['Block-Height'])
            
            -- Check if user exists using a single query
            local user = sql_run([[
                SELECT TotalStaked 
                FROM Stakers 
                WHERE UserID = ?;
            ]], msg.Sender)

            if #user > 0 then
                -- Update existing user
                local updatedQuantity = utils.add(user[1].TotalStaked, tostring(newQuantity))
                
                sql_write(
                    [[UPDATE Stakers 
                      SET TotalStaked = ?, 
                          UnstakeAt = ? 
                      WHERE UserID = ?]],
                    updatedQuantity,
                    height + Config.UNSTAKE_DELAY,
                    msg.Sender
                )
            else
                -- Insert new user
                sql_write(
                    [[INSERT INTO Stakers (UserID, TotalStaked, UnstakeAt) 
                      VALUES (?, ?, ?)]],
                    msg.Sender,
                    tostring(newQuantity),
                    height + Config.UNSTAKE_DELAY
                )
            end

            -- Log the transaction
            sql_write(
                [[INSERT INTO Transactions (Timestamp, TransID, SenderID, RecieverID, TokenID, Quantity, Status, Type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)]],
                tostring(msg.Timestamp), msg.Id, tags.Sender, ao.id, msg.From,
                tostring(tags.Quantity), "fulfilled", "utc"
            )

            -- Increment the global staked amount
            Staked = utils.add(Staked, tags.Quantity)
            print("Successfully staked " .. tags.Quantity)
    end
)


Handlers.add(
    "Cron",
    Handlers.utils.hasMatchingTag("Action", "Cron"),
    function(msg)
        if tonumber(Staked) <= 0 then
            print("❌ No tokens staked")
            return
        end
        -- Total staked in the contract
        local total_staked = Staked
        print("Total staked: " .. total_staked)
        
        -- Total tokens to distribute
        local to_distribute = math.floor(Config.TOTAL_SUPPLY * 0.0031)
        print("To distribute: " .. to_distribute)
        
        -- Fetch all stakers
        local stakers = sql_run([[SELECT * FROM Stakers]]);
        
        -- Calculate and distribute tokens based on each user's percentage
        for _, staker in ipairs(stakers) do
            print("In stakers loop")
            local user_stake = tonumber(staker.TotalStaked)
            local user_percentage = user_stake / total_staked
            local user_distribution = math.floor(to_distribute * user_percentage) -- Round down to avoid decimals
            
            print("Before sending: " .. staker.UserID .. " " .. user_distribution)
            print(Config.TOKENS.PTOKEN)
            -- Send tokens based on the calculated distribution
            ao.send({
                Target = Config.TOKENS.PTOKEN,
                Action = "Transfer",
                Quantity = tostring(user_distribution), -- Quantity as integer
                Recipient = staker.UserID,
                ["X-Action"] = "PtokenDistribute"
            })
            
            print("Sent " .. user_distribution .. " tokens to UserID: " .. staker.UserID)
        end
    end
)

Handlers.add(
    "PtokenDebitNotification",
    Handlers.utils.hasMatchingTag("X-Action", "PtokenDistribute"),
    function(msg)
        print("1")
        -- Check if the message is a debit notification from `ptoken`
        if msg.Action == "Debit-Notice" and msg.From == Config.TOKENS.PTOKEN then
            print("3")
            -- Extract required details from the message and tags
            local timestamp = tostring(msg.Timestamp)
            local trans_id = msg.Id
            local user_id = msg.Tags.Recipient
            local token_id = msg.From  -- The token ID being debited (from ptoken)
            local quantity = msg.Tags.Quantity
            local status = "fulfilled"
            local type = "ctu"
            Config.TOTAL_SUPPLY = Config.TOTAL_SUPPLY - tonumber(quantity)
            print("total in debit" .. tonumber(quantity))
            -- Insert the transaction into the Transactions table
            sql_write(
                [[INSERT INTO CronTransactions (Timestamp, TransID, UserID, TokenID, Quantity, Status, Type)
                  VALUES (?, ?, ?, ?, ?, ?, ?)]],
                timestamp, trans_id, user_id, token_id, quantity, status, type
            )

            -- print("Transaction recorded: " .. trans_id .. " - Quantity: " .. quantity)
        else
            print("No action taken: Not a debit notification from ptoken.")
        end
    end
)


Handlers.add(
    "Unstake",
    Handlers.utils.hasMatchingTag("Action", "UnStake"),
    function(msg)
        print("Unstaking process initiated.")
        local tags = msg.Tags
        local unstakeQuantity = bint(tags.Quantity) -- Quantity to unstake
        local userID = msg.From

        -- Validate quantity
        if unstakeQuantity <= 0 then
            print("❌ Invalid unstake amount")
            return
        end

        -- Check if the user exists and retrieve the current staked amount
        local user = sql_run([[
            SELECT TotalStaked, UnstakeAt 
            FROM Stakers 
            WHERE UserID = ?
        ]], userID)

        if #user == 0 then
            print("User not found. Cannot unstake.")
            return
        end

        if tonumber(user[1].UnstakeAt) > tonumber(msg['Block-Height']) then
            print("Tokens still locked")
            return
        end

        local currentStaked = bint(user[1].TotalStaked)

        -- Ensure the unstake amount is valid
        if unstakeQuantity > currentStaked then
            print("Unstake amount exceeds current staked amount.")
            return
        end

        -- Perform the transfer back to the user
        print("Initiating transfer...")
        Send({
            Target = Config.TOKENS.QAR,
            Action = "Transfer",
            Quantity = tostring(unstakeQuantity),
            Recipient = userID,
            ["X-Action"] = "UnstakedQAR"
        })

        -- Update the stakers table and global staked value
        local newStaked = currentStaked - unstakeQuantity

        if newStaked == 0 then
            -- Remove the user if no amount is left staked
            sql_write([[DELETE FROM Stakers WHERE UserID = ?;]], userID)
        else
            -- Update the user's staked amount
            sql_write([[UPDATE Stakers SET TotalStaked = ? WHERE UserID = ?;]], tostring(newStaked), userID)
        end

        -- Update the global staked variable
        Staked = utils.subtract(Staked, tags.Quantity)
        print("Successfully unstaked " .. tags.Quantity)
    end
)

Handlers.add(
    "UnstakeDebitNotification",
    Handlers.utils.hasMatchingTag("X-Action", "UnstakedQAR"),
    function(msg)
        print("Unstake Debit Notification handler triggered.")

        -- Ensure the message is a debit notification and comes from the correct QAR
        if msg.Action == "Debit-Notice" and msg.From == Config.TOKENS.QAR then
            print("Processing debit notification for unstake.")

            -- Extract details from the message and tags
            local timestamp = tostring(msg.Timestamp)
            local trans_id = msg.Id
            local user_id = msg.Tags.Recipient
            local token_id = msg.From  -- The token ID being debited (from QAR)
            local quantity = msg.Tags.Quantity
            local status = "fulfilled"
            local type = "ctu"

            -- Log the transaction in the Transactions table
            sql_write(
                [[INSERT INTO Transactions (Timestamp, TransID, SenderID, RecieverID, TokenID, Quantity, Status, Type)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)]],
                timestamp, trans_id, ao.id, user_id, token_id, quantity, status, type
            )

            print("Unstake transaction logged: " .. trans_id .. " - Quantity: " .. quantity)
        else
            print("No action taken: Not a debit notification from the correct QAR.")
        end
    end
)

function getUserStakeInfo(userId)
    return sql_run([[
        SELECT s.TotalStaked, s.UnstakeAt
        FROM Stakers s
        WHERE s.UserID = ?;
    ]], userId)
end

-- Add new handler for stake queries
Handlers.add(
    "QueryUserStake",
    Handlers.utils.hasMatchingTag("Action", "QueryStake"),
    function(msg)
        if not msg.Tags.userId then
            print("❌ No user ID provided")
            return
        end

        local userStakes = getUserStakeInfo(msg.Tags.userId)
        
        -- Prepare response
        local response = {
            userId = msg.Tags.userId,
            contractId = ao.id,  -- Current contract's ID
            stakeInfo = {
                totalStaked = userStakes[1] and userStakes[1].TotalStaked or "0",
                unstakeAt = userStakes[1] and userStakes[1].UnstakeAt or 0
            }
        }

        -- Send response back to requester
        ao.send({
            Target = msg.From,
            Action = "StakeUpdate",
                userId = msg.Tags.userId,
                currentStake = response.stakeInfo.totalStaked,
        })
        
        print("Sent stake info for user: " .. msg.Tags.userId)
    end
)

-- Add these handlers to your existing Lua contract

-- Handler for getting latest transactions
Handlers.add(
    "QueryTransactions",
    Handlers.utils.hasMatchingTag("Action", "QueryTransactions"),
    function(msg)
        local limit = msg.Tags.limit or 10  -- Default to 10 transactions
        
        local transactions = sql_run([[
            SELECT * FROM Transactions 
            ORDER BY Timestamp DESC 
            LIMIT ?;
        ]], limit)
        
        ao.send({
            Target = msg.From,
            Action = "TransactionsUpdate",
            Data = json.encode(transactions)
        })
    end
)

-- Handler for getting latest cron transactions
Handlers.add(
    "QueryCronTransactions",
    Handlers.utils.hasMatchingTag("Action", "QueryCronTransactions"),
    function(msg)
        local limit = msg.Tags.limit or 10  -- Default to 10 transactions
        
        local transactions = sql_run([[
            SELECT * FROM CronTransactions 
            ORDER BY Timestamp DESC 
            LIMIT ?;
        ]], limit)
        
        ao.send({
            Target = msg.From,
            Action = "CronTransactionsUpdate",
            Data = json.encode(transactions)
        })
    end
)