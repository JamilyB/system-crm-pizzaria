import React, { useEffect, useState } from 'react';

const CampanhasCliente = () => {
  const [campanhas, setCampanhas] = useState([]);
  const [aceitas, setAceitas] = useState({});

  // Recupera aceitas do localStorage ao iniciar
  useEffect(() => {
    const aceitasSalvas = JSON.parse(localStorage.getItem('campanhasAceitas') || '{}');
    setAceitas(aceitasSalvas);

    fetch('https://system-crm-pizzaria.onrender.com/api/campanhas')
      .then(res => res.json())
      .then(data => {
        setCampanhas(data);
        const userId = localStorage.getItem('userId');
        if (userId && userId.trim() !== '') {
          data.forEach(campanha => {
            fetch(`https://system-crm-pizzaria.onrender.com/api/campanhas/${campanha.id}/atingir`, {
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
      fetch(`https://system-crm-pizzaria.onrender.com/api/campanhas/${campanhaId}/cativar`, {
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
          <div key={c.id} className="col-12 col-md-6">
            <div
              className="card shadow"
              style={{
                border: '2px solid #260101',
                background: 'linear-gradient(135deg, #fff7e6 60%, #ffe0b2 100%)',
                borderRadius: '18px'
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b30000', fontWeight: 'bold' }}>
                  <span role="img" aria-label="megafone">📣</span> {c.descricao}
                </h5>
                <div
                  className="mb-3 p-2"
                  style={{
                    background: '#fff3cd',
                    borderRadius: '8px',
                    color: '#856404',
                    fontWeight: 'bold',
                    fontSize: '1.1em',
                    boxShadow: '0 1px 4px #ffe082'
                  }}
                >
                  <span role="img" aria-label="presente">🎁</span> Benefício: {c.beneficio}
                </div>
                <button
                  className="btn btn-success"
                  disabled={!!aceitas[c.id]}
                  style={aceitas[c.id] ? { backgroundColor: '#28a745', opacity: 0.7 } : {}}
                  onClick={() => handleCativar(c.id)}
                >
                  {aceitas[c.id] ? 'Aceito' : 'Aceitar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampanhasCliente;