import React, { useEffect, useState } from 'react';
import AvaliacaoCard from '../organisms/AvaliacaoCard';

const AvaliacoesTemplate = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/avaliacoes')
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data))
      .catch(() => setAvaliacoes([]));
  }, []);

  const formatarAvaliacao = (a) => ({
    id: a.id,
    autor: a.tipoAvaliador,
    alvo: a.tipoAvaliado,
    nota: a.nota,
    texto: a.descricao,
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: '#260101' }}>Banco de Avaliações</h2>
      <div className="row">
        {avaliacoes.map((a) => (
          <div key={a.id} className="col-md-4 mb-4">
            <AvaliacaoCard {...formatarAvaliacao(a)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvaliacoesTemplate;