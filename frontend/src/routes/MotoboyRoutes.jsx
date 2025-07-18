import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalMotoboy from '../pages/Motoboy/PrincipalMotoboy';
import HistoricoMotoboy from '../pages/Motoboy/HistoricoMotoboy';

const MotoboyRoutes = () => (
    <>
    <Route path="/principal-motoboy" element={<PrincipalMotoboy />} />
    <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
    </>
);

export default MotoboyRoutes;