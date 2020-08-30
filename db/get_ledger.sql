SELECT date, start_balance, end_balance, vendor_name, trx_description, trx_type, gl_account_id, department, note, journal_ref FROM bank_accounts ba
JOIN bank_accounts_ledger bal ON bal.bank_account_id = ba.bank_account_id
JOIN ledger l ON l.ledger_id = bal.ledger_id
WHERE ba.bank_account_id = $1 AND year = $2;