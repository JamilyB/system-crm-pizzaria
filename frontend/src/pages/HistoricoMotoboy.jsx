import React, { useState } from 'react';
import CardHistorico from '../components/molecules/CardHistorico';

const HistoricoMotoboy = () => {
  const [pedidos] = useState([
    { id: 101, cliente: 'João Silva', motoboy: 'Carlos', pizzaria: 'Pizza Express', dataHora: '05/06/2025 19:30' },
    { id: 102, cliente: 'Maria Oliveira', motoboy: 'Pedro', pizzaria: 'Pizza Express', dataHora: '06/06/2025 20:15' },
    { id: 103, cliente: 'Lucas Santos', motoboy: 'Ana', pizzaria: 'Pizza Express', dataHora: '07/06/2025 18:45' },
  ]);

  // Função para enviar avaliação ao backend
  const handleAvaliar = async (pedido, avaliacao) => {
    try {
      await fetch('http://localhost:8080/api/avaliacoes', {
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
        <CardHistorico
          key={pedido.id}
          pedido={pedido}
          avaliador="motoboy"
          onAvaliar={handleAvaliar}
        />
      ))}
    </div>
  );
};

export default HistoricoMotoboy;