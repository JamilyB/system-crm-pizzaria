import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HistoricoMotoboy from '../pages/Motoboy/HistoricoMotoboy';

export const motoboyRoutes = [
  { path: '/historico-motoboy', element: <HistoricoMotoboy />, userType: 'motoboy' },
];