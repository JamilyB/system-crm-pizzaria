import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import LoginCliente from './pages/LoginCliente';
import LoginMotoboy from './pages/LoginMotoboy';
import RegisterCliente from './pages/RegisterCliente';
import RegisterMotoboy from './pages/RegisterMotoboy';
import Sobre from './pages/Sobre';
import Fidelidade from './pages/Fidelidade';
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

function AppContent() {
  const location = useLocation();
  const isCRM = location.pathname.startsWith('/crm');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <>
      <Header />
      {isLoggedIn && <NavigationUser />}
      {isCRM && <NavigationCRM />}

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
          <Route path="/crm" element={<HomeAdmin />} />
          <Route path="/crm/avaliacoes" element={<Avaliacoes />} />
          <Route path="/crm/perfil" element={<Perfil />} />
          <Route path="/crm/historico" element={<HistoricoAdmin />} />
          <Route path="/crm/campanhas" element={<Campanhas />} />
          <Route path="/crm/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
