import exorcismo from './assets/homeImagenEstreno/exorcismo.webp'
import './styles/homeImagen.css'
export const HomeImagen = () => {
  return (
    <>
    <img loading='lazy' className='home-imagen' src={exorcismo}/>

    </>
  )
}
