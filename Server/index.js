require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express"),
    massive = require("massive"),
    { CONNECTION_STRING, SERVER_PORT } = process.env;

    // controllers
    const ledgerCtrl = require("./Controllers/LedgerController");
    const app = express();
    
app.use(express.json());

massive({
   connectionString: CONNECTION_STRING,
   ssl: { rejectUnauthorized: false },
 }).then(db => {
   app.set("db", db)
   console.log("DB connected")
   app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
 });

// Endpoints

app.get("/api/ledger/", ledgerCtrl.getLedger);
app.post("/api/ledger/:id/:year", ledgerCtrl.createLedger);
app.post("/api/ledger/:ledgerId", ledgerCtrl.addLedgerLine);
app.put("/api/ledger/", ledgerCtrl.updateLedgerLine);
app.delete("/api/ledger/", ledgerCtrl.deleteLedgerLine);
app.delete("/api/ledger/:ledgerId", ledgerCtrl.deleteLedger);


