/* import "./styles/home.css";
import laAbuela from "./assets/homePeliculas/laAbuela.webp";
import aFondo from "./assets/homePeliculas/aFondo.jpg";
import niebla from "./assets/homePeliculas/niebla.jpg";
import rapidos from "./assets/homePeliculas/rapidos.jpg";
import hitman from "./assets/homePeliculas/hitman.jpg";
import terminator from "./assets/homePeliculas/terminator.jpg";
import pasajeros from "./assets/homePeliculas/pasajeros.jpg";
import final from "./assets/homePeliculas/final.jpg";
import guerra from "./assets/homePeliculas/guerra.jpg";
import resident from './assets/homePeliculas/resident.jpg'
import titanic from './assets/homePeliculas/titanic.jpg'
import redSocial from './assets/homePeliculas/redSocial.jpg'
import dune from './assets/homePeliculas/dune.jpg'
import rubias from './assets/homePeliculas/rubias.jpg'
import laNiebla from './assets/homePeliculas/laNiebla.jpg'
export const Home = () => {

  return (
    <>
      <section className="container-home">
        <h3 className="titulo-home">Ver película</h3>
        <div className="lista-cards">
          <div className="pelicula-card">
            <img src={laAbuela} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">La abuela</h3>
              <p className="info-peli-año">2021</p>
              <p className="info-peli-resumen">
                Pilar llega a su apartamento donde encuentra el cuerpo de otra
                mujer de su misma edad. Después, una joven desnuda se aparece
                frente a ella y le besa la mano.{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={aFondo} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">A fondo</h3>
              <p className="info-peli-año">2017</p>
              <p className="info-peli-resumen">
                Una familia toma su coche rumbo a las vacaciones de verano. El
                control electrónico de velocidad lo ajustan en 130 km/h. Durante
                el viaje se da cuenta de que se ha quedado atorada en esa
                velocidad.{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={niebla} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Niebla sin fronteras</h3>
              <p className="info-peli-año">2024</p>
              <p className="info-peli-resumen">
                Una detective de Yakarta investiga una misteriosa ola de
                asesinatos en la frontera entre Indonesia y Malasia... y termina
                enfrentándose a los fantasmas de su pasado.{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={rapidos} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Rápidos y furiosos 7 </h3>
              <p className="info-peli-año">2015</p>
              <p className="info-peli-resumen">
                Dominic Toretto, Brian OConner y los demás regresan a Estados
                Unidos después de derrotar a Owen Shaw y su pandilla para
                intentar vivir una vida normal.{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={hitman} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Hitman agente 47</h3>
              <p className="info-peli-año">2007</p>
              <p className="info-peli-resumen">
                Hit Man es una película estadounidense de 2023, dirigida por
                Richard Linklater sobre un guion del propio Linklater y Glen
                Powell, y protagonizada por este ...{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={terminator} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Terminator 2</h3>
              <p className="info-peli-año">1991</p>
              <p className="info-peli-resumen">
                Dos exterminadores llegan del futuro para rastrear al joven hijo
                de Sarah Connor, John. Uno de los cíborgs está programado para
                eliminarlo; el otro, ...{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={pasajeros} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Passengers</h3>
              <p className="info-peli-año">2016</p>
              <p className="info-peli-resumen">
                Una nave espacial que viaja a un planeta-colonia lejano y
                transporta a miles de personas, tiene una avería en una de sus
                cámaras de sueño.
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={final} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <p className="titulo-card">Destino final 5</p>
              <p className="info-peli-año">2011</p>
              <p className="info-peli-resumen">
                Sam Lawton Nicholas Agosto tiene una premonición sobre la
                destrucción de un puente colgante que causaría su muerte y la de
                otras personas. La visión se hace realidad, pero Sam...{" "}
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={guerra} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Guerra mundial Z</h3>
              <p className="info-peli-año">2013</p>
              <p className="info-peli-resumen">
                Cuando una pandemia de zombis amenaza con destruir a la
                humanidad, un antiguo investigador de la ONU emprende una
                peligrosa misión por el mundo para dar con ...
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={resident} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Resident Evil 3</h3>
              <p className="info-peli-año">2007</p>
              <p className="info-peli-resumen">
              Alice debe atravesar el desierto de Nevada junto con los supervivientes de la catástrofe acontecida en la ciudad de Raccoon. 
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={redSocial} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Red social</h3>
              <p className="info-peli-año">2010</p>
              <p className="info-peli-resumen">
              En La red social el director David Fincher y el guionista Aaron Sorkin exploran el momento de la invención de Facebook, el fenómeno social más revolucionario ...     </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={dune} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Dune</h3>
              <p className="info-peli-año">2021</p>
              <p className="info-peli-resumen">
              Para asegurar el futuro de su pueblo, un joven viaja a un planeta peligroso y rico en recursos, donde unas siniestras fuerzas lo empujan a cumplir un ...
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={titanic} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">Titanic</h3>
              <p className="info-peli-año">1997</p>
              <p className="info-peli-resumen">
              Película que nos muestra las vidas de los pasajeros a bordo del lujoso Titanic, antes y durante el hundimiento del crucero en mitad del Atlántico. Protagonizada ...
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={rubias} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">¿Dónde están las rubias?</h3>
              <p className="info-peli-año">2004</p>
              <p className="info-peli-resumen">
              Dos agentes del FBI de raza negra se disfrazan de mujeres blancas para hacerse pasar por las herederas a las que deben proteger de un inminente secuestro.
              </p>
            </div>
          </div>
          <div className="pelicula-card">
            <img src={laNiebla} loading="lazy" className="imagen-card" />
            <div className="info-peli">
              <h3 className="titulo-card">La niebla</h3>
              <p className="info-peli-año">2007</p>
              <p className="info-peli-resumen">
              La familia Copeland se separa cuando una extraña niebla, que oculta seres mortíferos, invade su pequeño pueblo y lo aísla del resto del mundo.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
 */

import { useEffect, useState } from "react";
import "../styles/home.css";
import { Series } from "./Series";
import { Novelas } from './Novelas'
import { NavLink } from "react-router-dom";


export const Home = () => {
  const URL = "https://api.themoviedb.org/3/movie/popular";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [dataPeliculas, setDataPeliculas] = useState([]);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await response.json();
      setDataPeliculas(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <div className="home-container">
      <header className="header-home">
        <h1 className="title-home">Películas Online ▶️</h1>
      </header>
      <div className="movie-list-home">
        {dataPeliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card-home">
            <div className="movie-info-home">
              <span className="movie-year-home">
                {pelicula.release_date.split("-")[0]}
              </span>
            </div>
            <img loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
              className="movie-poster-home"
            />
            <div className="movie-details-home">
              <h2 className="movie-title-home">
                {limitarPalabras(pelicula.title, 2)}
              </h2>
              <p className="movie-year-details-home">
                {pelicula.release_date.split("-")[0]}
              </p>
              <p className="movie-overview-home">
                {limitarPalabras(pelicula.overview, 20)}
              </p>
              <NavLink to={`/reproducir/${pelicula.id}`} className="play-button-home">
                  Reproducir
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Series></Series>
      <Novelas></Novelas>
    </div>
  );
};
