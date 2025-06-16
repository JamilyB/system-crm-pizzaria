import React from 'react';
import AvaliacaoCard from '../organisms/AvaliacaoCard';

const avaliacoesMock = [
  {
    id: 1,
    autor: 'Cliente Maria',
    alvo: 'Motoboy João',
    tipo: 'Cliente → Motoboy',
    nota: 5,
    texto: 'Entrega muito rápida!',
  },
  {
    id: 2,
    autor: 'Motoboy Pedro',
    alvo: 'Pizzaria Bella Massa',
    tipo: 'Motoboy → Pizzaria',
    nota: 3,
    texto: 'Demoraram pra liberar pedido.',
  },
  {
    id: 3,
    autor: 'Cliente João',
    alvo: 'Pizzaria',
    tipo: 'Cliente → Pizzaria',
    nota: 1,
    texto: 'Pizza chegou fria.',
  },
];

const AvaliacoesTemplate = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Banco de Avaliações</h2>
      <div className="row">
        {avaliacoesMock.map((avaliacao) => (
          <div key={avaliacao.id} className="col-md-4 mb-4">
            <AvaliacaoCard {...avaliacao} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvaliacoesTemplate;
