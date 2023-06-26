import { Link } from "react-router-dom"
const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand" href="/">Clínica de la mujer Vida Sana</a>
              <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                      type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">Inicio</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/nosotros">Nosotros</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/servicios">Servicios</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contacto">Contacto</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link className="btn btn-outline-light nav-link py-3 px-0 px-lg-3 rounded" to="/log-in">Iniciar sesión</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <Link className="btn btn-primary nav-link py-3 px-0 px-lg-3 rounded" to="/sign-in">Regístrate</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Header