// src/pages/HistoricoAdmin.jsx
import React from 'react';
import CardHistorico from '../components/molecules/CardHistorico';

const dadosPedidos = [
  { id: 101, cliente: 'João Silva', motoboy: 'Carlos', dataHora: '05/06/2025 19:30' },
  { id: 102, cliente: 'Maria Oliveira', motoboy: 'Pedro', dataHora: '06/06/2025 20:15' },
  { id: 103, cliente: 'Lucas Santos', motoboy: 'Ana', dataHora: '07/06/2025 18:45' },
];

const HistoricoAdmin = () => {
  return (
    <div className="container mt-4">
      <h2 style={{ color: '#FF0055' }}>Histórico de Pedidos</h2>
      {dadosPedidos.map((pedido) => (
        <CardHistorico pedido={pedido} avaliador="pizzaria" />
      ))}
    </div>
  );
};

export default HistoricoAdmin;
