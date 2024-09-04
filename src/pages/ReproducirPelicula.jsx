import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";
import { Error } from "../components/Error";
import  avisoEnsayo from '../assets/error/avisoEnsayo.avif'
import '../styles/error.css'
import '../styles/reproductorPelicula.css'
import { Loading } from "../components/Loading";
import { Home } from "./Home";
import { Series } from "./Series";
import { Novelas } from "./Novelas";


export const ReproducirPelicula = () => {
  const { id } = useParams();
  const { generos } = useContext(GenerosContext);
  
  let movie;
  for (const genero in generos) {
    movie = generos[genero].find((movie) => movie.id.toString() === id);
  
    if (movie) break;
  }
 
  if (!movie) return <Error/>;

  return (
   <>
  <div className="Reproductor-container">
  {movie.title ? 
    <div className="card-reproductor">
    <h2>{movie.title}</h2>
   <div className="video-reproductor">
     
     <img className="imagen-reproductor" src={avisoEnsayo} alt="error" />

   </div>
   <p className="overview-reproductor">Lamentamos no traer la pelicula, PelisFree es una App de ensayo en el cual se hacen varios  fetch de una api(TMBD) el cual me permite practicar React</p>
   <br />
 </div> :
  <Loading/> 

  }
  <Novelas/>
  <Home/>
  <Series/>
  </div>
   </>
     
  );
};