import './styles/home.css'
import  laAbuela from './assets/homePeliculas/laAbuela.webp'
export const Home = () => {
  return (
  <>
  <section  className="container-home">
    <div className="lista-cards">
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
        <div className="pelicula-card">
        <img src={laAbuela}
        loading='lazy' className="imagen-card"/>
        <h3 className="titulo-card"></h3>
        </div>
    </div>
  </section>
  </>
  )
}
