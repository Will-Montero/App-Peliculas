import { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/novelas.css'
import { Loading } from '../components/Loading'

export const Novelas = () => {

    const [dataNovelas, setDataNovelas] = useState([])

    const URL = "https://api.themoviedb.org/3/discover/tv";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const fetchNovelas = async () => {
    try {
        const response = await fetch(`${URL}?api_key=${API_KEY}&with_genres=18`);
        const data = await response.json()
        setDataNovelas(data.results)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchNovelas()
  }, [])

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };
  return (
    <div className="container-novelas">
      <h1 className='novela-titulo'>Novelas Populares ▶️</h1>
      <div className="novela-list">
        { dataNovelas ? dataNovelas.map((novela) => (
          <div key={novela.id} className="novela-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${novela.poster_path}`}
              alt={limitarPalabras(novela.name, 4)}
              className="novela-poster"
            />
            <div className="novela-details">
            <p className='novela-titulo-details'>
                {limitarPalabras(novela.name, 3)}
            </p>
            <p className="novela-year-details">{novela.first_air_date.split("-")[0]}</p>
              <p className="novela-overview">{limitarPalabras(novela.overview, 20)}</p>
              <NavLink to={`/reproducir/${novela.id}`} className="play-button-novela">
                  Reproducir
                </NavLink>
            </div>
          </div>
        )) : 
        <Loading/>}
      </div>
    </div>
  )
}
