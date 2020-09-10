import React, { useState, useEffect } from 'react';
import '../scss/LedgerView.scss';
import useInput from "../hooks/UseInput";
import Ledger from "./Ledger";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const LedgerView = (props) => {

   const [newLedger, setNewLedger] = useState(),
      [date, setDate] = useState( new Date()),
      [ledgerEntries, setLedgerEntries] = useState(),
      [creditPrice, setCreditPrice] = useState(),
      [debitPrice, setDebitPrice] = useState(),
      [ledgerId, setLedgerId] = useState()

   const [{bankAccountId, ledgerYear, credit, debit, vendorName, trxDescription, trxType, glAccount, note, journalRef}, setValues, resetValues] = useInput({bankAccountId: 100101, ledgerYear: 2019,  credit: "", debit: "", vendorName: "", trxDescription: "", trxType: "", glAccount: "", note: "", journalRef: ""})
   const yearList = [2019, 2020, 2021]
 
   useEffect (() => {
      if (bankAccountId && ledgerYear){
         getLedger();
         updateSummary()
      }
   },[bankAccountId, ledgerYear]);

   const getLedger = () => {
      axios.get(`/api/ledger/?id=${bankAccountId}&year=${ledgerYear}`).then( res => {
         console.log(res.data)
         setLedgerEntries(res.data.entries);
      }).catch (err => console.log(err));
   },

   updateSummary = () => {
      setCreditPrice(ledgerEntries ? ledgerEntries.map(el => el.credit ? el.credit : 0).reduce((acc, cur) => acc += cur) : 0);
      setDebitPrice(ledgerEntries ? ledgerEntries.map(el => el.debit ? el.debit : 0).reduce((acc, cur) => acc += cur) : 0);
   },

   addToLedger = () => {
      if (date && vendorName && trxDescription && trxType && glAccount) {
         axios.post(`/api/ledger/${ledgerId}`)
      } else {
         alert("please enter all information");
      }
   }
   console.log(props);
   console.log(props.match.params.id);
   return (
     <div className="ledger-view-container">
       <section>

      </section>
        
      { bankAccountId && ledgerYear ? (
      <>
         <div>
                  <span>DATE: </span>
                  <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                  <div>
                  {/* <input id="date-selector" type="text" placeholder="Date" name="date" value={date} onChange={(e) => setValues(e)}/> */}
                  <input placeholder="Credit" name="credit" value={credit} onChange={(e) => setValues(e)}/>
                  <input placeholder="Debit" name="debit" value={debit} onChange={(e) => setValues(e)}/>
                  </div>
                  <input placeholder="Vendor Name" name="vendorName" value={vendorName} onChange={(e) => setValues(e)}/>
                  <input placeholder=" Trx Description" name="trxDescription" value={trxDescription} onChange={(e) => setValues(e)}/>
                  <input placeholder="Transaction Type" name="trxType" value={trxType} onChange={(e) => setValues(e)}/>
                  <input placeholder="GL Account" name="glAccount" value={glAccount} onChange={(e) => setValues(e)}/>
                  <button onClick={()=> addToLedger()}> ADD </button> 
         </div>
         { trxType === "adjustment" ? (
               <div>
                     <textarea placeholder="Note" name="note" value={note} onChange={(e) => setValues(e)}/>
                     <input placeholder="Journal Ref #" name="journalRef" value={journalRef} onChange={(e) => setValues(e)}/>
               </div>
         ): null}
         { ledgerEntries ? (
               <Ledger ledgerEntries = {ledgerEntries} />
         ): null}

      </>
      ) : null }
         <footer>
               <div>
                  <div>TOTAL CREDIT: <span>{creditPrice}</span></div>
                  <div>TOTAL DEBIT: <span>{debitPrice}</span></div>
               </div>
               <div> BALANCE: <span>{debitPrice - creditPrice}</span></div>
         </footer>
     </div>
   )
}

export default LedgerView;