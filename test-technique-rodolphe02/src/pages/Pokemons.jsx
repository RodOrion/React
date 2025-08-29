import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setData(response.data);
        //console.log(response.data);
        
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <section id="pokemons" className="flexContainer innerContainer">
        {
            data.results.map( (pokemon, index) => {
                return (
                    <PokemonCard key={pokemon.name + index} name={pokemon.name} />
                )
            })
        }
    </section>
  );
};
export default Pokemons;
