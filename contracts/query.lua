-- test0rbit - cIyxixE9ulKYcHBCo8bazlBoqC3BvhyZW0nk0T2KpeM
-- test0rbitsql - _y0cUKnoQevsE6fOGkdQPk0dM64Ps2KS3uPzm6S17e0

local json = require("json")
local db = require("db")
local parseData = require("parse")
_0rbitHelper = require("_0rbit")


_0RBIT = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"
_0RBT_POINTS = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"

FEE_AMOUNT = "1000000000000"                               -- 1 $0RBT
BASE_URL = "https://arweave-search.goldsky.com/graphql"
INITIAL_STARTING_BLOCK = INITIAL_STARTING_BLOCK or 1455662 -- July 1st 2024



QUERIES = QUERIES or {
    {
        tags = { { name = "X-Action", value = "Post-Real-Data" } },
        cursor = nil,
        lastParsedDate = nil,
        name = "Get Post APIs"
    },
    {
        tags = { { name = "X-Action", value = "Get-Real-Data" } },
        cursor = nil,
        lastParsedDate = nil,
        name = "Get GET APIs"
    }
}

CURRENT_QUERY_INDEX = 1
CURSOR = CURSOR or nil
LAST_PARSED_DATE = LAST_PARSED_DATE or nil
CURRENT_TAGS = CURRENT_TAGS or {}
QUERYING = QUERYING or false



function customJsonEncode(tags)
    local parts = {}
    for _, tag in ipairs(tags) do
        table.insert(parts, string.format(
            '{name:"%s",values:["%s"]}',
            tag.name,
            tag.value
        ))
    end
    return "[" .. table.concat(parts, ",") .. "]"
end

-- The data body to be sent in the POST request
function getQueryBody(cursor, tags)
    local customJsonTags = customJsonEncode(tags)
    -- print(customJsonTags)
    print("making query with cursor: " .. (cursor or "nil"))

    local cursorPart = cursor and ('after: "' .. cursor .. '",') or
        [[block: {
            min: ]] .. INITIAL_STARTING_BLOCK .. [[
        }]]

    local query = [[
        query {
            transactions(
                ]] .. cursorPart .. [[
                sort: HEIGHT_ASC

                recipients:["BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"]
                first: 200
                tags: ]] .. customJsonTags .. [[
            )
            {
                pageInfo {
                    hasNextPage
                }
                edges {
                    cursor
                    node {
                        id
                        block {
                            height
                            timestamp
                        }
                        recipient
                        owner {
                            address
                        }
                        tags {
                            name
                            value
                        }
                    }
                }
            }
        }
        ]]

    -- print(query)
    return json.encode({
        query = query
    })
end

function SendQuery(body)
    Send({
        Target = _0RBT_POINTS,
        Action = "Transfer",
        Recipient = _0RBIT,
        Quantity = FEE_AMOUNT,
        ["X-Url"] = BASE_URL,
        ["X-Action"] = "Post-Real-Data",
        ["X-Body"] = body
    })
    print('sent query')
    -- local res = Receive({ Action = "Receive-Response" })
    -- local resData = json.decode(res.Data)
    -- return resData
end

