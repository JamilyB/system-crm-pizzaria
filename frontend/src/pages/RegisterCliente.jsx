import React, { useState }  from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';
import { useNavigate } from 'react-router-dom';

const RegisterCliente = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ nome:'', email: '', senha: '', endereco:'', telefone:'', cpf:''});

  // 2. Função para atualizar os dados do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

    const [errors, setErrors] = useState({});

  // 3. Função para quando enviar o formulário (botão)
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          console.log('Enviando formData:', formData);
        const response = await fetch('http://localhost:8080/clientes/register', {
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
