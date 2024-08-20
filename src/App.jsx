import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Search } from './pages/Search'
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'
import { SearchProvider } from "./context/pelicula/SearchProvider"
import { Generos } from './pages/Generos'
import { GenerosProvider } from "./context/generos/GenerosProvider"
import { ReproducirPelicula } from './pages/ReproducirPelicula'
export const App = () => {
  return (
    <>
    <SearchProvider>
    <GenerosProvider>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/series" element={<Series/>}></Route>
      <Route path="/novelas" element={<Novelas/>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
      <Route path="/accion" element={<Generos genero="Accion" />} />
      <Route path="/aventura" element={<Generos genero="Aventura" />} />
      <Route path="/drama" element={<Generos genero="Drama" />} />
      <Route path="/horror" element={<Generos genero="Horror" />} />
      <Route path="/ciencia-ficcion" element={<Generos genero="Ciencia Ficción" />} />
      <Route path="/animacion" element={<Generos genero="Animados" />} />
      <Route path="/historia" element={<Generos genero="Historia" />} />
      <Route path="/reproducir/:id" element={<ReproducirPelicula/>} />
    </Routes>
    <Footer></Footer>
    </GenerosProvider>
    </SearchProvider>
  
    </>
  )
}
