import React from 'react';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light p-4 gap-3">
      <Button onClick={() => navigate('/register-motoboy')}>Cadastro Motoboy</Button>
      <Button onClick={() => navigate('/login-motoboy')}>Login Motoboy</Button>
      <Button onClick={() => navigate('/register-cliente')}>Cadastro Cliente</Button>
      <Button onClick={() => navigate('/login-cliente')}>Login Cliente</Button>
    </div>
  );
};

export default HomePage;
