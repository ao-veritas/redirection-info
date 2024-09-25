# Function _loaded_mod_token()
## Utils 
- for adding subtracting strings as bints and returning ast strings
## BASIC HANDLERS
### Info
- Has "Balances-Mirror", points to an address which can be used to chack balances
(?)
### Balance
- Same, check From's balance
### Balances
- Disabled
### Transfer
- While MintCount is less than 100000 cant use tranfer
    (?) doesnt make sense since mintcount is updated nNOT proportional to how much is being minted
- Rest Same
### Total Supply
- cant call from ao.id else loop lol
- Just sends the total supply to asker
### Burn
- Same
