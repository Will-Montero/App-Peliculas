
import { useEffect, useState } from "react";
import "../styles/home.css";
import { Series } from "./Series";
import { Novelas } from './Novelas'
import { NavLink } from "react-router-dom";
import { Loading } from "../components/Loading";


export const Home = () => {
  const URL = "https://api.themoviedb.org/3/movie/popular";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [dataPeliculas, setDataPeliculas] = useState([]);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await response.json();
      setDataPeliculas(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <div className="home-container">
      <header className="header-home">
        <h1 className="title-home">Películas Online ▶️</h1>
      </header>
      <div className="movie-list-home">
        {dataPeliculas ? dataPeliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card-home">
            <div className="movie-info-home">
              <span className="movie-year-home">
                {pelicula.release_date.split("-")[0]}
              </span>
            </div>
            <img  loading="eage"
            width={200} height={300}
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
              className="movie-poster-home"
            />
            <div className="movie-details-home">
              <h2 className="movie-title-home">
                {limitarPalabras(pelicula.title, 2)}
              </h2>
              <p className="movie-year-details-home">
                {pelicula.release_date.split("-")[0]}
              </p>
              <p className="movie-overview-home">
                {limitarPalabras(pelicula.overview, 20)}
              </p>
              <NavLink to={`/reproducir/${pelicula.id}`} className="play-button-home">
                  Reproducir
              </NavLink>
            </div>
          </div>
        )) : 
        <Loading/>}
      </div>
      <Series></Series>
      <Novelas></Novelas>
    </div>
  );
};
