import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="md:mx-10">
        <form className="grid grid-cols-1 md:w-1/2 mx-auto text-xl md:text-2xl font-thin gap-4 shadow-md p-10 rounded-md">
            <h1 className="text-4xl md:text-5xl text-center mb-10 font-semibold" >Iniciar sesión</h1>
            <label htmlFor="email" >Correo electrónico:</label>
            <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
            <label htmlFor="password" >Contraseña:</label>
            <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
            <button type="submit" children="Enviar" className="bg-slate-700 px-3 py-3 rounded-md text-white font-bold text-xl shadow-md"/>
            <p>¿No tienes una cuenta? <Link to='/sign-in'>¡Registrate!</Link> </p>
        </form>
    </div>
  )
}

export default Login