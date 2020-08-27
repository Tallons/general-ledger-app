import React from 'react';
import '../scss/Ledger.scss';
import useInput from "../hooks/UseInput";

const Ledger = () => {



   return (
   <div className="ledger-container">
      <div>
         <button>Filters buttons</button>
         <input placeholder="Search"/>
         <button>Search</button>
         <button>Reset</button>
      </div>
      <div>
         {// map function for ledger entry
         }
      </div>
      LEDGER
   </div>
   )
}

export default Ledger;