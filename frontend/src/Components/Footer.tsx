import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <footer className="footer text-center">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4">Dirección</h4>
                      <p className="lead mb-0">
                          Av Pdte Adolfo López Mateos 117, Olive Colony, Mexico Nuevo, 52966 Cd López Mateos, Méx.
                      </p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4">Regístrate</h4>
                      <Link to='/medico' className="btn btn-outline-light mx-1">Medico View</Link>
                      <Link to='/admin' className="btn btn-outline-light mx-1">Admin View</Link>
                      <Link to='/paciente' className="btn btn-outline-light mx-1">Paciente View</Link>
                  </div>
                  <div className="col-lg-4">
                      <h4 className="text-uppercase mb-4">Contáctanos </h4>
                      <p className="lead mb-0">
                          Si tienes alguna queja o preguna acerca de nuestros servicios, puedes comunicarte con nosotros.</p>

                          <p className="lead mb-0">Teléfono: 55 7987 3603</p>
                          <p className="lead mb-0">Correo electrónico: vidasana@gmail.com</p>

                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer