// Exemplo para src/pages/HistoricoCliente.jsx
import React, { useState } from 'react';
import CardHistorico from '../components/molecules/CardHistorico';

const HistoricoCliente = () => {
  const [pedidos] = useState([
    { id: 101, cliente: 'João Silva', motoboy: 'Carlos', pizzaria: 'Pizza Express', dataHora: '05/06/2025 19:30' },
    // ...outros pedidos
  ]);

  const handleAvaliar = async (pedido, avaliacao) => {
    try {
      await fetch('https://system-crm-pizzaria.onrender.com/api/avaliacoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(avaliacao),
      });
      alert('Avaliação enviada!');
    } catch (e) {
      alert('Erro ao enviar avaliação');
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: '#260101' }}>Histórico de Pedidos</h2>
      {pedidos.map((pedido) => (
        <CardHistorico key={pedido.id} pedido={pedido} avaliador="cliente" onAvaliar={handleAvaliar} />
      ))}
    </div>
  );
};

export default HistoricoCliente;