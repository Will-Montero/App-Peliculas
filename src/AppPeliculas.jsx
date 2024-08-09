import { useState } from "react"
import  lupaBusqueda  from './assets/lupaBusqueda.png'

export const AppPeliculas = () => {


    const URL = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '9b99ed6f20e2bfc951d790cf5a420564'
  

    const [busqueda, setBusqueda] = useState('')
    const [dataPeliculas, setDataPeliculas] = useState([])

    const fetchPeliculas  = async () => {
        try {
            const response = await fetch(`${URL}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            setDataPeliculas(data.results)
            console.log(data)
        } catch (error) {
            console.error(' este es el error: ', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(busqueda.length > 1)fetchPeliculas()
    }

    const handleOnChange = (e) => {
        setBusqueda(e.target.value)
    }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             placeholder="Busca en las películas"
             value={busqueda}
             onChange={handleOnChange}
             />
            <img onClick={handleSubmit} src={lupaBusqueda} alt="Buscar" />
        </form>
    </div>

    {dataPeliculas.map(pelicula => {
       
            <div key={pelicula.id}>
                <img src={pelicula.poster_path} alt={pelicula.title} />
                <h3>{pelicula.title}</h3>
                <h5>{pelicula.adult}</h5>
            </div>
        
    })}

    </>
  )
}
