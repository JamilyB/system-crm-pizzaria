import { Route } from 'react-router-dom';
import Avaliacoes from '../pages/Admin/AvaliacoesAdmin';
import Perfil from '../pages/Admin/Sobre';
import HistoricoAdmin from '../pages/Admin/HistoricoAdmin';
import Campanhas from '../pages/Admin/CampanhasAdmin';

export const adminRoutes = [
  { path: '/crm/avaliacoes', element: <Avaliacoes />, isCRM: true },
  { path: '/crm/perfil', element: <Perfil />, isCRM: true },
  { path: '/crm/historico', element: <HistoricoAdmin />, isCRM: true },
  { path: '/crm/campanhas', element: <Campanhas />, isCRM: true },
];
