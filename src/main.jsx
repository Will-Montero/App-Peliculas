import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppPeliculas } from './AppPeliculas'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPeliculas></AppPeliculas>
  </StrictMode>,
)
