import { useState, useEffect } from "react";
export const fetchNovela = () => {

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
  return {
    dataNovelas
  }
}
