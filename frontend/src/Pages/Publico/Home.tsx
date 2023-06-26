
const Home = () => {
  return (
    <div>
        <header className="masthead bg-primary text-white text-center" id="home">
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0 text-secondary">Vida Sana</h1>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0 text-secondary">Ginecología - Pediatría - Obstétrica</p>
            </div>
        </header>


        <section className="page-section portfolio" id="portfolio">
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
                </div>
            </div>
        </section>


        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Sobre nosotros </h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">En Vida Sana, creemos que todas las mujeres merecen atención médica de alta calidad y
                        personalizada. Desde el momento en que ingresa a nuestra clínica, nuestro personal
                        profesional y amigable se asegurará de que se sienta cómoda y segura. </p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">Trabajamos con cada paciente individualmente para
                        desarrollar un plan de tratamiento personalizado y adaptado a sus necesidades y objetivos de salud.
                        En Vida Sana, estamos comprometidos en brindar la mejor atención médica de la mujer en nuestra comunidad.</p></div>
                </div>

            </div>
        </section>

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
                                        salud y el bienestar tanto de la madre como del bebé a lo largo de el proceso.</p>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png"
                                         alt="..."/>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
                                        inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                        consequuntur itaque. Nam.</p>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked
                                        Safe</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png"
                                         alt="..."/>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
                                        inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                        consequuntur itaque. Nam.</p>
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
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png"
                                         alt="..."/>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
                                        inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                        consequuntur itaque. Nam.</p>
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

    </div>
  )
}

export default Home