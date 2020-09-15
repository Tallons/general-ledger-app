DO
$$
BEGIN
EXECUTE format('INSERT INTO %I 
   (ledger_date, vendor_name, trx_description, trx_type, gl_account_id, credit, debit, note, journal_ref)
   VALUES ( %L, %L, %L, %L, %L, %L, %L, %L, %L)', 
   $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 );
END
$$ 
LANGUAGE plpgsql;

