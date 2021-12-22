import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProvider from './hooks';
import Agendamento from './pages/Agendamento';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Agendamento />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
