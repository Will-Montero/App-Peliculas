import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Search } from "./components/Search"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'
import { SearchProvider } from "./context/pelicula/SearchProvider"
import { Generos } from './pages/Generos'
import { GenerosProvider } from "./context/generos/GenerosProvider"

export const App = () => {
  return (
    <>

    <GenerosProvider>
    <SearchProvider>
    <Header></Header>
    <Search></Search>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/series" element={<Series></Series>}></Route>
      <Route path="/novelas" element={<Novelas></Novelas>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
      <Route path="/accion" element={<Generos genre="Action" />} />
      <Route path="/aventura" element={<Generos genre="Adventure" />} />
      <Route path="/drama" element={<Generos genre="Drama" />} />
      <Route path="/horror" element={<Generos genre="Horror" />} />
      <Route path="/ciencia-ficcion" element={<Generos genre="Science Fiction" />} />
      <Route path="/animacion" element={<Generos genre="Animation" />} />
      <Route path="/historia" element={<Generos genre="History" />} />
    </Routes>
    <Footer></Footer>
    </SearchProvider>
    </GenerosProvider>
  
    </>
  )
}
