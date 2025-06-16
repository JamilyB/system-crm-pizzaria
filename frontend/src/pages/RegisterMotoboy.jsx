import React, { useState }  from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';

const RegisterMotoboy = () => {

// 1. Cria o estado do formulário, com os campos que precisa
  const [formData, setFormData] = useState({ nome:'', email: '', placaVeiculo: '', senha:''});

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
          const response = await fetch('http://localhost:8080/motoboys/register', {
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
            // Aqui você pode redirecionar o usuário ou mostrar mensagem de sucesso
          }
        } catch (error) {
            alert('Erro: ' + error);
          setErrors({ general: 'Erro de conexão com o servidor' });
        }
      };



  return (
    <AuthTemplate>
      <FormAuth
        type="register-motoboy"
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </AuthTemplate>
  );
};

export default RegisterMotoboy;
