import React, { useEffect, useState } from 'react';
import AvaliacaoCard from './AvaliacaoCard';
import useFetch from '../../../hooks/useFetch';

const AvaliacoesAdmin = () => {
    const { data: avaliacoes, loading, error } = useFetch('/api/avaliacoes');

    const formatarAvaliacao = (a) => ({
      id: a.id,
      autor: a.tipoAvaliador,
      alvo: a.tipoAvaliado,
      nota: a.nota,
      texto: a.descricao,
    });

    if (loading) {
      return <p>Carregando avaliações...</p>;
    }

    if (error) {
      return <p>Erro ao carregar avaliações: {error.message}</p>;
    }

    const hasAvaliacoes = Array.isArray(avaliacoes) && avaliacoes.length > 0;

    return (
      <div className="container mt-4">
        <h2 className="mb-4" style={{ color: '#260101' }}>Banco de Avaliações</h2>
        <div className="row">
          {hasAvaliacoes ? (
            avaliacoes.map((a) => (
              <div key={a.id} className="col-md-4 mb-4">
                <AvaliacaoCard {...formatarAvaliacao(a)} />
              </div>
            ))
          ) : (
            <p>Nenhuma avaliação disponível.</p>
          )}
        </div>
      </div>
    );
};

export default AvaliacoesAdmin;