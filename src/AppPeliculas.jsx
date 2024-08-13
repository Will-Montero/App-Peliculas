import { useState } from "react";
import lupaBusqueda from "./assets/lupaBusqueda.png";
import './styles/appPeliculas.css'

export const AppPeliculas = () => {

  const URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [busqueda, setBusqueda] = useState("");
  const [dataPeliculas, setDataPeliculas] = useState({
    data: ([]),
    isLoading: false,
    errors: null
  });

  const { data, isLoading, errors } = dataPeliculas

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${URL}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataPeliculas({
        data,
        isLoading: false,
        errors: null
      });
      console.log(data);
    } catch (error) {
      setDataPeliculas({
        data: null,
        isLoading: false,
        errors: error
      });
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
  
  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
   <>
      
    <div className="container">
      <header className="peliculas-header">
      <h1 className="title">PelisFree</h1>  
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
        { dataPeliculas ? <p>Cargando...</p>
                        : errors ? <p>ha ocurrido un errors... {errors}</p>
                        : dataPeliculas.map(pelicula => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{limitarPalabras(pelicula.title, 5)}</h2>
            {/* <p className="movie-overview">{pelicula.overview}</p> */}
          </div>
        ))}
      </div>
    </div>
   </>
  );
};
