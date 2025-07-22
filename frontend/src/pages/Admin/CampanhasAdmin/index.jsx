import React, { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import CampanhaCard from './CampanhaCard';
import CampanhaForm from './CampanhaForm';
import usePost from '../../../hooks/usePost';
import useDelete from '../../../hooks/useDelete';

const CampanhasAdmin = () => {
  const [campanhas, setCampanhas] = useState([]);
  const [novaCampanha, setNovaCampanha] = useState({ nome: '', midia: '', beneficio: '' });

  const { data, loading } = useFetch('/api/campanhas');
  const { post } = usePost('/api/campanhas');
  const { remove } = useDelete('/api/campanhas');

  useEffect(() => {
      if (data) {
        setCampanhas(
          data.map(c => ({
            id: c.id,
            nome: c.descricao ?? '',
            midia: c.midiaUsada ?? '',
            beneficio: c.beneficio ?? '',
            atingidos: c.clientesAtingidos?.length ?? 0,
            retorno: c.taxaRetorno ?? 0
          }))
        );
      }
    }, [data]);

  const handleAdd = async () => {
    if (!novaCampanha.nome || !novaCampanha.midia) return;
    const body = {
      descricao: novaCampanha.nome,
      midiaUsada: novaCampanha.midia,
      beneficio: novaCampanha.beneficio
    };
    const salva = await post(body);
    if (salva) {
      setCampanhas([
        ...campanhas,
        {
          id: salva.id,
          nome: salva.descricao,
          midia: salva.midiaUsada,
          beneficio: salva.beneficio ?? '',
          atingidos: salva.clientesAtingidos?.length ?? 0,
          retorno: salva.taxaRetorno ?? 0
        }
      ]);
      setNovaCampanha({ nome: '', midia: '', beneficio: '' });
    }
  };

  const handleDelete = async (id) => {
      const ok = await remove(id);
      if (ok) {
        setCampanhas(campanhas.filter(c => c.id !== id));
      }
    };

  return (
    <div className="container">
      <h2 className="mb-4 mt-4" style={{ color: '#260101' }}>Campanhas de Marketing</h2>
      <CampanhaForm
        novaCampanha={novaCampanha}
        setNovaCampanha={setNovaCampanha}
        handleAdd={handleAdd}
      />
      {campanhas.map(c => (
            <CampanhaCard key={c.id} campanha={c} onDelete={handleDelete} />
          ))}
    </div>
  );
};

export default CampanhasAdmin;
