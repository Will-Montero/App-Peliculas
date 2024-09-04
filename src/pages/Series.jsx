
import { NavLink } from "react-router-dom";
import '../styles/series.css';
import { Loading } from "../components/Loading";
import { fetchSeries } from "../hook/fetchSeries";

export const Series = () => {
   
    const { dataSeries } = fetchSeries()

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
          {dataSeries ? dataSeries.map((serie) => (
            <div key={serie.id} className="series-card">
              <div className="series-info">
                <span className="series-year">
                  {serie.first_air_date.split("-")[0]}
                </span>
              </div>
              <img loading="lazy"
               width={200} height={400}
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="series-poster"
              />
              <div className="series-details">
                <h2 className="series-title">
                  {limitarPalabras(serie.name, 2)}
                </h2>
                <p className="series-year-details">
                  {serie.first_air_date.split("-")[0]}
                </p>
                <p className="series-overview">
                  {limitarPalabras(serie.overview, 15)}
                </p>
                <NavLink to={`/reproducir/${serie.id}`} className="play-button-series">
                  Reproducir
                </NavLink>
              </div>
            </div>
          )): 
          <Loading/>}
        </div>
      </div>
    </>
  );
};
