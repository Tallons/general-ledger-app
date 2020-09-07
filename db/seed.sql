CREATE TABLE bank_accounts (
    -- user_id INT REFERENCES users(user_id),
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
    ledger_date DATE NOT NULL,
    vendor_name VARCHAR(75),
    trx_description VARCHAR(150),
    trx_type VARCHAR(20) NOT NULL,
    gl_account_id INT NOT NULL,
    credt INT,
    debit INT,
    note VARCHAR(200),
    journal_ref INT
);

ALTER TABLE ledger
RENAME COLUMN account_id TO gl_account_id;

SELECT * FROM bank_accounts
WHERE bank_account_id IN (
    SELECT bank_account_id FROM  bank_accounts_ledger
    WHERE year = 2019
    );