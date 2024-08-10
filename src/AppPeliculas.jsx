import { useState } from "react";
import lupaBusqueda from "./assets/lupaBusqueda.png";
import './styles/appPeliculas.css'

export const AppPeliculas = () => {

  const URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [busqueda, setBusqueda] = useState("");
  const [dataPeliculas, setDataPeliculas] = useState([]);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${URL}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataPeliculas(data.results);
      console.log(data);
    } catch (error) {
      console.error(" este es el error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.length > 1) fetchPeliculas();
  };

  const handleOnChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
   <>
    <div className="container">
      <header className="peliculas-header">
      <h1 className="title">App of movies</h1>  
      </header>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter movie"
          value={busqueda}
          onChange={handleOnChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img src={lupaBusqueda} alt="Buscar" className="search-icon" />
        </button>
      </form>

      <div className="movie-list">
        {dataPeliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{pelicula.title}</h2>
            {/* <p className="movie-overview">{pelicula.overview}</p> */}
          </div>
        ))}
      </div>
    </div>
   </>
  );
};
