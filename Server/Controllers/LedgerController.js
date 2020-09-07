module.exports = {

   getLedger: (req, res) => {
      const {id, year} = req.query;
      db = req.app.get("db")
      db.get_ledger(id, year).then(ledger => {
         newLedger = ledger.forEach(el =>{
               el.ledger_date = `${el.ledger_date}`.substring(3,10)
         })
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   createLedgerLine: (req, res) => {
      const {id} = req.params,
         {vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef} = req.body;
      db = req.app.get("db");
      db.update_ledger_entry(vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef, {ledgerId: id}, ledgerLine).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   updateLedgerLine: (req, res) => {
      const {id, line} = req.params,
         {vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef} = req.body;
      db = req.app.get("db");
      db.update_ledger_entry( vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef, {ledgerId: id}, {ledgerLine: line}).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },


   }
