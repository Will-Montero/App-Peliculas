import { useState, useEffect } from "react"

export const GenerosProvider = ({ children }) => {
    const [generos, setGeneros] = useState({})

    const fetchGeneros = async () => {
        const generosIds = {
            Action: 28,
        Adventure: 12,
        Drama: 18,
        Horror: 27,
        "Science Fiction": 878,
        Animation: 16,
        History: 36
        }
    }

    const fetchGenero = async ( genero ) => ñ
    const response = await  fetch (`https://api.themoviedb.org/3/discover/movie?api_key=<<YOUR_API_KEY>>&with_genres=${genreIds[genre]}`)

  return (
    <>
    
    </>
  )
}
