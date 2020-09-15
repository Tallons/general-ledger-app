DO
$$
BEGIN
EXECUTE format('CREATE TABLE %I (
    ledger_line SERIAL PRIMARY KEY,
    ledger_date DATE NOT NULL,
    vendor_name VARCHAR(75),
    trx_description VARCHAR(150),
    trx_type VARCHAR(20) NOT NULL,
    gl_account_id INT NOT NULL,
    credit INT,
    debit INT,
    note VARCHAR(200),
    journal_ref INT
)', $1 );
END
$$ 
LANGUAGE plpgsql;