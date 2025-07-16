import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HeaderCliente from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import { HashRouter } from 'react-router-dom';
const path = window.location.pathname;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
       <App />
    </HashRouter>
  </React.StrictMode>
);
