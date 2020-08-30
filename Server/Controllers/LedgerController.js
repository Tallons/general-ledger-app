module.exports = {

   getLedger: (req, res) => {
      const {id, year} = req.query;
      console.log("hit")
      console.log(id,year)
      db = req.app.get("db")
      db.get_ledger(id, year).then((ledger) => {
         console.log("LEDGER: ", ledger)
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   createLedgerLine: (req, res) => {
      const {id} = req.params,
         {startBalance, endBalance, vendorName, trxDescription, trxType, glAccount, department, note, journalRef} = req.body;
      db = req.app.get("db");
      db.update_ledger_entry( startBalance, endBalance,vendorName, trxDescription, trxType, glAccount, department, note, journalRef, {ledgerId: id}, ledgerLine).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   updateLedgerLine: (req, res) => {
      const {id, line} = req.params,
         {startBalance, endBalance, vendorName, trxDescription, trxType, glAccount, department, note, journalRef} = req.body;
      db = req.app.get("db");
      db.update_ledger_entry( startBalance, endBalance,vendorName, trxDescription, trxType, glAccount, department, note, journalRef, {ledgerId: id}, {ledgerLine: line}).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },


   }
