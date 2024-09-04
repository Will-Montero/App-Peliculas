import '../styles/search.css'
import { useContext } from 'react';
import { SearchContext } from '../context/pelicula/SearchContext';
import { NavLink } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Home } from './Home';
import { Series } from './Series';
import { Novelas } from './Novelas';



export const Search = () => {

    const {dataPeliculas} = useContext(SearchContext)

    const limitarPalabras = (texto, maxPalabras) => {
        const palabras = texto.split(" ");
        if (palabras.length > maxPalabras) {
          return palabras.slice(0, maxPalabras).join(" ") + "...";
        }
        return texto;
      };


  return (
    <>
    <div className='container-search'>
    <div className="movie-list">
       {!dataPeliculas ?  <Loading/> :
    dataPeliculas.map((pelicula) => (
      <div key={pelicula.id} className="movie-card">
        <div className="movie-info">
          <span className="movie-year">
            {pelicula.release_date.split("-")[0]}
          </span>
        </div>

        <img
        loading='lazy'
         width={200} height={400}
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
          className="movie-poster"
        />

        <div className="movie-details">
          <h2 className="movie-title">
            {limitarPalabras(pelicula.title, 2)}
          </h2>
          <p className="movie-year-details">
            {pelicula.release_date.split("-")[0]}
          </p>
          <p className="movie-overview">
            {limitarPalabras(pelicula.overview, 20)}
          </p>
          <NavLink to={"/reproducir/:id" }  className="play-button-search" >
                  Reproducir
          </NavLink>
        </div>
      </div>
    )) 
   }

  </div>
  <Home/>
  <Novelas/>
  <Series/>
    </div>
    </>
  )
}
