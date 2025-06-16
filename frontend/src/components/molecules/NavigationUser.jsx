// src/components/molecules/NavigationUser.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationUser = () => {
  return (
    <nav className="d-flex gap-4 p-2 px-4" style={{ backgroundColor: '#260101' }}>
      <Link to="/principal" className="text-white text-decoration-none">Principal</Link>
      <Link to="/fidelidade" className="text-white text-decoration-none">Fidelidade</Link>
      <Link to="/historico-cliente" className="text-white text-decoration-none">Histórico</Link>
    </nav>
  );
};

export default NavigationUser;
