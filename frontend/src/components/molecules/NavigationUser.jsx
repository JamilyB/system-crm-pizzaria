import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cor from '../../styles/colors';
import '../../styles/main.css';
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
      className="navigation-user d-flex justify-content-center align-items-center gap-4 px-4"
    >
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationUser;