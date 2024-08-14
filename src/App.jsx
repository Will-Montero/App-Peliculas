import { AppPeliculas } from "./AppPeliculas"
import { Footer } from "./Footer"
import { Home } from "./Home"
import { Series } from "./Series"
import './styles/App.css'

export const App = () => {
  return (
    <>
    <div className="imagen-fondo">
    <AppPeliculas></AppPeliculas>
    <Home></Home>
    <Series></Series>
    <Footer></Footer>
    </div>
    </>
  )
}
