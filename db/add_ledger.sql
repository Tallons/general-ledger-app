INSERT INTO bank_accounts_ledger (bank_account_id, year)
VALUES ($1, $2)
RETURNING ledger_id;

