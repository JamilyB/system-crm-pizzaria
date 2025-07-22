import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { authRoutes } from './routes/authRoutes';
import { publicRoutes } from './routes/publicRoutes';
import { clienteRoutes } from './routes/clienteRoutes';
import { motoboyRoutes } from './routes/motoboyRoutes';
import { adminRoutes } from './routes/adminRoutes';

import NavigationCRM from './components/molecules/NavigationCRM';
import NavigationUser from './components/molecules/NavigationUser';
import Header from './components/molecules/Header';

function AppContent() {
  const location = useLocation();

  const allAppRoutes = [
    ...authRoutes,
    ...publicRoutes,
    ...clienteRoutes,
    ...motoboyRoutes,
    ...adminRoutes,
  ];

  const currentRoute = allAppRoutes.find(route => route.path === location.pathname);

  const hideLayout = currentRoute?.hideLayout || false;

  const isCRMRoute = currentRoute?.isCRM || false;

  const userType = currentRoute?.userType || null;


  if (isCRMRoute) {
    return (
      <>
        {!hideLayout && <Header />}
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <NavigationCRM />
          <main className="flex-grow-1">
            <Routes>
              {adminRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </div>
      </>
    );
  }


  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && userType && <NavigationUser userType={userType} />}
      <main className="flex-grow-1">
        <Routes>
          {allAppRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
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