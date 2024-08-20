import { useState } from "react";
import { useContext} from "react";
import { SearchContext } from "../context/pelicula/SearchContext";
import { NavLink } from "react-router-dom";

import "../styles/header.css";


export const Header = () => {
  const {  handleOnChange,  handleSubmit, busqueda, setBusqueda } = useContext(SearchContext);


  const [isSearching, setIsSearching] = useState(false);
  const handleSearchClick = () => {
    setIsSearching(true);
  };
  const handleExitClick = () => {
    setIsSearching(false);
    setBusqueda("");
  };

  return (
    <>
      <div className="container">
        <header className="header-peliculas">
          <div className={`header-content ${isSearching ? "searching" : ""}`}>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {!isSearching && (
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                )}

                {/* Título del lado izquierdo */}
                {!isSearching && <NavLink to='/' className="navbar-brand">PelisFree</NavLink>}
                

                {/* Elementos del navbar */}
                {!isSearching && (
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink to='/' className="nav-link" href="#">
                          Inicio
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to='/series' className="nav-link" href="#">
                          Series
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to='/novelas' className="nav-link" href="#">
                          Novelas
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Géneros
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink to='/Accion' className="dropdown-item">Acción</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Aventura' className="dropdown-item">Aventura</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Drama' className="dropdown-item">Drama</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Horror' className="dropdown-item" >Horror</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Ciencia-Ficcion' className="dropdown-item">Ciencia Ficción</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Animacion' className="dropdown-item" >Animación</NavLink>
                          </li>
                          <li>
                            <NavLink to='/Historia' className="dropdown-item">Historia</NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                )}


                {/* Botón para expandir el menú en móviles */}
                {!isSearching && (
                  <button className="search-button" onClick={handleSearchClick}>
                    🔍
                  </button>
                )}


                {/* Formulario de búsqueda */}
                <div  className="form-container d-flex   ms-auto">
                  {isSearching && (
                    <form onSubmit={handleSubmit}  className="form-buscar">
                      <input
                      
                        type="text"
                        placeholder="Enter movie"
                        value={busqueda}
                        onChange={handleOnChange}
                        className="search-input"
                      />
                      <button
                        type="button"
                        className="exit-button"
                        onClick={handleExitClick}
                      >
                        ❌
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </header>
        <br />
      </div>
    </>
  );
};
