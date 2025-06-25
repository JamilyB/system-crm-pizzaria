import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationCRM = () => {
  const navStyle = {
    backgroundColor: '#260101',
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
      <NavLink
        to="/crm/dashboard"
        style={linkStyle}
        className={({ isActive }) => isActive ? 'active bg-light text-dark font-weight-bold' : ''}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/crm/campanhas"
        style={linkStyle}
        className={({ isActive }) => isActive ? 'active bg-light text-dark font-weight-bold' : ''}
      >
        Campanhas
      </NavLink>
      <NavLink
        to="/crm/historico"
        style={linkStyle}
        className={({ isActive }) => isActive ? 'active bg-light text-dark font-weight-bold' : ''}
      >
        Histórico
      </NavLink>
      <NavLink
        to="/crm/avaliacoes"
        style={linkStyle}
        className={({ isActive }) => isActive ? 'active bg-light text-dark font-weight-bold' : ''}
      >
        Banco de Avaliações
      </NavLink>
    </nav>
  );
};

export default NavigationCRM;