import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const Principal = () => {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetch(`${API_URL}/clientes/${userId}`)
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
          console.error('Erro ao buscar cliente:', error);
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

export default Principal;
