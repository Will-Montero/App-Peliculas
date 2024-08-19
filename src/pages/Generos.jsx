import { useContext } from "react";
import { GenresContext } from "./GenresContext";
import '../styles/generos.css'

export const GenerosPage = ({ genero }) => {
  const { generos } = useContext(GenresContext);

  return (
    <div>
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
