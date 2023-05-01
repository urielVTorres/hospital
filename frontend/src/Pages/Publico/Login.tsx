import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
        <form className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-5 rounded-sm  border-2">
            <h1 className="text-2xl md:text-3xl text-center my-8 font-semibold" >Iniciar sesión</h1>
            <label htmlFor="email" >Correo electrónico:</label>
            <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2"/>
            <label htmlFor="password" >Contraseña:</label>
            <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-3"/>
            <button type="submit" children="Enviar" className="bg-slate-700 px-3 py-2 rounded-md text-white font-bold text-xl shadow-md mb-2"/>
            <p>¿No tienes una cuenta? <Link to='/sign-in'>¡Registrate!</Link> </p>
        </form>
    </div>
  )
}

export default Login