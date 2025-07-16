
import React, { useState } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';
import { useNavigate } from 'react-router-dom';
import { validarSenha } from '../services/validarSenha';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const RegisterCliente = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    endereco: '',
    telefone: '',
    cpf: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const senhaErrors = validarSenha(formData.senha, formData.confirmarSenha);
    if (Object.keys(senhaErrors).length > 0) {
      setErrors(senhaErrors);
      return;
    }

    try {
      console.log('Enviando formData:', formData);
      const response = await fetch(`${API_URL}/clientes/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          endereco: formData.endereco,
          telefone: formData.telefone,
          cpf: formData.cpf
        }),
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

