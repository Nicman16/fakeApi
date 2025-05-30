import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from '../../contexto/contexto';
import './style.css'

function Pokemon() {
  
  const { name } = useParams(); 
  const [datapoke, setDatapoke] = useState([]);
  const { favoritos, setFavoritos } = useContext(AppContext);
  const navigate = useNavigate();
  const esFavorito = favoritos.some(p => p.id === datapoke.id);
 

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
  }, [name]); 

  const toggleFavorito = () => {
    if (esFavorito) {
      setFavoritos(favoritos.filter(p => p.id !== datapoke.id));
    } else {
      setFavoritos([...favoritos, { id: datapoke.id, nombre: datapoke.name }]);
    }
  };
  

  if (!datapoke || !datapoke.id) return <p>Cargando...</p>;
  return (
    <div className="pokemon-container">
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datapoke.id}.png`} 
        alt={datapoke.name} 
        width="200"
      />
      <p style={{ fontWeight: "bold", fontSize: "1.5rem", textTransform: "capitalize" }}>{datapoke.name}</p>
      {datapoke.types && (
        <p>Tipo(s): {datapoke.types.map(t => t.type.name).join(', ')}</p>
      )}
      <p>N° {datapoke.id}</p>
      <p>Altura: {datapoke.height/ 10} m / Peso: {datapoke.weight/ 10} kg</p>
      <p>HP: {datapoke.stats[0].base_stat}</p>
      <p>Velocidad: {datapoke.stats[5].base_stat}</p>
      <p>Ataque: {datapoke.stats[1].base_stat} | Defensa: {datapoke.stats[2].base_stat}</p>
      <p>Ataque Esp.: {datapoke.stats[3].base_stat} | Defensa Esp.: {datapoke.stats[4].base_stat}</p>
      <button className="favorito-btn" onClick={toggleFavorito}>
        {esFavorito ? '❤️' : '🤍'}
      </button>
      <button onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
}

export default Pokemon