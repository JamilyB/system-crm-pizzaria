import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css';

const NavigationCRM = () => {
  return (
    <nav className="navigation-crm d-flex flex-column">

      <NavLink
        to="/crm/campanhas"
        className={({ isActive }) => `navigation-link ${isActive ? 'active' : ''}`}
      >
        Campanhas
      </NavLink>
      <NavLink
        to="/crm/historico"
        className={({ isActive }) => `navigation-link ${isActive ? 'active' : ''}`}
      >
        Histórico
      </NavLink>
      <NavLink
        to="/crm/avaliacoes"
        className={({ isActive }) => `navigation-link ${isActive ? 'active' : ''}`}
      >
        Banco de Avaliações
      </NavLink>

    <NavLink
        to="/crm/perfil"
        className={({ isActive }) => `navigation-link ${isActive ? 'active' : ''}`}
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default NavigationCRM;