import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
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
      {data.results.map((type, index) => {
        return (
          <Link key={type.name + index} to={`/pokemon/type/${type.name}`}>
            <div>{type.name}</div>
          </Link>
        );
      })}
    </section>
  );
};

export default Types;
