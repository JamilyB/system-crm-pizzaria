import React, { useState } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const LoginMotoboy = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/motoboys/login`, {
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

        window.location.href = '/historico-motoboy';
      }
    } catch (error) {
      setErrors({ general: 'Erro de conexão com o servidor' });
    }
  };

  return (
    <AuthTemplate>
      <FormAuth
        type="login-motoboy"
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </AuthTemplate>
  );
};

export default LoginMotoboy;
