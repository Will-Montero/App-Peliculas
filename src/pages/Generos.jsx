import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import '../styles/generos.css'

export const Generos = ({ genero }) => {
  const { generos } = useContext(GenerosContext);

  return (
    <div clas>
      <h2>{genero}</h2>
      <div>
        {generos[genero] ? (
            
          generos[genero].map((movie) => (
            
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
          
        ) : (
          <p>Cargando películas...</p>
        )}
      </div>
    </div>
  );
};
