import React, { useState, useEffect } from 'react';
import '../scss/LedgerSelection.scss';
import useInput from "../hooks/UseInput";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const LedgerView = (props) => {

   const [newLedger, setNewLedger] = useState()

   const [{bankAccountId, ledgerYear}, setValues, resetValues] = useInput({bankAccountId: 100101, ledgerYear: 2019})

   const yearList = [2019, 2020, 2021]

   const handleClick = () => {
      if (newLedger) {
         console.log("new Ledger: ", bankAccountId, ledgerYear)
         // Create Table call
      } else {
         axios.get(`/api/ledger/?id=${bankAccountId}&year=${ledgerYear}`).then(res => {
            console.log("data: ", res.data)
            // set ledger context res.data.ledger
            props.history.push(`/ledger/${res.data.ledgerId}`)
         }).catch (err => console.log(err))
      }
   }
console.log(props)
   return (
      <>
         <section className="ledger-selector-container">
               <div className="ledger-selector">
                     <div className={newLedger ? "selector-exist" : "selector-exist selected"} onClick={() => setNewLedger(false)}>Find Ledger</div>
                     <div className={newLedger ? "selector-new selected" : "selector-new"}  onClick={() => setNewLedger(true)}>New Ledger</div>
               </div>

               <div className="ledger-selector-input">
                     <input placeholder="Account ID" name="bankAccountId" value={bankAccountId} onChange={(e) => setValues(e)}/>
                     <select  name="ledgerYear" onChange={(e) => setValues(e)}>
                           <option selected="selected" > Year</option>
                              {yearList.map(el => (
                                 <option>{el}</option>
                                 ))}
                     </select>
                  </div>
                        <button className="ledger-selector-button" onClick={() => handleClick()}>
                           {newLedger ? "Create" : "Search"} 
                        </button>
         </section>
         <section className="error-box">
               <p>ERROR</p>
         </section>
     </>
   )
}

export default LedgerView;