// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import LoginCliente from './pages/LoginCliente';
import LoginMotoboy from './pages/LoginMotoboy';
import RegisterCliente from './pages/RegisterCliente';
import RegisterMotoboy from './pages/RegisterMotoboy';
import Sobre from './pages/Sobre';
import Fidelidade from './pages/Fidelidade';
import CampanhasCliente from './pages/CampanhasCliente';
import Principal from './pages/Principal';
import PrincipalMotoboy from './pages/PrincipalMotoboy';
import HistoricoCliente from './pages/HistoricoCliente';
import HistoricoMotoboy from './pages/HistoricoMotoboy';
import HomeAdmin from './pages/HomeAdmin';
import Avaliacoes from './pages/AvaliacoesAdmin';
import Perfil from './pages/Sobre';
import HistoricoAdmin from './pages/HistoricoAdmin';
import Campanhas from './pages/CampanhasAdmin';
import Dashboard from './pages/DashBoardAdmin';

import NavigationCRM from './components/molecules/NavigationCRM';
import NavigationUser from './components/molecules/NavigationUser';
import Header from './components/molecules/Header';

function getUserType(pathname) {
  if (
    pathname.startsWith('/principal-motoboy') ||
    pathname.startsWith('/historico-motoboy')
  ) {
    return 'motoboy';
  }
  if (
    pathname.startsWith('/principal') ||
    pathname.startsWith('/fidelidade') ||
    pathname.startsWith('/historico-cliente') ||
    pathname.startsWith('/campanhas-cliente')
  ) {
    return 'cliente';
  }
  return null;
}

function AppContent() {
  const location = useLocation();
  const isCRM = location.pathname.startsWith('/crm');

  const noHeaderRoutes = [
    '/login-cliente',
    '/login-motoboy',
    '/register-cliente',
    '/register-motoboy'
  ];
  const hideHeader = noHeaderRoutes.includes(location.pathname);
  const hideNavigationUser = noHeaderRoutes.includes(location.pathname);

  const userType = getUserType(location.pathname);

  if (isCRM) {
    return (
      <>
        {!hideHeader && <Header />}
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <NavigationCRM />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/crm" element={<HomeAdmin />} />
              <Route path="/crm/avaliacoes" element={<Avaliacoes />} />
              <Route path="/crm/perfil" element={<Perfil />} />
              <Route path="/crm/historico" element={<HistoricoAdmin />} />
              <Route path="/crm/campanhas" element={<Campanhas />} />
              <Route path="/crm/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      {!hideHeader && <Header />}
      {!hideNavigationUser && userType && <NavigationUser userType={userType} />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-cliente" element={<LoginCliente />} />
          <Route path="/login-motoboy" element={<LoginMotoboy />} />
          <Route path="/register-cliente" element={<RegisterCliente />} />
          <Route path="/register-motoboy" element={<RegisterMotoboy />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/fidelidade" element={<Fidelidade />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/principal-motoboy" element={<PrincipalMotoboy />} />
          <Route path="/historico-cliente" element={<HistoricoCliente />} />
          <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
          <Route path="/campanhas-cliente" element={<CampanhasCliente />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;