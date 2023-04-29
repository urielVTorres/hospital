import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import Alerta from "../../Components/Alerta.tsx";
const Signin = () => {
    const [info, setInfo] = useState({name:"", last_name_f:"", last_name_m:"", email:"", password:"", confirm_password:""});
    const [mensaje, setMensaje] = useState({msg:"", error:false});
    const [valido, setValido] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e : any ) =>{
        e.preventDefault();
        const {name, last_name_f, email, password, confirm_password} = info;
        if([name, last_name_f, email, password, confirm_password].includes('')){
            setMensaje({msg:"Todos los campos son obligatorios", error: true})
            return;
        }
        if(info.password !== info.confirm_password){
            setMensaje({msg:"Las contraseñas no coinciden.", error: true});
            return;
        }
        setValido(true);
    }
    useEffect(() => {
        if(valido){
            navigate('continue');
        }
    }, [valido])
    
    const {msg} = mensaje;    
    return (
        <div className="md:mx-10">
            { msg && <Alerta mensaje={mensaje} />}
            <form className="grid grid-cols-1 md:w-1/2 mx-auto text-xl md:text-2xl font-thin gap-4 shadow-md p-10 rounded-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-4xl md:text-5xl text-center mb-10 font-semibold" >Registrate</h1>

                <label htmlFor="name" >Nombre(s)*:</label>
                <input id="name" placeholder="Tu nombre" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={(e)=>{
                        const newInfo = info;
                        newInfo.name = e.target.value;
                        setInfo(newInfo);
                        setMensaje({msg:"", error:false});
                        if(info.name.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null){
                            setMensaje({msg:"Nombre inválido", error: true});
                        }
                    }} 
                />

                <label htmlFor="last-name-f" >Apellido Paterno*:</label>
                <input id="last-name-f" placeholder="Tu apellido paterno" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={(e)=>{
                        const newInfo = info;
                        newInfo.last_name_f = e.target.value;
                        setInfo(newInfo);
                        setMensaje({msg:"", error:false});
                        if(info.last_name_f.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null){
                            setMensaje({msg:"Apellido paterno inválido.", error: true});
                        }
                    }} 
                />


                <label htmlFor="last-name-m" >Apellido Materno:</label>
                <input id="last-name-m" placeholder="Tu apellido materno" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={(e)=>{
                        const newInfo = info;
                        newInfo.last_name_m = e.target.value;
                        setInfo(newInfo);
                        setMensaje({msg:"", error:false});
                        if(info.last_name_m.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null && info.last_name_m !== ""){
                            setMensaje({msg:"Apellido materno inválido", error: true});
                        }
                    }}                 
                />


                <label htmlFor="email" >Correo electrónico:</label>
                <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={(e)=>{
                        const newInfo = info;
                        newInfo.email = e.target.value;
                        setInfo(newInfo);
                    }} 
                />


                <label htmlFor="password" >Contraseña:</label>
                <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={(e)=>{
                        setMensaje({msg:"", error:false});
                        const newInfo = info;
                        newInfo.password = e.target.value;
                        setInfo(newInfo);
                        if(info.password.match("^[a-zA-ZñÑ0-9.!#$%&/()=?¡¿*+-]+$")==null && info.password !== ""){
                            setMensaje({msg:"La contraseña es inválida.", error: true});
                        }
                    }} 
                />


                <label htmlFor="confirm-password" >Confirmar contraseña:</label>
                <input id="confirm-password" placeholder="Confirma tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" 
                    onChange={e=>{
                        setMensaje({msg:"", error:false});
                        const newInfo = info;
                        newInfo.confirm_password = e.target.value;
                        setInfo(newInfo);
                    }}
                />

                <input type="submit" value="Registrar" className="bg-slate-700 px-3 py-3 rounded-md text-white font-bold text-xl shadow-md" />
                <p>¿Ya tienes una cuenta? <Link to='/log-in'>¡Inicia sesión!</Link> </p>

            </form>
            
        </div>
    )
}

export default Signin;
