import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GenerosContext } from "../context/generos/GenerosContext";

export const ReproducirPelicula = () => {
  const { id } = useParams();
  const { generos } = useContext(GenerosContext);

  let movie;
  for (const genero in generos) {
    movie = generos[genero].find((movie) => movie.id.toString() === id);
    if (movie) break;
  }

  if (!movie) return <p>Película no encontrada</p>;

  return (
    <div className="reproducir-page">
      <h2>{movie.title}</h2>
      <div className="video-placeholder">
        <p>Simulación de Reproducción de {movie.title}</p>
        {/* Aquí podrías poner un iframe de video, o simplemente una imagen que represente el video */}
      </div>
      <p>{movie.overview}</p>
    </div>
  );
};