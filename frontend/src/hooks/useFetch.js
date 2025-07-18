import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}${endpoint}`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(json => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
}