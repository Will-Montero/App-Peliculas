import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import '../styles/generos.css'

export const Generos = ({ genero }) => {
  const { generos } = useContext(GenerosContext);

  return (
    <div className="genero-container">
      <h2 className="genero-titulo-card">{genero}</h2>
      <div className="genero-">
        {generos[genero] ? (
            
          generos[genero].map((movie) => (
            
            <div key={movie.id}>
              <h3 className="genero-titulo-info">{movie.title}</h3>
              <img className="genero-poster"
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
