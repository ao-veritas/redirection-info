-- -- Convert Unix timestamp to ISO date string (YYYY-MM-DD)
-- function unixToIsoDate(timestamp)
--     local days = math.floor(timestamp / 86400)
--     local year = 1970
--     local month = 1
--     local day = 1

--     local function isLeapYear(y)
--         return y % 4 == 0 and (y % 100 ~= 0 or y % 400 == 0)
--     end

--     local daysInMonth = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }

--     while days > 365 do
--         local daysInYear = isLeapYear(year) and 366 or 365
--         if days >= daysInYear then
--             days = days - daysInYear
--             year = year + 1
--         else
--             break
--         end
--     end

--     if isLeapYear(year) then
--         daysInMonth[2] = 29
--     end

--     for i = 1, 12 do
--         if days >= daysInMonth[i] then
--             days = days - daysInMonth[i]
--             month = month + 1
--         else
--             break
--         end
--     end

--     day = day + days

--     return string.format("%04d-%02d-%02d", year, month, day)
-- end

return {}
