import React from 'react';
import CardHistorico from '../../components/molecules/CardHistorico';
import dadosPedidos from '../../data/pedidos.json';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const HistoricoAdmin = () => {
  const handleAvaliar = async (pedido, avaliacao) => {
    try {
      await fetch(`${API_URL}/api/avaliacoes`, {
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
      {dadosPedidos.map((pedido) => (
        <CardHistorico
          key={pedido.id}
          pedido={pedido}
          avaliador="pizzaria"
          onAvaliar={handleAvaliar}
        />
      ))}
    </div>
  );
};

export default HistoricoAdmin;
