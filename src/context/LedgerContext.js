import React, {createContext, useState, useCallback } from "react";

export const LedgerContext = createContext();

 export const LedgerProvider = ({ children }) => {

   const [userId, setUserId] = useState();


   return (
      <LedgerContext.Provider
        value={{
         userId
        }}>
        {children}
      </LedgerContext.Provider>
   )
}