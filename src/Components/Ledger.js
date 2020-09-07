import React from 'react';
import '../scss/Ledger.scss';
import useInput from "../hooks/UseInput";

const Ledger = (props) => {
   const {ledgerEntries} = props;

   return (
   <section className="ledger-container">
      <div>
         <button>Filters buttons</button>
         <input placeholder="Search"/>
         <button>Search</button>
         <button>Reset</button>
      </div>
      <section className="ledger-line-container">
      <div className="ledger-line-title">
               <div className="date-title">DATE</div>
               <div className="vendor-title">VENDOR NAME</div>
               <div className="trx-desc-title">TRX DESCRIPTION</div>
               <div className="trx-type-title">TRX TYPE</div>
               <div className="gl-title">GL ACCOUNT</div>
               <div className="credit-title">CREDIT</div>
               <div className="debit-title">DEBIT</div>
               <div className="balance-title">BALANCE</div>
            </div>
         {ledgerEntries.map(el => ( 
            <div className ="ledger-line">
               <div className="date">{el.ledger_date}</div>
               <div className="vendor">{el.vendor_name}</div>
               <div className="trx-desc">{el.trx_description}</div>
               <div className="trx-type">{el.trx_type}</div>
               <div className="gl">{el.gl_account_id}</div>
               <div className="credit">{el.credit}</div>
               <div className="debit">{el.debit}</div>
               <div className="note">{el.note}</div>
               <div className="journal">{el.journal_ref}</div>
            </div> ))
         }
      </section>
   </section>
   )
}

export default Ledger;