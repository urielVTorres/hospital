const Contacto = () => {
  return (
    <div className="p-10 text-2xl md:w-2/3 w-4/5 m-auto rounded-md border-2 font-thin">
        <h1 className="font-semibold text-3xl text-center mt-5 mb-10" >Contactanos:</h1>
        <p>
            Si tienes alguna queja o preguna acerca de nuestros servicios, puedes comunicarte con nosotros.
        </p>
        <div className="p-10 font-normal">
            <h2>Teléfono: <span className="font-thin">55 7987 3603</span></h2>
            <h2>Correo electrónico: <span className="font-thin">m.urielv.torres@gmail.com</span></h2>
        </div>
    </div>
  )
}

export default Contacto