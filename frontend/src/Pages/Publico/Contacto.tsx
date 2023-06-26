const Contacto = () => {
  return (
      <div className="text-justify md:mx-16 text-xl px-20 pb-20 shadow-md rounded-md" >

          <div className="masthead bg-primary text-white text-center" id="contacto">
              <div className="container d-flex align-items-center flex-column subtitulo-parallax">
                  <h1 className="masthead-heading text-uppercase mb-0">Contactanos</h1>
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  <div className="row">
                  <div className="col-lg-4 ms-auto"><p className="lead">Estamos aquí para atender tus necesidades de atención médica. Si tienes alguna pregunta,
                      inquietud o deseas programar una cita, no dudes en contactarnos. Nuestro amable equipo de atención al cliente está disponible para
                      ayudarte de lunes a viernes, de 8:00 a.m. a 6:00 p.m.</p>
                  </div>
                  <div className="col-lg-4 me-auto"><p className="lead">Puedes comunicarte con nosotros por teléfono al 55 7987 3603
                      o enviarnos un correo electrónico a vidasana@gmail.com.  Tu salud y bienestar son nuestra prioridad,
                      y estamos aquí para acompañarte en tu camino hacia una vida saludable.</p>
                  </div>
                  </div>
              </div>
          </div>
      </div>
          )

}

export default Contacto