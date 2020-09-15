DELETE FROM bank_accounts_ledger
WHERE ledger_id = $1;

DO
$$
BEGIN
EXECUTE format('DROP TABLE %I', $2);
END
$$ 
LANGUAGE plpgsql;