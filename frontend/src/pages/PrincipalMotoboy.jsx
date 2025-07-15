import React, { useEffect, useState } from 'react';
const API_URL = process.env.REACT_APP_API_URL;
const PrincipalMotoboy = () => {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetch(`https://system-crm-pizzaria.onrender.com/motoboys/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json();
        })
        .then(data => {
          setNome(data.nome);
        })
        .catch(error => {
          console.error('Erro ao buscar motoboy:', error);
        });
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'coral' }}>
        Bem-vindo, {nome}!
      </h1>
    </div>
  );
};

export default PrincipalMotoboy;
