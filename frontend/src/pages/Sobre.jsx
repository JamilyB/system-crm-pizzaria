import { useEffect, useState } from 'react';
import SobreTemplate from '../components/templates/SobreTemplate';

export default function Sobre() {
  const [pizzaria, setPizzaria] = useState(null);

  //useEffect(() => {
  //  fetch('https://api.exemplo.com/pizzaria')
   //   .then(response => response.json())
  //    .then(data => setPizzaria(data));
  //}, []);
//

  useEffect(() => {

    setPizzaria({
      name: 'Pizzaria Delícia',
      description: 'A melhor pizza artesanal da cidade!',
      address: 'Rua das Pizzas, 123 - Centro',
      image: 'https://via.placeholder.com/400x300'
    });
  }, []);

if (!pizzaria) return <p>Carregando...</p>;

  return (
    <SobreTemplate
      name={pizzaria.name}
      description={pizzaria.description}
      address={pizzaria.address}
      image={pizzaria.image}
    />
  );
}
