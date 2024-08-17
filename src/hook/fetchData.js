import { useState } from "react";
export const fetchData = () => {

  const URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";


  const [busqueda, setBusqueda] = useState("");
  const [dataPeliculas, setDataPeliculas] = useState([]);



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
    if (busqueda.length > 1) fetchPeliculas();
  };

  const handleOnChange = (e) => {
    setBusqueda(e.target.value);
  };
  return {
    dataPeliculas, handleSubmit, handleOnChange, busqueda, setBusqueda
  }
}
