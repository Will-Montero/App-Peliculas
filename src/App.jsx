import { AppPeliculas } from "./AppPeliculas"
import { Home } from "./Home"
import './styles/App.css'

export const App = () => {
  return (
    <>
    <div className="imagen-fondo">
    <AppPeliculas></AppPeliculas>
    <Home></Home>
    </div>
    </>
  )
}
