import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "./config/ReactotronConfig";
import Routes from './routes';
import AppProvider from './hooks';
import { store, persistor } from "./services/store";

ReactDOM.render(

        <AppProvider>
          <Router>
            <Routes />
          </Router>
        </AppProvider>
,
  document.getElementById('root')
);
