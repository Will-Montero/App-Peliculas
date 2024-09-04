import noHayVideo from '../assets/error/noHayVideo.avif'
export const Error = () => {
  return (
    <main className='container-error'>
        <img className='imagen-error' src={noHayVideo} alt="No hay video" />
        <p className='aviso-error'>No se ha encontrado la película</p>
    </main> 
  )
}