function parseGraphqlResponse(responseData)
    -- return json.decode([[
    --     {
    --       "data": [
    --         {
    --           "id": "07X_iU-FVwQVVZ4Tud9H-2s1ys81dY1takA6OUjda2I",
    --           "recipient": "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ",
    --           "tags": {
    --             "Sender": "cIyxixE9ulKYcHBCo8bazlBoqC3BvhyZW0nk0T2KpeM",
    --             "X-Action": "Post-Real-Data",
    --             "X-Url": "https://arweave-search.goldsky.com/graphql",
    --             "Quantity": "1000000000000",
    --             "X-Body": "{\"query\":\"        query {\\n            transactions(\\n                                sort: HEIGHT_ASC\\n                recipients:[\\\"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ\\\"]\\n                first: 200\\n                tags: [{name:\\\"X-Action\\\",values:[\\\"Post-Real-Data\\\"]}]            )\\n            {\\n                pageInfo {\\n                    hasNextPage\\n                }\\n                edges {\\n                    cursor\\n                    node {\\n                        id\\n                        block {\\n                            height\\n                            timestamp\\n                        }\\n                        recipient\\n                        owner {\\n                            address\\n                        }\\n                        tags {\\n                            name\\n                            value\\n                        }\\n                    }\\n                }\\n            }\\n        }\\n        \"}",
    --             "Action": "Credit-Notice",
    --             "From-Process": "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"
    --           },
    --           "owner": "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
    --           "height": 1529967,
    --           "timestamp": 1729319801
    --         }
    --       ],
    --       "nextPageCursor": "eyJzZWFyY2hfYWZ0ZXIiOlsxNTI5OTY3LCIwN1hfaVUtRlZ3UVZWWjRUdWQ5SC0yczF5czgxZFkxdGFrQTZPVWpkYTJJIl0sImluZGV4IjowfQ=="
    --     }
    -- ]])
    local transactions = responseData.data.transactions

    -- Filter out nodes where block is null
    local transactionsWithBlock = {}
    for _, edge in ipairs(transactions.edges) do
        if edge.node.block ~= nil and edge.node.block ~= "null" then
            table.insert(transactionsWithBlock, edge)
        end
    end


    local nodeData = {}
    for _, edge in ipairs(transactionsWithBlock) do
        local node = edge.node
        local tags = {}
        for _, tag in ipairs(node.tags) do
            tags[tag.name] = tag.value
        end

        -- Remove ao tags
        local removeTags = { 'Ref_', 'Data-Protocol', 'Type', 'Variant', 'From-Module', 'Pushed-For' }
        for _, tag in ipairs(removeTags) do
            tags[tag] = nil
        end

        table.insert(nodeData, {
            id = node.id,
            height = node.block.height,
            timestamp = node.block.timestamp,
            recipient = node.recipient,
            owner = node.owner.address,
            tags = tags
        })
    end

    local lastCursor = #transactionsWithBlock > 0 and transactionsWithBlock[#transactionsWithBlock].cursor or nil

    if #transactionsWithBlock ~= #transactions.edges then
        print("last cursor", lastCursor, "transactionsWithBlock.length", #transactionsWithBlock,
            "transactions.edges.length", #transactions.edges)
        lastCursor = nil
    end

    return {
        data = nodeData,
        nextPageCursor = lastCursor
    }
end

function getData()
    if not QUERYING then
        print('QUERYING is set to false, STOPPING LOOP')
        return
    end

    CURRENT_TAGS = QUERIES[CURRENT_QUERY_INDEX].tags
    CURSOR = QUERIES[CURRENT_QUERY_INDEX].cursor
    local name = QUERIES[CURRENT_QUERY_INDEX].name
    print('getting data for ' .. name)
    local body = getQueryBody(CURSOR, CURRENT_TAGS)
    SendQuery(body)
end

function parseResponse(responseData)
    local parsedData = parseGraphqlResponse(responseData)

    local cursor = parsedData.nextPageCursor

    print('got ' .. #parsedData.data .. " records")
    if (#parsedData.data > 0) then
        LAST_PARSED_DATE = os.date("!%Y-%m-%d", parsedData.data[#parsedData.data].timestamp)
        print('Last date: ' .. LAST_PARSED_DATE)
    end

    local allData = parsedData.data
    db.insertData(allData)

    return cursor
end

function SendSearchQuery(msg)
    if CURRENT_QUERY_INDEX > #QUERIES then
        print("No more queries to send")
        return
    end

    local query = QUERIES[CURRENT_QUERY_INDEX]
    LAST_PARSED_DATE = query.lastParsedDate or nil
    print("Checking query: " .. query.name)

    -- if LAST_PARSED_DATE not equal to today's date -> getData()
    print("Last parsed date: " .. (LAST_PARSED_DATE or "nil"))

    -- Convert milliseconds to seconds
    local timestampInSeconds = math.floor(msg.Timestamp / 1000)
    print("Current date: " .. os.date("!%Y-%m-%d", timestampInSeconds))

    QUERYING = true

    if LAST_PARSED_DATE ~= os.date("!%Y-%m-%d", timestampInSeconds) then
        print("Querying: " .. query.name)
        getData()
    else
        print("No new data to query for: " .. query.name)
        if CURRENT_QUERY_INDEX < #QUERIES then
            CURRENT_QUERY_INDEX = CURRENT_QUERY_INDEX + 1
            SendSearchQuery(msg)
        else
            QUERYING = false
        end
    end
end

Handlers.add('SendSearchQuery',
    Handlers.utils.hasMatchingTag('Action', 'SendSearchQuery'),
    function(msg)
        SendSearchQuery(msg)
    end
)

Handlers.add(
    "Receive-Data",
    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),
    function(msg)
        local resData = json.decode(msg.Data)
        local nextCursor = parseResponse(resData)
        if nextCursor then
            CURSOR = nextCursor
            QUERIES[CURRENT_QUERY_INDEX].cursor = nextCursor
            QUERIES[CURRENT_QUERY_INDEX].lastParsedDate = LAST_PARSED_DATE
            print('getting more data with cursor ' .. nextCursor)
            getData()
        else
            QUERIES[CURRENT_QUERY_INDEX].lastParsedDate = LAST_PARSED_DATE
            print("all done with query " .. QUERIES[CURRENT_QUERY_INDEX].name)
            if CURRENT_QUERY_INDEX < #QUERIES then
                CURRENT_QUERY_INDEX = CURRENT_QUERY_INDEX + 1
                SendSearchQuery(msg)
            end
        end
    end
)



-- ------------------------------ TESTING ------------------------------
Handlers.add(
    "Send-Historical-Data",
    Handlers.utils.hasMatchingTag("Action", "Send-Historical-Data"),
    function(msg)
        -- only allow msg from process owner
        -- if msg.From ~= ao.env.Process.Owner then
        --     print("Received message from non-owner process, ignoring")
        --     return
        -- end

        local data = json.decode(msg.Data)
        db.insertData(data)
        print("Inserted " .. #data .. " records")
    end
)
--[[
    Example Handler for getting the balance of the current processId.
    @recepient (optional): The processId to get the balance of. If not passed, then the balance of the current processId is returned.
]]
Handlers.add(
    "Get-Balance",
    Handlers.utils.hasMatchingTag("Action", "Get-Balance"),
    function()
        _0rbitHelper.getBalance()
    end
)
-- Send({Target = ao.id, Action = "Get-Balance"})


TEST_RESPONSE =
[[{"data":{"transactions":{"pageInfo":{"hasNextPage":false},"edges":[{"cursor":"eyJzZWFyY2hfYWZ0ZXIiOls5MjIzMzcyMDM2ODU0Nzc2MDAwLCIwQWtBRkNORng4VEljNnliYmRVck5waWZEV1FhTWJTR0wzMGp5TjQ4elI4Il0sImluZGV4Ijo5NX0=","node":{"id":"0AkAFCNFx8TIc6ybbdUrNpifDWQaMbSGL30jyN48zR8","block":null,"recipient":"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ","owner":{"address":"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY"},"tags":[{"name":"Ref_","value":"2152229"},{"name":"X-Action","value":"Post-Real-Data"},{"name":"Quantity","value":"1000000000000"},{"name":"Action","value":"Credit-Notice"},{"name":"Sender","value":"CB0wY0UgCwnD4t8o_x7pbiICrVk01gCtvUe6mXDFJeA"},{"name":"X-Url","value":"https://ai-blog-ad8c.onrender.com/generate"},{"name":"X-Body","value":"{\"pid\":\"tDQAAYlQ7W0GvPwGac7YUsBv3iIQzNZlye74QIq8j2c\",\"topic\":\"Submarine\"}"},{"name":"Data-Protocol","value":"ao"},{"name":"Type","value":"Message"},{"name":"Variant","value":"ao.TN.1"},{"name":"From-Process","value":"BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"},{"name":"From-Module","value":"9afQ1PLf2mrshqCTZEzzJTR2gWaC9zNPnYgYEqg1Pt4"},{"name":"Pushed-For","value":"qIbfr5qDqIe6INGuR4t2UKfRppg8PUvpoSIX65g5Tqk"}]}},{"cursor":"eyJzZWFyY2hfYWZ0ZXIiOls5MjIzMzcyMDM2ODU0Nzc2MDAwLCJVM25JejhMMEtMR0Y2am1NSTVPcC1lc0Q2NzlCUHp4cnVMaFR2N3B1emhvIl0sImluZGV4Ijo5Nn0=","node":{"id":"U3nIz8L0KLGF6jmMI5Op-esD679BPzxruLhTv7puzho","block":null,"recipient":"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ","owner":{"address":"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY"},"tags":[{"name":"Ref_","value":"2422820"},{"name":"X-Action","value":"Post-Real-Data"},{"name":"Quantity","value":"1000000000000"},{"name":"Action","value":"Credit-Notice"},{"name":"Sender","value":"CB0wY0UgCwnD4t8o_x7pbiICrVk01gCtvUe6mXDFJeA"},{"name":"X-Url","value":"https://ai-blog-ad8c.onrender.com/generate"},{"name":"X-Body","value":"{\"pid\":\"AyhPMzYk5AyQ7h4yz1dodcAZU_6NGxix4En-19lddYQ\",\"topic\":\"food\"}"},{"name":"Data-Protocol","value":"ao"},{"name":"Type","value":"Message"},{"name":"Variant","value":"ao.TN.1"},{"name":"From-Process","value":"BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"},{"name":"From-Module","value":"9afQ1PLf2mrshqCTZEzzJTR2gWaC9zNPnYgYEqg1Pt4"},{"name":"Pushed-For","value":"X67Kf5jG3MCpTP7nra1lz4moLpSougBJDp7EP9Xbq8g"}]}},{"cursor":"eyJzZWFyY2hfYWZ0ZXIiOls5MjIzMzcyMDM2ODU0Nzc2MDAwLCJXekFHWHh1aEFxaHJuUUNQemVEX3VuaVJtZW5Eckx0dGx3V1RQcnpXUWVBIl0sImluZGV4Ijo5N30=","node":{"id":"WzAGXxuhAqhrnQCPzeD_uniRmenDrLttlwWTPrzWQeA","block":null,"recipient":"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ","owner":{"address":"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY"},"tags":[{"name":"Ref_","value":"4270305"},{"name":"X-Url","value":"https://g8way.0rbit.co/graphql"},{"name":"Quantity","value":"1000000000000"},{"name":"Action","value":"Credit-Notice"},{"name":"Sender","value":"-Nt_Xq7q9QoLzDMEfi3yNN05VXz4zpTyMfCp24ur9Zc"},{"name":"X-Body","value":"{\"query\":\"                            query {\\n                                transactions(\\n                                    owners: [\\\"vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI\\\"]\\n                                ) {\\n                                    edges {\\n                                        node {\\n                                            id\\n                                        }\\n                                    }\\n                                }\\n                            }\\n                        \"}"},{"name":"X-Action","value":"Post-Real-Data"},{"name":"Data-Protocol","value":"ao"},{"name":"Type","value":"Message"},{"name":"Variant","value":"ao.TN.1"},{"name":"From-Process","value":"BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"},{"name":"From-Module","value":"9afQ1PLf2mrshqCTZEzzJTR2gWaC9zNPnYgYEqg1Pt4"},{"name":"Pushed-For","value":"esF-usNbr-NEOW3uheqcB5XaIC3rXIyfzdGek3dUPv0"}]}},{"cursor":"eyJzZWFyY2hfYWZ0ZXIiOls5MjIzMzcyMDM2ODU0Nzc2MDAwLCJnZk1VQng1b29VeHJoa1JoTVEyUnlmZEI2SnFLM00ta3NvRHU1Q0FacFJjIl0sImluZGV4Ijo5OH0=","node":{"id":"gfMUBx5ooUxrhkRhMQ2RyfdB6JqK3M-ksoDu5CAZpRc","block":null,"recipient":"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ","owner":{"address":"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY"},"tags":[{"name":"Ref_","value":"8455127"},{"name":"X-Url","value":"https://arweave-search.goldsky.com/graphql"},{"name":"Quantity","value":"1000000000000"},{"name":"Action","value":"Credit-Notice"},{"name":"Sender","value":"_y0cUKnoQevsE6fOGkdQPk0dM64Ps2KS3uPzm6S17e0"},{"name":"X-Body","value":"{\"query\":\"        query {\\n            transactions(\\n                block: {\\n            min: 1455662        }                sort: HEIGHT_ASC\\n\\n                recipients:[\\\"BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ\\\"]\\n                first: 200\\n                tags: [{name:\\\"X-Action\\\",values:[\\\"Post-Real-Data\\\"]}]            )\\n            {\\n                pageInfo {\\n                    hasNextPage\\n                }\\n                edges {\\n                    cursor\\n                    node {\\n                        id\\n                        block {\\n                            height\\n                            timestamp\\n                        }\\n                        recipient\\n                        owner {\\n                            address\\n                        }\\n                        tags {\\n                            name\\n                            value\\n                        }\\n                    }\\n                }\\n            }\\n        }\\n        \"}"},{"name":"X-Action","value":"Post-Real-Data"},{"name":"Data-Protocol","value":"ao"},{"name":"Type","value":"Message"},{"name":"Variant","value":"ao.TN.1"},{"name":"From-Process","value":"BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"},{"name":"From-Module","value":"9afQ1PLf2mrshqCTZEzzJTR2gWaC9zNPnYgYEqg1Pt4"},{"name":"Pushed-For","value":"FupyTEXWgATM4jl0TSSDRxplTOimNeVfmpgP-eOV7uc"}]}}]}}}]]
Handlers.add(
    "Test-Response",
    Handlers.utils.hasMatchingTag("Action", "Test-Response"),
    function(msg)
        -- local nextCursor = parseResponse(json.decode(TEST_RESPONSE))
        -- print('nextCursor is:', nextCursor)
        local data = db.getTableData()
        print("got " .. #data .. " records")

        -- print(data[1])

        -- local messageActivityData = parseData.getMessageActivityData(data, "X-Action",
        --     { "Post-Real-Data", "Get-Real-Data" })
        -- print(json.encode(messageActivityData.totalMessageDistribution))

        local userActivityData = parseData.getUserActivityData(data, "Tags.Sender", "X-Action",
            { "Post-Real-Data", "Get-Real-Data" })

        print(json.encode(userActivityData.uniqueUsers))

        print('TEST_RESPONSE parsed successfully')
    end
)
-- Send({Target = ao.id, Action = "Test-Response"})

-- DbAdmin:exec([[select COUNT(*) from Data]])
