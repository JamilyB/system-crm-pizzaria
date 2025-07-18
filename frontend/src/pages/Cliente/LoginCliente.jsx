import React, { useState } from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import FormAuth from '../../components/organisms/FormAuth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const LoginCliente = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/clientes/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors || { general: 'Erro no login' });
      } else {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        setErrors({});

        localStorage.setItem('userId', data.userId);
        localStorage.setItem('isLoggedIn', 'true');

        if (onLogin) onLogin();

        window.location.href = '/historico-cliente'; // Redireciona
      }
    } catch (error) {
      setErrors({ general: 'Erro de conexão com o servidor' });
    }
  };

  return (
    <AuthTemplate>
      <FormAuth
        type="login-cliente"
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </AuthTemplate>
  );
};

export default LoginCliente;
