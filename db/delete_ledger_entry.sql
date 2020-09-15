DO
$$
BEGIN
EXECUTE format('DELETE FROM %I
WHERE ledger_line = %L', $1, $2 );
END
$$ 
LANGUAGE plpgsql;