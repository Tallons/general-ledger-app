import React from 'react';
import routes from "./routes"
import './scss/App.scss';
import LedgerView from "./Components/LedgerView";
import LedgerSelection from "./Components/LedgerSelection";

const App = ()  => {
  return (
    <div className="page">
      {/* <LedgerView />
      <LedgerSelection /> */}
        {routes}
    </div>
  );
}

export default App;
