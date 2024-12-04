sql_run([[SELECT * FROM Transactions;]])
sql_run([[SELECT * FROM Stakers;]])
sql_run([[SELECT * FROM CronTransactions;]])
Send({Target = ao.id, Action = "Cron"})
Send({Target = qar, Action = "Transfer", Quantity="1000", Recipient=contract, ["X-Action"]="Stake"})
Send({Target = contract, Action = "UnStake", Quantity="100"})
-- 8500000000000000


contract = "eU_xwsPqnUjShphcwefHPJphlk2FdCRhr09k0T6OKtM"
qar = "2GJ6V2TnJw0YplnSqEjSDFwILYopWSFGTGrDxS_vCCk"
PToken = "34jmjvIwlz_GvNElXe1yVW_dcQl7Xs1rscfHM8tfrlE"
user1 = "3mwR7KPcmAsiicXc6QRjWWDFYGJvfNaHv0lhnzbIv6I"
user2 = "uQh38llWVNsYm4syt9wNKY8rVpsZnLbc-E1wzSB8zqE"


-- RESET PTOKEN
Balances["eU_xwsPqnUjShphcwefHPJphlk2FdCRhr09k0T6OKtM"] = "1500000000000000"
Balances["TP7L_FRvu54lvUlx3UL64WajrGaXoL77vlHfuTh0uTA"] = nil
Balances["qK1k4q9cdUHhrVZ4WWLNrOZcsTN6ABA2zIijOpW5uOs"] = nil
Balances["34jmjvIwlz_GvNElXe1yVW_dcQl7Xs1rscfHM8tfrlE"] = "8500000000000000"


-- RESET QAR
Balances["eU_xwsPqnUjShphcwefHPJphlk2FdCRhr09k0T6OKtM"] = "0"
Balances["TP7L_FRvu54lvUlx3UL64WajrGaXoL77vlHfuTh0uTA"] = "1000000000000"
Balances["qK1k4q9cdUHhrVZ4WWLNrOZcsTN6ABA2zIijOpW5uOs"] = "1000000000000"
Balances["2GJ6V2TnJw0YplnSqEjSDFwILYopWSFGTGrDxS_vCCk"] = "9998000000000000"