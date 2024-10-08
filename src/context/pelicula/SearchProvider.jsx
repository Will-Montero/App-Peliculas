import { SearchContext } from "./SearchContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchProvider = ({ children }) => {

  const URL = `${import.meta.env.VITE_API_URL}/search/movie`;
  const API_KEY = `${import.meta.env.VITE_API_KEY}`


  const [busqueda, setBusqueda] = useState("");
  const [dataPeliculas, setDataPeliculas] = useState([]);
  const navigate = useNavigate();



  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${URL}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataPeliculas(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search')
    if (busqueda.length > 1) fetchPeliculas();
    
  };

  const handleOnChange = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ dataPeliculas, handleSubmit, handleOnChange, busqueda, setBusqueda, navigate}}>
        {children}
    </SearchContext.Provider>
  )
}
