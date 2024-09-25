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

# Funtion _loaded_mod_dal_prices()
## var/table prices.data
- gives the data of all tokens, ie price, in currency and timestamp. WRT ticker
## func prices.update
### args
- token: ticker
- info.Price = new price
- info.Currency = in which fiat  (?)
### flow
- make sure args came
- update in the prices.data table
## func prices.get
### args
- token: ticker
### flow
- return prices.data table
