import LoginCliente from '../pages/Cliente/LoginCliente';
import LoginMotoboy from '../pages/Motoboy/LoginMotoboy';
import RegisterCliente from '../pages/Cliente/RegisterCliente';
import RegisterMotoboy from '../pages/Motoboy/RegisterMotoboy';

export const authRoutes = [
  { path: '/login-cliente', element: <LoginCliente />, hideHeader: true, hideNavigationUser: true },
  { path: '/login-motoboy', element: <LoginMotoboy />, hideHeader: true, hideNavigationUser: true },
  { path: '/register-cliente', element: <RegisterCliente />, hideHeader: true, hideNavigationUser: true },
  { path: '/register-motoboy', element: <RegisterMotoboy />, hideHeader: true, hideNavigationUser: true },
];