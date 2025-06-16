// src/components/molecules/NavigationCRM.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationCRM = () => {
  const navStyle = {
    backgroundColor: '#FF0055',
    minHeight: '100vh',
    color: 'white',
    width: '220px',
    paddingTop: '1rem'
  };

  const linkStyle = {
    color: 'white',
    padding: '10px 20px',
    display: 'block',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle} className="d-flex flex-column">
      <NavLink to="/crm/dashboard" style={linkStyle} activeClassName="font-weight-bold">
        Dashboard
      </NavLink>
      <NavLink to="/crm/campanhas" style={linkStyle} activeClassName="font-weight-bold">
        Campanhas
      </NavLink>
      <NavLink to="/crm/historico" style={linkStyle} activeClassName="font-weight-bold">
        Histórico
      </NavLink>
      <NavLink to="/crm/perfil" style={linkStyle} activeClassName="font-weight-bold">
        Perfil Pizzaria
      </NavLink>
      <NavLink to="/crm/avaliacoes" style={linkStyle} activeClassName="font-weight-bold">
        Banco de Avaliações
      </NavLink>
    </nav>
  );
};

export default NavigationCRM;
