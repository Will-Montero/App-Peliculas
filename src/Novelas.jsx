import { useState, useEffect} from 'react'

export const Novelas = () => {

    const [dataSeries, setDataSeries] = useState([])

    const URL = "https://api.themoviedb.org/3/discover/tv";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const fetchNovelas = async () => {
    try {
        const response = await fetch(`${URL}?api_key=${API_KEY}&with_genres=18`);
        const data = await response.json()
        setDataSeries(data.results)
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
      <h1>Novelas Populares ▶️</h1>
      <div className="novela-list">
        {dataSeries.map((novela) => (
          <div key={novela.id} className="novela-card">
            <div className="series-info">
                <span className="series-year">
                  {novela.first_air_date.split("-")[0]}
                </span>
              </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={limitarPalabras(novela.name, 4)}
              className="novela-poster"
            />
            <div className="novela-details">
            <p className="novela-year">{novela.first_air_date.split("-")[0]}</p>
              <p className="novela-overview">{limitarPalabras(novela.overview, 23)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
