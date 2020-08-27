CREATE TABLE bank_accounts (
    bank_account_id SERIAL PRIMARY KEY,
    bank_account_name VARCHAR(50)
);

CREATE TABLE bank_accounts_ledger (
    ledger_id SERIAL PRIMARY KEY,
    bank_account_id INT REFERENCES bank_accounts(bank_account_id),
    year INT NOT NULL
);

CREATE TABLE ledger (
    ledger_line SERIAL PRIMARY KEY,
    ledger_id INT REFERENCES bank_accounts_ledger(ledger_id),
    date DATE NOT NULL,
    start_balance INT NOT NULL,
    end_balance INT NOT NULL,
    vendor_name VARCHAR(75),
    trx_description VARCHAR(150),
    trx_type VARCHAR(20) NOT NULL,
    gl_account_id INT NOT NULL,
    department VARCHAR(25) NOT NULL,
    note VARCHAR(200),
    journal_ref INT
);
