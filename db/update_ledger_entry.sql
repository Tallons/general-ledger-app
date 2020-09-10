
UPDATE $tableName
SET date = $date, credit = $credit, debit = $debit, vendor_name =$vendorName, trx_description = $trxDescription, trx_type = $trxType, gl_account_id = $glAccount, note = $note, journal_ref = $journalRef
WHERE ledger_id = $ledgerId AND ledger_line = $ledgerLine;