local json = require("json")

-- Helper function to check if a table contains a value
local function contains(table, val)
    for i = 1, #table do
        if table[i] == val then
            return true
        end
    end
    return false
end

-- Helper function to get nested value
local function getNestedValue(obj, key)
    local keys = {}
    for k in string.gmatch(key, "[^.]+") do
        table.insert(keys, k)
    end
    local value = obj
    for _, k in ipairs(keys) do
        value = value[k]
        if k == "Tags" then
            value = json.decode(value)
        end
        if value == nil then
            return nil
        end
    end
    return value
end

-- Helper function to get table keys
local function _tableKeys(t)
    local keys = {}
    for k in pairs(t) do
        table.insert(keys, k)
    end
    return keys
end

local function getMessageActivityData(fullData, tagActionKey, actionValues)
    local messageActivity = {}

    for _, item in ipairs(fullData) do
        local date = os.date("%Y-%m-%d", item.Timestamp)
        local action = json.decode(item.Tags)[tagActionKey]

        if contains(actionValues, action) then
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

    -- Convert messageActivity table to an array of { date, total, "Post-Real-Data", "Get-Real-Data" }
    local result = {}
    for date, counts in pairs(messageActivity) do
        local entry = { date = date }
        for k, v in pairs(counts) do
            entry[k] = v
        end
        table.insert(result, entry)
    end

    -- Sort the result array by date in ascending order
    table.sort(result, function(a, b) return a.date < b.date end)

    -- Calculate the Message Distribution
    local totalMessages = 0
    for _, item in ipairs(result) do
        totalMessages = totalMessages + item.total
    end

    for _, item in ipairs(result) do
        item.distribution = {}
        for _, action in ipairs(actionValues) do
            item.distribution[action] = item[action] / totalMessages
        end
    end



    -- Calculate the total message distribution for each action
    local totalCounts = {}
    for _, action in ipairs(actionValues) do
        local count = 0
        for _, item in ipairs(result) do
            count = count + item[action]
        end
        table.insert(totalCounts, { name = action, count = count })
    end


    return { totalMessageActivity = result, totalMessageDistribution = totalCounts }
end

local function getUserActivityData(fullData, userIdKey, userIdInTags, tagActionKey, actions)
    local userActivity = {}

    for _, item in ipairs(fullData) do
        local user = getNestedValue(item, userIdKey)
        local action = json.decode(item.Tags)[tagActionKey]
        local date = os.date("%Y-%m-%d", item.Timestamp)

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


    -- Convert userActivity table to an array of { date, total, "Post-Real-Data", "Get-Real-Data", addresses }
    local result = {}
    for date, counts in pairs(userActivity) do
        local entry = {
            date = date,
            total = #_tableKeys(counts.total),
            addresses = _tableKeys(counts.addresses)
        }
        for _, action in ipairs(actions) do
            entry[action] = #_tableKeys(counts[action] or {})
        end
        table.insert(result, entry)
    end

    -- -- Sort the result array by date in ascending order
    table.sort(result, function(a, b) return a.date < b.date end)

    -- -- Calculate DAU, WAU, and MAU
    local function calculateActiveUsers(data, windowSize)
        local activeUsers = {}
        for i = 1, #data do
            local window = {}
            for j = math.max(1, i - windowSize + 1), i do
                for _, user in ipairs(data[j].addresses) do
                    window[user] = true
                end
            end
            table.insert(activeUsers, { date = data[i].date, activeUsers = #_tableKeys(window) })
        end
        return activeUsers
    end

    local dau = {}
    for _, entry in ipairs(result) do
        table.insert(dau, { date = entry.date, activeUsers = entry.total })
    end
    local wau = calculateActiveUsers(result, 7)
    local mau = calculateActiveUsers(result, 30)

    -- -- Combine DAU, WAU, and MAU into a single array
    local combinedMetrics = {}
    for i = 1, #result do
        table.insert(combinedMetrics, {
            date = result[i].date,
            dau = dau[i].activeUsers,
            wau = wau[i].activeUsers,
            mau = mau[i].activeUsers
        })
    end

    -- -- Unique users - cumulative count of unique addresses sending messages over time
    local allUsers = {}
    local uniqueUsers = {}
    for _, item in ipairs(fullData) do
        local user = getNestedValue(item, userIdKey)
        local date = os.date("%Y-%m-%d", item.Timestamp)
        if user then
            allUsers[user] = true
        end
        uniqueUsers[date] = #_tableKeys(allUsers)
    end

    -- Convert to array of objects and sort by date
    local uniqueUsersArray = {}
    for date, count in pairs(uniqueUsers) do
        table.insert(uniqueUsersArray, { date = date, count = count })
    end
    table.sort(uniqueUsersArray, function(a, b) return a.date < b.date end)

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
