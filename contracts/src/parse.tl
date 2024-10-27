local json = require("json")
local utils = require("utils.utils.tl-utils")

-- Helper function to get nested value
local function getNestedValue(obj: table, key: string): any
    local keys: {string} = {}
    for k in string.gmatch(key, "[^.]+") do
        table.insert(keys, k)
    end
    local value: any = obj
    for _, k in ipairs(keys) do
        value = value[k]
        if k == "Tags" then
            value = json.decode(value as string)
        end
        if value == nil then
            return nil
        end
    end
    return value
end

-- Helper function to get table keys
local function tableKeys(t: table): {string}
    local keys: {string} = {}
    for k in pairs(t) do
        table.insert(keys, k as string)
    end
    return keys
end

local record MessageActivityItem
    date: string
    total: integer
    distribution: {string:number}
end

local record TotalMessageCount
    name: string
    count: integer
end

local record MessageActivityResult
    totalMessageActivity: {MessageActivityItem}
    totalMessageDistribution: {TotalMessageCount}
end

local function getMessageActivityData(fullData: {table}, tagActionKey: string, actionValues: {string}): MessageActivityResult
    local messageActivity: {string:{string:integer}} = {}

    for _, item in ipairs(fullData) do
        local date = os.date("%Y-%m-%d", item.Timestamp as number)
        local action = (json.decode(item.Tags as string) as table)[tagActionKey] as string

        if utils.find(function(v: string): boolean return v == action end, actionValues) then
            if not messageActivity[date] then
                messageActivity[date] = { total = 0 }
                for _, a in ipairs(actionValues) do
                    messageActivity[date][a] = 0
                end
            end
            messageActivity[date][action] = messageActivity[date][action] + 1
            messageActivity[date].total = messageActivity[date].total + 1
        end
    end

    -- Convert messageActivity table to an array of MessageActivityItem
    local result: {MessageActivityItem} = {}
    for date, counts in pairs(messageActivity) do
        local entry: MessageActivityItem = { date = date, total = counts.total, distribution = {} }
        for k, v in pairs(counts) do
            if k ~= "total" then
                entry[k] = v
            end
        end
        table.insert(result, entry)
    end

    -- Sort the result array by date in ascending order
    table.sort(result, function(a: MessageActivityItem, b: MessageActivityItem): boolean return a.date < b.date end)

    -- Calculate the Message Distribution
    local totalMessages = 0
    for _, item in ipairs(result) do
        totalMessages = totalMessages + item.total
    end

    for _, item in ipairs(result) do
        for _, action in ipairs(actionValues) do
            item.distribution[action] = item[action] / totalMessages
        end
    end

    -- Calculate the total message distribution for each action
    local totalCounts: {TotalMessageCount} = {}
    for _, action in ipairs(actionValues) do
        local count = 0
        for _, item in ipairs(result) do
            count = count + (item[action] as number)
        end
        table.insert(totalCounts, { name = action, count = count })
    end

    return { totalMessageActivity = result, totalMessageDistribution = totalCounts }
end

local record UserActivityItem
    date: string
    total: integer
    addresses: {string}
end

local record UserActivityMetricsActiveUsers
    date: string
    activeUsers: integer
end

local record UserActivityMetrics
    date: string
    dau: integer
    wau: integer
    mau: integer
end

local record UniqueUsers
    date: string
    count: integer
end

local record UserActivityResult
    totalUserActivity: {UserActivityItem}
    userActivityMetrics: {UserActivityMetrics}
    uniqueUsers: {UniqueUsers}
end

local function getUserActivityData(fullData: {table}, userIdKey: string, tagActionKey: string, actions: {string}): UserActivityResult
    local userActivity: {string:{string:{string:boolean}}} = {}

    for _, item in ipairs(fullData) do
        local user = getNestedValue(item, userIdKey) as string
        local action = (json.decode(item.Tags as string) as table)[tagActionKey] as string
        local date = os.date("%Y-%m-%d", item.Timestamp as number)

        if not userActivity[date] then
            userActivity[date] = { total = {}, addresses = {} }
            for _, a in ipairs(actions) do
                userActivity[date][a] = {}
            end
        elseif not userActivity[date][action] then
            userActivity[date][action] = {}
        end

        if user then
            userActivity[date][action][user] = true
            userActivity[date].total[user] = true
            userActivity[date].addresses[user] = true
        end
    end

    -- Convert userActivity table to an array of UserActivityItem
    local result: {UserActivityItem} = {}
    for date, counts in pairs(userActivity) do
        local entry: UserActivityItem = {
            date = date,
            total = #tableKeys(counts.total),
            addresses = tableKeys(counts.addresses)
        }
        for _, action in ipairs(actions) do
            entry[action] = #tableKeys(counts[action] or {})
        end
        table.insert(result, entry)
    end

    -- Sort the result array by date in ascending order
    table.sort(result, function(a: UserActivityItem, b: UserActivityItem): boolean return a.date < b.date end)

    -- Calculate DAU, WAU, and MAU
    local function calculateActiveUsers(data: {UserActivityItem}, windowSize: integer): {UserActivityMetricsActiveUsers}
        local activeUsers: {UserActivityMetricsActiveUsers} = {}
        for i = 1, #data do
            local window: {string:boolean} = {}
            for j = math.max(1, i - windowSize + 1), i do
                for _, user in ipairs(data[j].addresses) do
                    window[user] = true
                end
            end
            table.insert(activeUsers, { date = data[i].date, activeUsers = #tableKeys(window) })
        end
        return activeUsers
    end

    local dau: {UserActivityMetricsActiveUsers} = {}
    for _, entry in ipairs(result) do
        table.insert(dau, { date = entry.date, activeUsers = entry.total })
    end
    local wau = calculateActiveUsers(result, 7)
    local mau = calculateActiveUsers(result, 30)

    -- Combine DAU, WAU, and MAU into a single array
    local combinedMetrics: {UserActivityMetrics} = {}
    for i = 1, #result do
        table.insert(combinedMetrics, {
            date = result[i].date,
            dau = dau[i].activeUsers,
            wau = wau[i].activeUsers,
            mau = mau[i].activeUsers
        })
    end

    -- Unique users - cumulative count of unique addresses sending messages over time
    local allUsers: {string:boolean} = {}
    local uniqueUsers: {string:integer} = {}
    for _, item in ipairs(fullData) do
        local user = getNestedValue(item, userIdKey) as string
        local date = os.date("%Y-%m-%d", item.Timestamp as number)
        if user then
            allUsers[user] = true
        end
        uniqueUsers[date] = #tableKeys(allUsers)
    end

    -- Convert to array of objects and sort by date
    local uniqueUsersArray: {UniqueUsers} = {}
    for date, count in pairs(uniqueUsers) do
        table.insert(uniqueUsersArray, { date = date, count = count })
    end
    table.sort(uniqueUsersArray, function(a: UniqueUsers, b: UniqueUsers): boolean return a.date < b.date end)

    return {
        totalUserActivity = result,
        userActivityMetrics = combinedMetrics,
        uniqueUsers = uniqueUsersArray
    }
end

return {
    getMessageActivityData = getMessageActivityData,
    getUserActivityData = getUserActivityData
}
