import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HistoricoMotoboy from '../pages/Motoboy/HistoricoMotoboy';

const MotoboyRoutes = () => (
    <>
    <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
    </>
);

export default MotoboyRoutes;