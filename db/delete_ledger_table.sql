DELETE FROM bank_accounts_ledger
WHERE bank_account = $1 AND year = $2;

DROP TABLE $3;