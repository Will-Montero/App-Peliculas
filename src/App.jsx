import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Search } from "./components/Search"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'
import { SearchProvider } from "./context/pelicula/SearchProvider"
import GenrePage from './Ge'

export const App = () => {
  return (
    <>
  
    <SearchProvider>
    <Header></Header>
    <Search></Search>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/series" element={<Series></Series>}></Route>
      <Route path="/novelas" element={<Novelas></Novelas>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
      <Route path="/accion" element={<GenrePage genre="Action" />} />
          <Route path="/aventura" element={<GenrePage genre="Adventure" />} />
          <Route path="/drama" element={<GenrePage genre="Drama" />} />
          <Route path="/horror" element={<GenrePage genre="Horror" />} />
          <Route path="/ciencia-ficcion" element={<GenrePage genre="Science Fiction" />} />
          <Route path="/animacion" element={<GenrePage genre="Animation" />} />
          <Route path="/historia" element={<GenrePage genre="History" />} />
    </Routes>
    
    <Footer></Footer>
    </SearchProvider>
  
    </>
  )
}
