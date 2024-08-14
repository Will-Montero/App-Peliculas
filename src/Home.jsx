import './styles/home.css'
import  laAbuela from './assets/homePeliculas/laAbuela.webp'
import aFondo from './assets/homePeliculas/aFondo.jpg'
import niebla from './assets/homePeliculas/niebla.jpg'
import rapidos from './assets/homePeliculas/rapidos.jpg'
import hitman from './assets/homePeliculas/hitman.jpg'
import terminator from './assets/homePeliculas/terminator.jpg'
import pasajeros from './assets/homePeliculas/pasajeros.jpg'
import final from './assets/homePeliculas/final.jpg'
import guerra from './assets/homePeliculas/guerra.jpg'
export const Home = () => {
  return (
  <>
  <section  className="container-home">
    <div className="lista-cards">
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">La abuela</h3>
        <p className='info-peli-año'>2021</p>
        <p className='info-peli-resumen'>Pilar llega a su apartamento donde encuentra el cuerpo de otra mujer de su misma edad. Después, una joven desnuda se aparece frente a ella y le besa la mano. </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={aFondo}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">A fondo</h3>
        <p className='info-peli-año'>2017</p>
        <p className='info-peli-resumen'>Una familia toma su coche rumbo a las vacaciones de verano. El control electrónico de velocidad lo ajustan en 130 km/h. Durante el viaje se da cuenta de que se ha quedado atorada en esa velocidad.  </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={niebla}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Niebla sin fronteras</h3>
        <p className='info-peli-año'>2024</p>
        <p className='info-peli-resumen'>Una detective de Yakarta investiga una misteriosa ola de asesinatos en la frontera entre Indonesia y Malasia... y termina enfrentándose a los fantasmas de su pasado. </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={rapidos}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Rápidos y furiosos 7 </h3>
        <p className='info-peli-año'>2015</p>
        <p className='info-peli-resumen'>Dominic Toretto, Brian OConner y los demás regresan a Estados Unidos después de derrotar a Owen Shaw y su pandilla para intentar vivir una vida normal. </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={hitman}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Hitman agente 47</h3>
        <p className='info-peli-año'>2007</p>
        <p className='info-peli-resumen'>Hit Man es una película estadounidense de 2023, dirigida por Richard Linklater sobre un guion del propio Linklater y Glen Powell, y protagonizada por este ... </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={terminator}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Terminator 2</h3>
        <p className='info-peli-año'>1991</p>
        <p className='info-peli-resumen'>Dos exterminadores llegan del futuro para rastrear al joven hijo de Sarah Connor, John. Uno de los cíborgs está programado para eliminarlo; el otro, ... </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={pasajeros}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Passengers</h3>
        <p className='info-peli-año'>2016</p>
        <p className='info-peli-resumen'>Una nave espacial que viaja a un planeta-colonia lejano y transporta a miles de personas, tiene una avería en una de sus cámaras de sueño.</p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={final}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <p className="titulo-card">Destino final 5</p>
        <p className='info-peli-año'>2011</p>
        <p className='info-peli-resumen'>Sam Lawton Nicholas Agosto tiene una premonición sobre la destrucción de un puente colgante que causaría su muerte y la de otras personas. La visión se hace realidad, pero Sam... </p>
        </div>
        </div>
        <div className="pelicula-card">
        <img src={guerra}
        loading='lazy' className="imagen-card"/>
        <div className='info-peli'>
        <h3 className="titulo-card">Guerra mundial Z</h3>
        <p className='info-peli-año'>2013</p>
        <p className='info-peli-resumen'>Cuando una pandemia de zombis amenaza con destruir a la humanidad, un antiguo investigador de la ONU emprende una peligrosa misión por el mundo para dar con ...</p>
        </div>
        </div>
    </div>
  </section>
  </>
  )
}
