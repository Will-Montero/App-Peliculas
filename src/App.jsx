import { Header } from "./Header"
import { Footer } from "./Footer"
import { Home } from "./Home"
import { Novelas } from "./Novelas"
import { Series } from "./Series"
import './styles/App.css'

export const App = () => {
  return (
    <>
    <div className="imagen-fondo">
    <Header></Header>
    <Home></Home>
    <Series></Series>
    <Novelas></Novelas>
    <Footer></Footer>
    </div>
    </>
  )
}
