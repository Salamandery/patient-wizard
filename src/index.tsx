import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProvider from './hooks';
import Agendamento from './pages/Agendamento';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Header />
      <Agendamento />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
