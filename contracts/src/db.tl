require("utils.globals")
local json = require("json")


local function createTableData()
    local tableSchema = [[
        CREATE TABLE IF NOT EXISTS Data (
            id TEXT PRIMARY KEY,
            recipient TEXT,
            owner TEXT,
            height INTEGER,
            timestamp INTEGER,
            tags JSON
        );
    ]]
    -- dbAdmin:exec([[DROP TABLE IF EXISTS Data;]])
    dbAdmin:exec(tableSchema)
end


local function insertData(dataArray: {DataRecord})
    if (#dataArray == 0) then
        print('No data to insert')
        return
    end

    -- Begin a transaction for better performance when inserting multiple rows
    dbAdmin:exec("BEGIN TRANSACTION;")

    for _, data in ipairs(dataArray) do
        local encodedTags = json.encode(data.tags)

        -- Use prepared statement for INSERT or UPDATE
        local stmt = DB:prepare([[
            INSERT INTO Data (id, recipient, owner, height, timestamp, tags)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                recipient = excluded.recipient,
                owner = excluded.owner,
                height = excluded.height,
                timestamp = excluded.timestamp,
                tags = excluded.tags
        ]])

        stmt:bind_values(data.id, data.recipient, data.owner, data.height, data.timestamp, encodedTags)
        stmt:step()
        stmt:reset()
    end

    -- Commit the transaction
    dbAdmin:exec("COMMIT;")
end

local function getTableData(whereQueryParam: string): {DataRecord}
    local whereQuery = whereQueryParam or ''

    local stmt = DB:prepare([[
        SELECT * FROM Data ]] .. whereQuery .. [[;
    ]])

    local dataArray: {DataRecord} = {}
    for row in stmt:nrows() do
        table.insert(dataArray, row as DataRecord)
    end

    return dataArray
end

return {
    getTableData = getTableData,
    insertData = insertData,
    createTableData = createTableData
}
