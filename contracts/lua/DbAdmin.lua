local dbAdmin = {}
dbAdmin.__index = dbAdmin

-- Function to create a new database explorer instance
function dbAdmin.new(db)
    local self = setmetatable({}, dbAdmin)
    self.db = db
    return self
end

-- Function to list all tables in the database
function dbAdmin:tables()
    local tables = {}
    for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
        table.insert(tables, row.name)
    end
    return tables
end

-- Function to get the record count of a table
function dbAdmin:count(tableName)
    local count_query = "SELECT COUNT(*) AS count FROM ?;"
    local stmt = self.db:prepare(count_query)
    stmt:bind_values(tableName)

    for row in stmt:nrows() do
        stmt:finalize()
        return row.count
    end

    stmt:finalize()
    return 0 -- Return 0 if no rows were found
end

-- Function to execute a given SQL query
function dbAdmin:exec(sql)
    local results = {}
    for row in self.db:nrows(sql) do
        table.insert(results, row)
    end
    return results
end

return dbAdmin
