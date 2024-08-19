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
import { ReproducirPelicula } from "./pages/ReproducirPelicula"
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
      <Route path="/accion" element={<Generos genero="Action" />} />
      <Route path="/aventura" element={<Generos genero="Adventure" />} />
      <Route path="/drama" element={<Generos genero="Drama" />} />
      <Route path="/horror" element={<Generos genero="Horror" />} />
      <Route path="/ciencia-ficcion" element={<Generos genero="Science Fiction" />} />
      <Route path="/animacion" element={<Generos genero="Animation" />} />
      <Route path="/historia" element={<Generos genero="History" />} />
      <Route path="/reproducir/:id" element={<ReproducirPelicula/>} />
    </Routes>
    <Footer></Footer>
    </SearchProvider>
    </GenerosProvider>
  
    </>
  )
}
