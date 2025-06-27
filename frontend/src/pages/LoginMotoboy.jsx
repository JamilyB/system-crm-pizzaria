import React, { useState }  from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import FormAuth from '../components/organisms/FormAuth';

const LoginMotoboy = () => {


const [formData, setFormData] = useState({ email: '', senha: '' });


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://system-crm-pizzaria.onrender.com/motoboys/login', {
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

        localStorage.setItem('userId', data.userId);  // ou outro dado que o backend retorne

        window.location.href = '/historico-motoboy';
      }
    } catch (error) {
      setErrors({ general: 'Erro de conexão com o servidor' });
    }
  };

const [errors, setErrors] = useState({});

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
