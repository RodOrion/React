import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [name]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <Link to={`/pokemon/${name}`}>
      <article>
        <h2>{name}</h2>
        {pokemonDetails && pokemonDetails.sprites ? (
          <img src={pokemonDetails.sprites.front_default} alt={name} />
        ) : (
          <div>Image non disponible</div>
        )}
      </article>
    </Link>
  );
};

export default PokemonCard;
