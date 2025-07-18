import { useEffect, useState } from 'react';
import pizzariaData from '../../data/infoPizzaria.json';

export default function Sobre() {
  const [pizzaria, setPizzaria] = useState(null);

  useEffect(() => {
    setPizzaria(pizzariaData);
  }, []);

if (!pizzaria) return <p>Carregando...</p>;

  return (
      <div >
        <img src={pizzaria.image} alt={pizzaria.name}  />
        <h1 >{pizzaria.name}</h1>
        <p >{pizzaria.description}</p>
        <p>📍 {pizzaria.address}</p>
      </div>
    );
}
