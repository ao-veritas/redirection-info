--[[
  Bridge Oracle - umKBJM0Cy4ufHF5kEKuczc6D06FqvXOgM2rdtq42c7M
]]
-- MINT = m3PaWzK4PTG9lAaqYQPaPdOcXdO8hYqi5Fe9NWqXd0w
-- BRIDGE = 3afaBWBFrHu4K1674deRrFMb1AhgC_6uNnKhcnVoLJc

_INIT = _INIT or false
MINT = MINT or "so3C4AUToJfvLu-K7BaGEadmt1S1FYHVmgMVvB3ZSf8"
BRIDGE = BRIDGE or "bIp9l7ox3Hok3XF16S8jV1ard4zc5uWy4OKc95FGWWw"
LastPrice = ""
LastYield = ""
local function init()
    Name = ao.env.Process.Tags.Name or "Bridge-Oracle"
    _INIT = true
end

local function forward(msg)
    if msg.From == BRIDGE then
        local events = type(msg.Data) == "string" and require("json").decode(msg.Data) or msg.Data
        print("Event Count: " .. #events)
        -- only forward price updates if they have changed.
        if #events == 1 and events[1].Action == "Price-Update" then
            print("Price: " .. events[1].Price)
            print("LastPrice: " .. LastPrice)
            if events[1].Price == LastPrice then
                print("price did not change")
                return "Price did not change"
            else
                LastPrice = events[1].Price
            end
        end
        -- only forward yield updates if they have changed.
        if #events == 1 and events[1].Action == "Yield-Update" then
            print("Yield: " .. events[1].Yield)
            print("LastYield: " .. LastYield)
            if events[1].Yield == LastYield then
                print("Yield did not change")
                return "Yield did not change"
            else
                LastYield = events[1].Yield
            end
        end
        msg.forward(MINT, { Action = "Mint.Batch" })
        -- print(msg)
        -- xforward(msg, MINT, { Action = "Mint.Batch" })
        print('forwarded batch')
    end
end

-- Handlers
Handlers.add("Oracle.Batch", forward)
Handlers.add("Info", Handlers.utils.reply({ Name = Name, Mint = MINT, Bridge = BRIDGE }))

if not _INIT then
    init()
    print('initialized process!')
end
