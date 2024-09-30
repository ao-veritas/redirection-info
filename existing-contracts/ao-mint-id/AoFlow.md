# AO Mint Flow

AO Mint token contract: `1OEAToQGhSKV76oa1MFIGZ9bYxCJoxpXqtksApDdcu8`

The contract receives a `mint.batch` message from Oracles for different tokens:

## AR (Arweave) Changes

- Process ID: `mIZgitYojKz0IxS9dWimPSq29Q_D0_JrUenoPLk_Sxg`
- Runs a cron job on a 1 block interval
- Records all withdrawals and deposits for that block
- Format:
  ```json
  {
    "TransactionHash": "b16G6sbzeJ9JFWdZpF4JQxX8b5WtTo-jk47KLE678Hg",
    "Recipient": "Gx75q7CpZnfMz7PGRSZZ0N7HoKiz4jwM1Mm_Z9mDGfI",
    "Action": "Deposit",
    "Timestamp": 1727708147,
    "Token": "AR",
    "TokenAmount": "12300000000000",
    "Reward": "12300000000000",
    "User": "Gx75q7CpZnfMz7PGRSZZ0N7HoKiz4jwM1Mm_Z9mDGfI"
  }
  ```
- Tags: `Format: Event-List`

## StETH Changes

- Bridge Oracle Process ID: `umKBJM0Cy4ufHF5kEKuczc6D06FqvXOgM2rdtq42c7M`
- Receives `Oracle.Batch` messages and sends `Mint.Batch` messages to the AO mint contract
- Format:
  ```json
  [
    {
      "Action": "Deposit",
      "Timestamp": "1727711747",
      "BlockNumber": "20864503",
      "TransactionIndex": "90",
      "LogIndex": "342",
      "User": "0x39F2f6633A9B8Ca0B24874B55783F47395bA2F92",
      "Token": "stETH",
      "TokenAmount": "400220317954733890",
      "Reward": "0",
      "TransactionHash": "0x8acbc438c41747a19472d8ae2040659d8ddc02557ebd4a4c895c204a23dab3aa",
      "Recipient": "p4t2GIeR3uOoOqOO5ZiboGpgiTD27uTY6lVb2Kz_IK0"
    }
  ]
  ```
- Tags:
  - `Token: stETH`
  - `Format: Event-List`

### StETH Data Source

- User ID: `3afaBWBFrHu4K1674deRrFMb1AhgC_6uNnKhcnVoLJc`
- Sends `Oracle.Batch` message to the StETH Bridge Process
- Example message ID: `ccNMxkOfq_9ijsgZBrhr5jS75boJFbn1NbZY5ujw0ww`

## DAI Changes

- Bridge Oracle Process ID: `SVu0Atwg7FRQfQA1PUvhpTYsdBmXeJK8s_58retkdBg`
- Receives `Oracle.Batch` messages from User (ID: `PkKRmMOEFJTa56tAZF8JGX6EJnSmBK0PAFoiw4Pr1cU`)
- Sends `Mint.Batch` to the AO mint
- Also receives and forwards "Price-Update" messages to the AO mint token
- Price Update Format:
  ```json
  [
    {
      "Action": "Price-Update",
      "Timestamp": "1727710510",
      "Token": "DAI",
      "Price": "9997",
      "Currency": "USD"
    }
  ]
  ```
