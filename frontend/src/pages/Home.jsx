import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';


const Home = () => {

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

export default Home;




