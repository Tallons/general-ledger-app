import React, { useState, useEffect } from 'react';
import '../scss/LedgerView.scss';
import useInput from "../hooks/UseInput";
import Ledger from "./Ledger";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const LedgerView = () => {
   
   const [date, setDate] = useState( new Date() )
   const [ledgerEntries, setLedgerEntries] = useState()
   const [{bankAccountId, ledgerYear, credit, debit, vendorName, trxDescription, trxType, department, glAccount, note, journalRef}, setValues, resetValues] = useInput({bankAccountId: 100101, ledgerYear: 2019,  credit: "", debit: "", vendorName: "", trxDescription: "", trxType: "", department: "", glAccount: "", note: "", journalRef: ""})
   const yearList = [2019, 2020, 2021]
   // const selector = document.getElementById("date-selector"),
   //             picker = datePicker(selector)
 
   useEffect (() => {
      if (bankAccountId && ledgerYear){
         getLedger();
      }
      console.log("useEffect")
   },[bankAccountId, ledgerYear]);

   const getLedger = ( ) => {
      axios.get(`/api/ledger/?id=${bankAccountId}&year=${ledgerYear}`).then( res => {
         console.log(res.data)
         setLedgerEntries(res.data);
      }).catch (err => console.log(err));
   }
   
   return (
     <div className="ledger-view-container">
       <section>
       <div>Your Ledger</div>
           <input placeholder="Account ID" name="bankAccountId" value={bankAccountId} onChange={(e) => setValues(e)}/>
           <select placeholder="Ledger Year" name="ledgerYear" onChange={(e) => setValues(e)}>
           <option default > </option>
               {yearList.map(el => (
                 <option>{el}</option>
                 ))}
             </select>
             {/* <button > Search</button> */}
       </section>
      { bankAccountId && ledgerYear ? (
      <>
         <div>
                  <span>DATE: </span>
                  <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                  <div>
                  {/* <input id="date-selector" type="text" placeholder="Date" name="date" value={date} onChange={(e) => setValues(e)}/> */}
                  <input placeholder="credit" name="credit" value={credit} onChange={(e) => setValues(e)}/>
                  <input placeholder="debit" name="debit" value={debit} onChange={(e) => setValues(e)}/>
                  </div>
                  <input placeholder="Vendor Name" name="vendorName" value={vendorName} onChange={(e) => setValues(e)}/>
                  <input placeholder=" Trx Description" name="trxDescription" value={trxDescription} onChange={(e) => setValues(e)}/>
                  <input placeholder="Transaction Type" name="trxType" value={trxType} onChange={(e) => setValues(e)}/>
                  <input placeholder="Department" name="department" value={department} onChange={(e) => setValues(e)}/>
                  <input placeholder="GL Account" name="glAccount" value={glAccount} onChange={(e) => setValues(e)}/>
                  <button> ADD </button> 
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
     </div>
   )
}

export default LedgerView;