import React from 'react';
import logo from '../assets/logoB.png';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="d-flex align-items-center p-3" style={{ backgroundColor: '#260101' }}>
      <img src={logo} alt="Logo" width="60" height="60" className="me-3" />
      <h1 className="fw-bold fs-4 text-white">Pizza Express</h1>

      {isLoggedIn && (
        <nav className="ms-auto">
          <ul className="d-flex list-unstyled gap-3 mb-0">
            <li><a href="/principal" className="text-white text-decoration-none">Principal</a></li>
            <li><a href="/fidelidade" className="text-white text-decoration-none">Fidelidade</a></li>
            <li><a href="/historico" className="text-white text-decoration-none">Histórico</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
