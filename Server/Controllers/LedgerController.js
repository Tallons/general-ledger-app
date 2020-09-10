module.exports = {

   getLedger: async (req, res) => {
      const {id, year} = req.query,
            db = req.app.get("db"),
            ledgerId = await db.get_ledger_id(id, year);
            db.query(`SELECT * FROM ledger`).then(ledger => {
               ledger.forEach(el =>{
               el.ledger_date = `${el.ledger_date}`.substring(3,10)
         })
         res.status(200).send({id: ledgerId[0].ledger_id, ledger});
      }).catch(err => {
         console.log(err);
         res.status(500).send(err);
      });
   },

   createLedger: async (req, res) => {
      const {id, year} = req.params,
      db = req.app.get("db");
      const ledgerId = await db.add_ledger(id, year)
      db.create_ledger(`ledger_${ledgerId}`)
      .then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   addLedgerLine: (req, res) => {
      const {id} = req.params,
         {vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef} = req.body;
      db = req.app.get("db");
      db.add_ledger_line(vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef, {ledgerId: id}, ledgerLine).then((ledger) => {
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
