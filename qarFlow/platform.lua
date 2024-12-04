-- -@diagnostic disable: lowercase-global
local json = require("json")
base64 = require(".base64")
sqlite3 = require("lsqlite3")
db = db or sqlite3.open_memory()
UnstakeDelay = UnstakeDelay or 670
local bint = require('.bint')(256)
Staked = Staked or 0
ToDistribute = 55407801418
PToken = "34jmjvIwlz_GvNElXe1yVW_dcQl7Xs1rscfHM8tfrlE"
QAR = "2GJ6V2TnJw0YplnSqEjSDFwILYopWSFGTGrDxS_vCCk"



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

db:exec(
    [[
        DROP TABLE IF EXISTS Stakers;
        DROP TABLE IF EXISTS Transactions;
        DROP TABLE IF EXISTS CronTransactions;
        CREATE TABLE IF NOT EXISTS Stakers (
            UserID TEXT,
            TotalStaked DEFAULT 0,
            UnstakeAt INTEGER,
            PRIMARY KEY (UserID)
        );
        CREATE TABLE IF NOT EXISTS Transactions (
            Timestamp TEXT, 
            TransID TEXT,
            SenderID TEXT,
            RecieverID TEXT,
            TokenID TEXT,
            Quantity TEXT,
            Status TEXT,
            Type TEXT
        );
        CREATE TABLE IF NOT EXISTS CronTransactions (
            Timestamp TEXT, 
            TransID TEXT,
            UserID TEXT,
            TokenID TEXT,
            Quantity TEXT,
            Status TEXT,
            Type TEXT
        );
    ]]
)

local utils = {
    add = function (a,b) 
      return tostring(bint(a) + bint(b))
    end,
    subtract = function (a,b)
      return tostring(bint(a) - bint(b))
    end
  }

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
        -- Check if recieved from bridged tokens list or not
        if msg.Action == "Credit-Notice" and msg.From == QAR then
            local tags = msg.Tags
            local newQuantity = bint(tags.Quantity) -- New quantity to add
            local height = tonumber(msg['Block-Height'])
            
            -- Check if the user already exists
            local exists = sql_run([[SELECT EXISTS (SELECT 1 FROM Stakers WHERE UserID = ?) AS value_exists;]], msg.Sender);
            
            -- Iterate over the result to get the existence flag
            for _, row in ipairs(exists) do
                if row.value_exists > 0 then
                    print("a")
                    print("User exists, updating total staked.")
                    print(tags.Sender)
                    -- Fetch the current total staked for this user
                    local current = sql_run([[SELECT TotalStaked FROM Stakers WHERE UserID = ?;]], tags.Sender);

                    -- Extract current total staked value
                    local currentQuantity = bint(current[1].TotalStaked)

                    -- Add the new quantity to the existing total
                    local updatedQuantity = currentQuantity + newQuantity

                    -- Update the table with the new total and unstake timestamp
                    sql_write(
                        [[UPDATE Stakers SET TotalStaked = ?, UnstakeAt = ? WHERE UserID = ?]],
                        tostring(updatedQuantity), height + UnstakeDelay, msg.Sender
                    )
                else
                    print("User does not exist, adding new entry.")

                    -- Insert a new row for the user
                    sql_write(
                        [[INSERT INTO Stakers (UserID, TotalStaked, UnstakeAt) VALUES (?, ?, ?)]],
                        msg.Sender, tostring(newQuantity), height + UnstakeDelay
                    )
                end
            end

            -- Log the transaction
            sql_write(
                [[INSERT INTO Transactions (Timestamp, TransID, SenderID, RecieverID, TokenID, Quantity, Status, Type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)]],
                tostring(msg.Timestamp), msg.Id, tags.Sender, ao.id, msg.From,
                tostring(tags.Quantity), "fulfilled", "utc"
            )

            -- Increment the global staked amount
            Staked = Staked + tonumber(tags.Quantity)
            print("Successfully staked " .. tags.Quantity)
        end
    end
)


Handlers.add(
    "Cron",
    Handlers.utils.hasMatchingTag("Action", "Cron"),
    function(msg)
        -- Total staked in the contract
        local total_staked = Staked
        print("Total staked: " .. total_staked)
        
        -- Total tokens to distribute
        local to_distribute = ToDistribute
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
            
            -- Send tokens based on the calculated distribution
            ao.send({
                Target = PToken,
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
        if msg.Action == "Debit-Notice" and msg.From == PToken then
            print("3")
            -- Extract required details from the message and tags
            local timestamp = tostring(msg.Timestamp)
            local trans_id = msg.Id
            local user_id = msg.Tags.Recipient
            local token_id = msg.From  -- The token ID being debited (from ptoken)
            local quantity = msg.Tags.Quantity
            local status = "fulfilled"
            local type = "ctu"
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
        -- Check if the user exists and retrieve the current staked amount
        local user = sql_run([[SELECT TotalStaked FROM Stakers WHERE UserID = ?;]], userID)

        if #user == 0 then
            print("User not found. Cannot unstake.")
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
            Target = QAR,
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
        Staked = Staked - tonumber(tags.Quantity)
        print("Successfully unstaked " .. tags.Quantity)
    end
)

Handlers.add(
    "UnstakeDebitNotification",
    Handlers.utils.hasMatchingTag("X-Action", "UnstakedQAR"),
    function(msg)
        print("Unstake Debit Notification handler triggered.")

        -- Ensure the message is a debit notification and comes from the correct QAR
        if msg.Action == "Debit-Notice" and msg.From == QAR then
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
