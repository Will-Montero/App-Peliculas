import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import './styles/App.css'

export const App = () => {
  return (
    <>
    <div>
    <Header></Header>
    <Home></Home>
    <Series></Series>
    <Novelas></Novelas>
    <Footer></Footer>
    </div>
    </>
  )
}
