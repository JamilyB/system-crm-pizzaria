import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function useDelete(endpointBase) {
  const [loading, setLoading] = useState(false);

  const remove = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${endpointBase}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Erro ao deletar');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { remove, loading };
}
