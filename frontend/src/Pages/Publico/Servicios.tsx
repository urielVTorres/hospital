import React from 'react'

const Servicios = () => {
  return (
      <section className="page-section portfolio mt-5" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Servicios</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal1">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Gine.png" alt="..."/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal2">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Ped.png" alt="..."/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal3">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Obs.png" alt="..."/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal4">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Neonatal.png" alt="..."/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal5">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Sala.png" alt="..."/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal6">
                <div
                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                      className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/Analisis.png" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Ginecología</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Gine.png"
                           alt="..."/>
                      <p className="mb-4">En nuestra unidad de ginecología, comprendemos las necesidades únicas de las mujeres y nos esforzamos por brindar servicios
                        médicos de calidad en un entorno cómodo y confidencial. Desde la adolescencia hasta la menopausia y
                        más allá, estamos aquí para ayudar a las mujeres a mantener y mejorar su salud ginecológica.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2"  aria-labelledby="portfolioModal2"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Pediatría</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Ped.png"
                           alt="..."/>
                      <p className="mb-4">En nuestra unidad de pediatría, nos esforzamos por proporcionar un entorno cálido y acogedor para nuestros pacientes y sus familias.
                        Nuestro objetivo principal es promover la salud y el bienestar de los niños, así como prevenir,
                        diagnosticar y tratar enfermedades pediátricas de manera efectiva.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Obstetricia</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Obs.png"
                           alt="..."/>
                      <p className="mb-4">En nuestra unidad de obstetricia, comprendemos la importancia de este momento único en la vida de una mujer y
                        nos comprometemos a brindar un cuidado excepcional en un entorno cálido y acogedor. Nuestro objetivo principal es garantizar la
                        salud y el bienestar tanto de la madre como del bebé a lo largo de todo el proceso.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Neonatal</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Neonatal.png" alt="..."/>
                      <p className="mb-4">En nuestra unidad de neonatología, comprendemos las necesidades únicas de los recién nacidos y nos esforzamos por
                        ofrecer un entorno seguro y cálido para su cuidado. Contamos con tecnología de última generación y equipos especializados para brindar
                        atención médica avanzada y monitoreo continuo.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Sala de parto</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Sala.png" alt="..."/>
                      <p className="mb-4">Nuestras salas de parto están diseñadas pensando en su comodidad y seguridad. Cada sala está equipada con
                        tecnología de vanguardia y equipos especializados para brindar atención médica avanzada y monitoreo continuo tanto para la madre
                        como para el bebé. Nuestro objetivo es garantizar una experiencia de parto segura y respetar sus deseos individuales
                        durante este momento especial.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6"
             aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Análisis clínicos</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Analisis.png" alt="..."/>
                      <p className="mb-4">En nuestro hospital, contamos con un laboratorio de análisis clínicos de vanguardia, dedicado a brindar servicios de diagnóstico precisos
                        y confiables. Nuestro equipo de científicos y técnicos altamente capacitados utiliza tecnología de última generación
                        para realizar una amplia gama de pruebas y análisis que respaldan la atención médica integral.</p>
                      <button className="btn btn-primary" data-bs-dismiss="modal">
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Servicios