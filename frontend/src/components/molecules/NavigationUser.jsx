import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = {
  cliente: [
    { to: '/fidelidade', label: 'Fidelidade' },
    { to: '/campanhas-cliente', label: 'Campanhas Ativas' },
    { to: '/historico-cliente', label: 'Histórico' }
  ],
  motoboy: [
    { to: '/historico-motoboy', label: 'Histórico' }
  ]
};

const NavigationUser = ({ userType }) => {
  const location = useLocation();
  const items = navItems[userType] || [];

  return (
    <nav
      className="d-flex justify-content-center align-items-center gap-4 px-4"
      style={{
        background: '#260101',
        borderRadius: '0 0 18px 18px',
        boxShadow: '0 2px 8px #0002',
        height: '38px', // altura mais fina
        minHeight: '38px',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem'
      }}
    >
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className="text-decoration-none px-3 py-1"
          style={{
            color: location.pathname === item.to ? '#260101' : '#fff',
            background: location.pathname === item.to ? '#ffe0b2' : 'transparent',
            borderRadius: '8px',
            fontWeight: location.pathname === item.to ? 'bold' : 'normal',
            transition: 'all 0.2s'
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationUser;