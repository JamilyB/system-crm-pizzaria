import React, { useEffect, useState } from 'react';
import CampanhaCard from './CampanhaCard';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const CampanhasCliente = () => {

  const [campanhas, setCampanhas] = useState([]);
  const [aceitas, setAceitas] = useState({});

  useEffect(() => {
    const aceitasSalvas = JSON.parse(localStorage.getItem('campanhasAceitas') || '{}');
    setAceitas(aceitasSalvas);

    fetch(`${API_URL}/api/campanhas`)
      .then(res => res.json())
      .then(data => {
        setCampanhas(data);
        const userId = localStorage.getItem('userId');
        if (userId && userId.trim() !== '') {
          data.forEach(campanha => {
            fetch(`${API_URL}/api/campanhas/${campanha.id}/atingir`, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain' },
              body: userId.trim()
            });
          });
        }
      });
  }, []);

  const handleCativar = (campanhaId) => {
    const userId = localStorage.getItem('userId');
    if (userId && userId.trim() !== '') {
      fetch(`${API_URL}/api/campanhas/${campanhaId}/cativar`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: userId.trim()
      })
      .then(res => {
        if (res.ok) {
          const novasAceitas = { ...aceitas, [campanhaId]: true };
          setAceitas(novasAceitas);
          localStorage.setItem('campanhasAceitas', JSON.stringify(novasAceitas));
          alert('Campanha aceita com sucesso!');
        } else {
          alert('Erro ao aceitar campanha.');
        }
      });
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4 mt-4" style={{ color: '#260101', fontWeight: 'bold' }}>
        Campanhas Ativas
      </h2>
      {campanhas.length === 0 && (
        <p>Nenhuma campanha disponível no momento.</p>
      )}
      <div className="row">
        {campanhas.map(c => (
          <CampanhaCard
              key={c.id}
              campanha={c}
              aceita={aceitas[c.id]}
              onCativar={handleCativar}
            />
        ))}
      </div>
    </div>
  );
};

export default CampanhasCliente;
