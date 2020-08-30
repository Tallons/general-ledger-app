UPDATE ledger
SET date = $date, start_balance = $startBalance, end_balance = $endBalance, vendor_name =$vendorName, trx_description = $trxDescription, trx_type = $trxType, gl_account_id = $glAccount, department = $department, note = $note, journal_ref = $journalRef
WHERE ledger_id = $ledgerId AND ledger_line = $ledgerLine;