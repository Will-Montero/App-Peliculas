import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import "../styles/generos.css";
import { NavLink } from "react-router-dom";
import { Series } from "./Series";
import { Novelas } from "./Novelas";
import { Home } from "./Home";
import { Loading } from "../components/Loading";

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
              <img loading='eage'
                width={200} height={500}
                className="genero-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="genero-details">
                <h2 className="genero-title">
                  {limitarPalabras(movie.title, 2)}
                </h2>
                <p className="genero-year-details">
                  {movie.release_date.split("-")[0]}
                </p>
                <p className="genero-overview">
                  {limitarPalabras(movie.overview, 13)}
                </p>
                <NavLink to={`/reproducir/${movie.id}`} className="play-button-generos">
                  Reproducir
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
      <Home/>
      <Series/>
      <Novelas/>
    </div>
  );
};
