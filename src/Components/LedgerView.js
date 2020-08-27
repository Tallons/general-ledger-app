import React, { useState } from 'react';
import '../scss/LedgerView.scss';
import useInput from "../hooks/UseInput";
import Ledger from "./Ledger";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LedgerView = () => {
   
   const [date, setDate] = useState( new Date() )
   const [{accountId, ledgerYear, startBalance, endBalance, vendorName, trxDescription, trxType, department, glAccount, note, journalRef}, setValues, resetValues, startDate] = useInput({accountId: "", ledgerYear: "",  startBalance: "", endBalance: "", vendorName: "", trxDescription: "", trxType: "", department: "", glAccount: "", note: "", journalRef: ""})
   const yearList = [2019, 2020, 2021]
   // const selector = document.getElementById("date-selector"),
   //             picker = datePicker(selector)
 
   return (
     <div className="ledger-view-container">
       <div>Your Ledger</div>
       <div>
           <input placeholder="Account ID" name="accountId" value={accountId} onChange={(e) => setValues(e)}/>
           <select placeholder="Ledger Year" name="ledgerYear" onChange={(e) => setValues(e)}>
           <option default > </option>
               {yearList.map(el => (
                 <option>{el}</option>
                 ))}
             </select>
       </div>
      { accountId && ledgerYear ? (
      <>
         <div>
                  <span>DATE: </span>
                  <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                  <div>
                  {/* <input id="date-selector" type="text" placeholder="Date" name="date" value={date} onChange={(e) => setValues(e)}/> */}
                  <input placeholder="Start Balance" name="startBalance" value={startBalance} onChange={(e) => setValues(e)}/>
                  <input placeholder="End Balance" name="endBalance" value={endBalance} onChange={(e) => setValues(e)}/>
                  </div>
                  <input placeholder="Vendor Name" name="vendorName" value={vendorName} onChange={(e) => setValues(e)}/>
                  <input placeholder=" Trx Description" name="trxDescription" value={trxDescription} onChange={(e) => setValues(e)}/>
                  <input placeholder="Transaction Type" name="trxType" value={trxType} onChange={(e) => setValues(e)}/>
                  <input placeholder="Department" name="department" value={department} onChange={(e) => setValues(e)}/>
                  <input placeholder="GL Account" name="glAccount" value={glAccount} onChange={(e) => setValues(e)}/>
                  <button> ADD </button> 
         </div>
         { trxType == "adjustment" ? (
            <div>
                  <textarea placeholder="Note" name="note" value={note} onChange={(e) => setValues(e)}/>
                  <input placeholder="Journal Ref #" name="journalRef" value={journalRef} onChange={(e) => setValues(e)}/>
            </div>
         ): null}
                 
         {// map through Ledger Entries
         }
         <Ledger />

      </>
      ) : null }
     </div>
   )
}

export default LedgerView;