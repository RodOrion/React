import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Pokemon = () => {
    const {name} = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setData(response.data);
        //console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);
console.log(data);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <section id="pokemons" className="flexContainer innerContainer">


                    <article>
                        <h2>{data.name}</h2>
                        {data.sprites ? (
                        <img src={data.sprites.front_default} alt={data.name} />
                        ) : (
                        <div>Image non disponible</div>
                        )}
                        
                        { 
                        data.types.map( (type) => {
                          return <Link to={`/pokemon/type/${type.type.name}`}>{type.type.name}</Link>
                        }
                      )}
                            
                    </article>
                


        
    </section>
  );
}

export default Pokemon;