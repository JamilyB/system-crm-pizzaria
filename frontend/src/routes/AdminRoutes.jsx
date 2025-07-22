import { Route } from 'react-router-dom';
import Avaliacoes from '../pages/Admin/AvaliacoesAdmin';
import Perfil from '../pages/Admin/Sobre';
import HistoricoAdmin from '../pages/Admin/HistoricoAdmin';
import Campanhas from '../pages/Admin/CampanhasAdmin';

const AdminRoutes = () => (
  <>
    <Route path="/crm/avaliacoes" element={<Avaliacoes />} />
    <Route path="/crm/perfil" element={<Perfil />} />
    <Route path="/crm/historico" element={<HistoricoAdmin />} />
    <Route path="/crm/campanhas" element={<Campanhas />} />
  </>
);

export default AdminRoutes;