import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Novelas } from "./pages/Novelas"
import { Series } from "./pages/Series"
import { Router, Route, Navigate } from "react-router-dom";
import './styles/App.css'

export const App = () => {
  return (
    <>
  
    <Header></Header>
    <Router>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/series" element={<Series></Series>}></Route>
      <Route path="/" element={<Novelas></Novelas>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
    <Home></Home>
    <Series></Series>
    <Novelas></Novelas>
    </Router>
   
    <Footer></Footer>
  
    </>
  )
}
