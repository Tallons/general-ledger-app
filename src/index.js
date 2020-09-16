import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import App from './App';
import { LedgerProvider } from "./context/LedgerContext"
import './index.css';

ReactDOM.render(
  <LedgerProvider>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </LedgerProvider>,
  document.getElementById('root')
);
