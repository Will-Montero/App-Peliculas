import { NavLink } from 'react-router-dom'
import '../styles/novelas.css'
import { Loading } from '../components/Loading'
import { fetchNovela } from '../hook/fetchNovela'

export const Novelas = () => {

  const { dataNovelas } = fetchNovela()

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
            <img loading='lazy'
            width={200} height={400}
              src={`https://image.tmdb.org/t/p/w500${novela.poster_path}`}
              alt={limitarPalabras(novela.name, 4)}
              className="novela-poster"
            />
            <div className="novela-details">
            <p className='novela-titulo-details'>
                {limitarPalabras(novela.name, 3)}
            </p>
            <p className="novela-year-details">{novela.first_air_date.split("-")[0]}</p>
              <p className="novela-overview">{limitarPalabras(novela.overview, 15)}</p>
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
