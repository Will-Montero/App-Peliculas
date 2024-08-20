import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import { Error } from "../components/Error";
import  avisoEnsayo from '../assets/error/avisoEnsayo.png'
import '../styles/error.css'
import '../styles/reproductorPelicula.css'


export const ReproducirPelicula = () => {
  const { id } = useParams();
  const { generos } = useContext(GenerosContext);

  let movie;
  for (const genero in generos) {
    movie = generos[genero].find((movie) => movie.id.toString() === id);
    if (movie) break;
  }

  if (!movie) return <Error></Error>;

  return (
    <div className="container-reproductor">
      <h2>{movie.title}</h2>
      <div className="video-reproductor">
        
        <img className="imagen-reproductor" src={avisoEnsayo} alt="error" />
        <p className="aviso-reproductor"></p>
      </div>
      <p className="overview-reproductor">Resumen: {movie.overview}</p>
    </div>
  );
};