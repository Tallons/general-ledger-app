DO
$$
BEGIN
EXECUTE format('UPDATE %I 
SET ledger_date = %L, vendor_name = %L, trx_description = %L, trx_type = %L, gl_account_id = %L, credit = %L, debit = %L, note = %L, journal_ref = %L
WHERE ledger_line = %L',
   $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11 );
END
$$ 
LANGUAGE plpgsql;