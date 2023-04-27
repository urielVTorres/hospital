import { Link } from "react-router-dom";
import { ESTADOS_DE_MEXICO } from "../../Helpers/constantes.tsx";
const Signin = () => {
  return (
    <div className="md:mx-10">
    <form className="grid grid-cols-1 md:w-1/2 mx-auto text-xl md:text-2xl font-thin gap-4 shadow-md p-10 rounded-md">
        <h1 className="text-4xl md:text-5xl text-center mb-10 font-semibold" >Registrate</h1>

        
        <label htmlFor="name" >Nombre(s):</label>
        <input id="name" placeholder="Tu nombre" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="last-name-f" >Apellido Paterno:</label>
        <input id="name" placeholder="Tu apellido paterno" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="last-name-m" >Apellido Materno:</label>
        <input id="last-name-m" placeholder="Tu nombre" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="fecha" >Fecha de nacimiento:</label>
        <input id="fecha" type="date" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="curp" >CURP:</label>
        <input id="curp" placeholder="ABCD123456HMCRRR00" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="calle" >Calle y número:</label>
        <input id="calle" placeholder="Tu calle y numero" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="colonia" >Colonia:</label>
        <input id="colonia" placeholder="Tu colonia" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="municipio" >Municipio:</label>
        <input id="municipio" placeholder="Tu municipio" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="estado" >Estado:</label>
        <select id="estado" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5">
            {ESTADOS_DE_MEXICO.map((estado, index) => <option value={estado} key={index}>{estado}</option> )}
        </select>
        
        
        <label htmlFor="cp" >Código Postal:</label>
        <input id="cp" placeholder="12345" type="name" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="telefono" >Celular:</label>
        <input id="telefono" placeholder="5579873432" type="tel" pattern="[0-9]{10}" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="email" >Correo electrónico:</label>
        <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="password" >Contraseña:</label>
        <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        <label htmlFor="confirm-password" >Confirmar contraseña:</label>
        <input id="confirm-password" placeholder="Confirma tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5"/>
        
        
        
        <button type="submit" children="Enviar" className="bg-slate-700 px-3 py-3 rounded-md text-white font-bold text-xl shadow-md"/>
        <p>¿Ya tienes una cuenta? <Link to='/log-in'>¡Inicia sesión!</Link> </p>
    </form>
</div>
  )
}

export default Signin;
