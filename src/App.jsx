import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Search } from "./components/Search"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'
import { SearchProvider } from "./context/pelicula/SearchProvider"

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
    </Routes>
    
    <Footer></Footer>
    </SearchProvider>
  
    </>
  )
}
