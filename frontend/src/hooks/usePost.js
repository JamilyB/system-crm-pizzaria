import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function usePost(endpoint) {
  const [loading, setLoading] = useState(false);

  const post = async (body) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new Error('Erro ao enviar dados');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { post, loading };
}
