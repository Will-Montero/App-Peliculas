import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Search } from "./components/Search"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'

export const App = () => {
  return (
    <>
  
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/series" element={<Series></Series>}></Route>
      <Route path="/novelas" element={<Novelas></Novelas>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
    </Routes>
    <Search></Search>
    <Home></Home>
    <Series></Series>
    <Novelas></Novelas>
    <Footer></Footer>
  
    </>
  )
}
