-- _y0cUKnoQevsE6fOGkdQPk0dM64Ps2KS3uPzm6S17e0


print('Hello AO!')
local sqlite3 = require('lsqlite3')
local json = require('json')
DB = DB or sqlite3.open_memory()
DbAdmin = DbAdmin or require('DbAdmin').new(DB)


function createTableData()
    SQLITE_TABLE_DATA = [[
        CREATE TABLE IF NOT EXISTS Data (
            Id TEXT PRIMARY KEY,
            Recipient TEXT,
            Owner TEXT,
            Height INTEGER,
            Timestamp INTEGER,
            Tags JSON
        );
    ]]
    DbAdmin:exec([[DROP TABLE IF EXISTS Data;]])
    DbAdmin:exec(SQLITE_TABLE_DATA)
end

function insertData(dataArray)
    if (#dataArray == 0) then
        print('No data to insert')
        return
    end

    -- Begin a transaction for better performance when inserting multiple rows
    DbAdmin:exec("BEGIN TRANSACTION;")

    for _, data in ipairs(dataArray) do
        local encodedTags = json.encode(data.tags)

        -- Use prepared statement for INSERT or UPDATE
        local stmt = DB:prepare([[
            INSERT INTO Data (Id, Recipient, Owner, Height, Timestamp, Tags)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(Id) DO UPDATE SET
                Recipient = excluded.Recipient,
                Owner = excluded.Owner,
                Height = excluded.Height,
                Timestamp = excluded.Timestamp,
                Tags = excluded.Tags
        ]])

        stmt:bind_values(data.id, data.recipient, data.owner, data.height, data.timestamp, encodedTags)
        stmt:step()
        stmt:reset()
    end

    -- Commit the transaction
    DbAdmin:exec("COMMIT;")
end

function getTableData(whereQuery)
    local whereQuery = whereQuery or ''

    local stmt = DB:prepare([[
        SELECT * FROM Data ]] .. whereQuery .. [[;
    ]])

    local dataArray = {}
    for row in stmt:nrows() do
        table.insert(dataArray, row)
    end

    return dataArray
end

return {
    getTableData = getTableData,
    insertData = insertData
}
