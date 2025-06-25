import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderCliente from './components/molecules/Header';
import HeaderCRM from './components/molecules/HeaderCRM';
import Footer from './components/molecules/Footer';

const path = window.location.pathname;

// Define qual header mostrar
const Header = path.startsWith('/crm') ? HeaderCRM : HeaderCliente;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
