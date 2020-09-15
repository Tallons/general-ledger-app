module.exports = {

   getLedger: async (req, res) => {
      const {id, year} = req.query,
            db = req.app.get("db"),
            ledgerId = await db.get_ledger_id(id, year);
      db.query(`SELECT * FROM ledger_${ledgerId[0].ledger_id}`).then(ledger => {
            ledger.forEach(el => {
               el.ledger_date = `${el.ledger_date}`.substring(3,10)
            })
         res.status(200).send({id: ledgerId[0].ledger_id, ledger});
      }).catch(err => res.status(500).send(err));
   },

   createLedger: async (req, res) => {
      const {id, year} = req.params,
            db = req.app.get("db"),
            ledgerId = await db.add_ledger(id, year)
      db.create_ledger(`ledger_${ledgerId[0].ledger_id}`)
      .then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   addLedgerLine: (req, res) => {
      const {ledgerId} = req.params,
         {date, vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef} = req.body;
      db = req.app.get("db");
      db.add_ledger_line(`ledger_${ledgerId}`, date, vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef ).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   updateLedgerLine: (req, res) => {
      const {ledgerId, ledgerLine} = req.query,
         {date, vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef} = req.body;
      db = req.app.get("db");
      db.update_ledger_entry(`ledger_${ledgerId}`, date, vendorName, trxDescription, trxType, glAccount, credit, debit, note, journalRef, ledgerLine).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   deleteLedgerLine: (req, res) => {
      const {ledgerId, ledgerLine} = req.query,
            db = req.app.get("db");
      db.delete_ledger_entry(`ledger_${ledgerId}`, ledgerLine ).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   deleteLedger: (req, res) => {
      const {ledgerId} = req.params,
            db = req.app.get("db");
      db.delete_ledger(ledgerId, `ledger_${ledgerId}`).then((ledger) => {
         res.status(200).send(ledger);
      }).catch(err => res.status(500).send(err));
   },

   }
