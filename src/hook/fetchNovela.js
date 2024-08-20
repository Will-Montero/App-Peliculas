import { useState, useEffect } from "react";
export const fetchNovela = () => {

    const [dataNovelas, setDataNovelas] = useState([])

  const URL = `${import.meta.env.VITE_API_URL}/discover/tv`;
  const API_KEY = `${import.meta.env.VITE_API_KEY}`

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
