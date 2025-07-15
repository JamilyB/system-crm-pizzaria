import React, { useState } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const RegisterCliente = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ nome:'', email: '', senha: '', endereco:'', telefone:'', cpf:''});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Enviando formData:', formData);
      const response = await fetch(`${API_URL}/clientes/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors || { general: 'Erro ao cadastrar' });
      } else {
        const data = await response.json();
        console.log('Cadastro bem-sucedido:', data);
        setErrors({});
        navigate('/login-cliente');
      }
    } catch (error) {
      alert('Erro: ' + error);
      setErrors({ general: 'Erro de conexão com o servidor' });
    }
  };

  return (
    <AuthTemplate>
      <FormAuth
        type="register-cliente"
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </AuthTemplate>
  );
};

export default RegisterCliente;
