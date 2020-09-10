import React from "react";
import {Switch, Route} from "react-router-dom";
import LedgerView from "./Components/LedgerView";
import LedgerSelection from "./Components/LedgerSelection";

export default (
   <Switch>
      <Route exact path="/" component={LedgerSelection}/>
      <Route path="/ledger/:id" component={LedgerView}/>
   </Switch>
)