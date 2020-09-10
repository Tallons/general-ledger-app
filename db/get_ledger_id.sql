SELECT ledger_id FROM bank_accounts ba
JOIN bank_accounts_ledger bal ON bal.bank_account_id = ba.bank_account_id
WHERE bal.bank_account_id = $1 AND year = $2;