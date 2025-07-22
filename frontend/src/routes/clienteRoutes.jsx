import React from 'react';
import { Route } from 'react-router-dom';
import Fidelidade from '../pages/Cliente/Fidelidade';
import HistoricoCliente from '../pages/Cliente/HistoricoCliente';
import CampanhasCliente from '../pages/Cliente/CampanhasCliente';

export const clienteRoutes = [
  { path: '/fidelidade', element: <Fidelidade />, userType: 'cliente' },
  { path: '/historico-cliente', element: <HistoricoCliente />, userType: 'cliente' },
  { path: '/campanhas-cliente', element: <CampanhasCliente />, userType: 'cliente' },
];
