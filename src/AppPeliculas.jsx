import { useState } from "react";


import "./styles/appPeliculas.css";

export const AppPeliculas = () => {
  const URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [isSearching, setIsSearching] = useState(false)
  const [busqueda, setBusqueda] = useState("");
  const [dataPeliculas, setDataPeliculas] = useState([]);

  const handleSearchClick = () => {
    setIsSearching(true)
  }
  const handleExitClick = () => {
    setIsSearching(false);
    setBusqueda('');
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${URL}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataPeliculas(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
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
    <header className="header-peliculas">
  <div className={`header-content ${isSearching ? 'searching' : ''}`}>
    {!isSearching && <h1 className="title-pelis">PelisFree</h1>}
    {isSearching ? (
      <form onSubmit={handleSubmit} className="form-buscar">
        <input
          type="text"
          placeholder="Enter movie"
          value={busqueda}
          onChange={handleOnChange}
          className="search-input"
        />
        <button
          type="button"
          className="exit-button"
          onClick={handleExitClick}
        >
          X
        </button>
      </form>
    ) : (
      <button className="search-button" onClick={handleSearchClick}>
        🔍
      </button>
    )}
  </div>
</header>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <div className="movie-list">
        {dataPeliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <div className="movie-info">
              <span className="movie-year">
                {pelicula.release_date.split("-")[0]}
              </span>
            </div>
            
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
                className="movie-poster"
              />
            
            <div className="movie-details">
              <h2 className="movie-title">
                {limitarPalabras(pelicula.title, 4)}
              </h2>
              <p className="movie-year-details">
                {pelicula.release_date.split("-")[0]}
              </p>
              <p className="movie-overview">
                {limitarPalabras(pelicula.overview, 27)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
};
