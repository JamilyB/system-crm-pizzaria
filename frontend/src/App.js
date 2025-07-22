
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import LoginCliente from './pages/Cliente/LoginCliente';
import LoginMotoboy from './pages/Motoboy/LoginMotoboy';
import RegisterCliente from './pages/Cliente/RegisterCliente';
import RegisterMotoboy from './pages/Motoboy/RegisterMotoboy';
import Sobre from './pages/Admin/Sobre';
import Fidelidade from './pages/Cliente/Fidelidade';
import CampanhasCliente from './pages/Cliente/CampanhasCliente';
import HistoricoCliente from './pages/Cliente/HistoricoCliente';
import HistoricoMotoboy from './pages/Motoboy/HistoricoMotoboy';
import Avaliacoes from './pages/Admin/AvaliacoesAdmin';
import Perfil from './pages/Admin/Sobre';
import HistoricoAdmin from './pages/Admin/HistoricoAdmin';
import Campanhas from './pages/Admin/CampanhasAdmin';


import ClienteRoutes from './routes/ClienteRoutes';
import MotoboyRoutes from './routes/MotoboyRoutes';
import AdminRoutes from './routes/AdminRoutes';
import PublicRoutes from './routes/PublicRoutes';

import NavigationCRM from './components/molecules/NavigationCRM';
import NavigationUser from './components/molecules/NavigationUser';
import Header from './components/molecules/Header';

function getUserType(pathname) {
  if (
    pathname.startsWith('/historico-motoboy')
  ) {
    return 'motoboy';
  }
  if (
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
              <Route path="/crm/avaliacoes" element={<Avaliacoes />} />
              <Route path="/crm/perfil" element={<Perfil />} />
              <Route path="/crm/historico" element={<HistoricoAdmin />} />
              <Route path="/crm/campanhas" element={<Campanhas />} />
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
          <Route path="/historico-cliente" element={<HistoricoCliente />} />
          <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
          <Route path="/campanhas-cliente" element={<CampanhasCliente />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
