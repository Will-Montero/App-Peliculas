import { useState, useEffect } from "react"
import { GenerosContext } from '../generos/GenerosContext'

export const GenerosProvider = ({ children }) => {

    const URLGENEROS = "https://api.themoviedb.org/3/discover/movie";
    const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

    const [generos, setGeneros] = useState({})

    const fetchGeneros = async () => {
        const generoIds = {
        Action: 28,
        Adventure: 12,
        Drama: 18,
        Horror: 27,
        "Science Fiction": 878,
        Animation: 16,
        History: 36
        }

    const fetchGenero = async ( genero ) => {
        try {
            const response = await  fetch (`${URLGENEROS}?api_key=${API_KEY}&with_genres=${generoIds[genero]}`)
            const data = await response.json()
            return data.results;
           
        } catch (error) {
            console.error(error)
        }
    } 
    const allGeneros = {};

    for(const genero of Object.keys(generoIds)){
      allGeneros[genero] = await fetchGenero(genero)
    }

    setGeneros(allGeneros)
  }

  useEffect(() => {
    fetchGeneros()
  }, [])
   


  return (
    <>
    <GenerosContext.Provider value={{generos}}>
        {children }
    </GenerosContext.Provider>
    
    </>
  )
}
