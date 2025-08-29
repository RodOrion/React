import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const type = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        setData(response.data);
        //console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [type]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <section>
      <h2>type : {type}</h2>
      {data.pokemon.map((pokemon) => {
        return <PokemonCard name={pokemon.pokemon.name} />;
      })}
    </section>
  );
};

export default type;
