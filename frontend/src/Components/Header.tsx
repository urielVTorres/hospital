import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:justify-between gap-3 font-light bg-slate-200 text-md items-center px-5 md:px-10 py-2 rounded-sm shadow-md mb-5">
        <div className="text-3xl text-center md:text-left">Clínica de la mujer Vida Sana</div>
        <div className="flex gap-5 overflow-auto px-2">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/log-in">Iniciar sesión</Link>
            <Link to="/sign-in">Registrate</Link>
        </div>
    </div>
  )
}

export default Header