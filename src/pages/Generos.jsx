import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import "../styles/generos.css";

export const Generos = ({ genero }) => {
  const { generos } = useContext(GenerosContext);

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <div className="genero-container">
      <h2 className="genero-titulo">{genero}</h2>
      <div className="genero-list">
        {generos[genero] ? (
          generos[genero].map((movie) => (
            <div className="genero-card" key={movie.id}>
              <div className="genero-info">
                <span className="genero-year">
                  {movie.release_date.split("-")[0]}
                </span>
              </div>
              <img
                className="genero-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="genero-details">
                <h2 className="genero-title">
                  {limitarPalabras(movie.title, 4)}
                </h2>
                <p className="genero-year-details">
                  {movie.release_date.split("-")[0]}
                </p>
                <p className="genero-overview">
                  {limitarPalabras(movie.overview, 27)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando películas...</p>
        )}
      </div>
    </div>
  );
};
