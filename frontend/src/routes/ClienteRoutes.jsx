import React from 'react';
import { Route } from 'react-router-dom';
import Fidelidade from '../pages/Cliente/Fidelidade';
import HistoricoCliente from '../pages/Cliente/HistoricoCliente';
import CampanhasCliente from '../pages/Cliente/CampanhasCliente';

const ClienteRoutes = () => (
  <React.Fragment>
    <Route path="/fidelidade" element={<Fidelidade />} />
    <Route path="/historico-cliente" element={<HistoricoCliente />} />
    <Route path="/campanhas-cliente" element={<CampanhasCliente />} />
  </React.Fragment>
);

export default ClienteRoutes;