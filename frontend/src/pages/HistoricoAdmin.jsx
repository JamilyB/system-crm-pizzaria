import React from 'react';
import CardHistorico from '../components/molecules/CardHistorico';

const dadosPedidos = [
  { id: 101, cliente: 'João Silva', motoboy: 'Carlos', dataHora: '05/06/2025 19:30' },
  { id: 102, cliente: 'Maria Oliveira', motoboy: 'Pedro', dataHora: '06/06/2025 20:15' },
  { id: 103, cliente: 'Lucas Santos', motoboy: 'Ana', dataHora: '07/06/2025 18:45' },
];

const HistoricoAdmin = () => {
  // Função para enviar avaliação ao backend
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