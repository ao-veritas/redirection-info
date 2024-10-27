-- wallet public address - yA7l7jFWjL4g3MRAlN5PkYnPYpIiSWGitWQeMkI_9-A

require("utils.globals")
local dbFunctions =require("db")
local sqlite3 = require('lsqlite3')
local dbAdminnn = require("utils.utils.dbAdmin")

DB = DB or sqlite3.open_memory()
if not DB then
  print("Failed to open database")
  return
end

dbAdmin = dbAdminnn.new(DB)

global INIT: boolean
INIT = INIT or false

if not INIT then
    dbFunctions.createTableData()
    INIT = true
end
