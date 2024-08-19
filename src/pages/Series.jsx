import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../styles/series.css';

export const Series = () => {
  const URL = "https://api.themoviedb.org/3/tv/popular";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [dataSeries, setDataSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      const response = await fetch(
        `${URL}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataSeries(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <>
      <div className="container-series">
        <header className="header-series">
          <h1 className="title">Series Online ▶️</h1>
        </header>
        <div className="series-list">
          {dataSeries.map((serie) => (
            <div key={serie.id} className="series-card">
              <div className="series-info">
                <span className="series-year">
                  {serie.first_air_date.split("-")[0]}
                </span>
              </div>
              <img loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="series-poster"
              />
              <div className="series-details">
                <h2 className="series-title">
                  {limitarPalabras(serie.name, 4)}
                </h2>
                <p className="series-year-details">
                  {serie.first_air_date.split("-")[0]}
                </p>
                <p className="series-overview">
                  {limitarPalabras(serie.overview, 27)}
                </p>
                <NavLink to={`/reproducir/${serie.id}`} className="play-button">
                  Reproducir
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
