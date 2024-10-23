require "lsqlite3"
local json = require("json")

-- Define types
-- local sqlite3 = require("lsqlite3")
global DB: db 
require("utils.utils.dbAdmin")
global dbAdmin: dbAdminType


global type DataRecord = record
    id: integer
    recipient: string
    owner: string
    height: integer
    timestamp: integer
    tags: json
end


return {}