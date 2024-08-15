import { AppPeliculas } from "./AppPeliculas"
import { Footer } from "./Footer"
import { Home } from "./Home"
import { Novelas } from "./Novelas"
import { Series } from "./Series"
import './styles/App.css'

export const App = () => {
  return (
    <>
    <div className="imagen-fondo">
    <AppPeliculas></AppPeliculas>
    <Home></Home>
    <Novelas></Novelas>
    <Series></Series>
    <Footer></Footer>
    </div>
    </>
  )
}
