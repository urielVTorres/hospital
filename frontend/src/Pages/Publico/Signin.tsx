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
        localStorage.setItem('user', JSON.stringify(info));
    }
    useEffect(() => {
        if(valido){
            navigate('continue');
        }
    }, [valido])

    
    const {msg} = mensaje;    
    return (


        <div className="page-section">
            { msg && <Alerta mensaje={mensaje} />}
            <div className="row justify-content-center mt-5">
                <div className="col-lg-3 col-md-5 col-sm-5">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom">
                            <h2 className="p-3">Regístrate</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Nombre(s)*:</label>
                                    <input id="name" placeholder="Tu nombre" type="text" className="form-control"
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
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="last-name-f" className="form-label">Apellido Paterno*:</label>
                                    <input id="last-name-f" placeholder="Tu apellido paterno" type="text" className="form-control"
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
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="last-name-m" className="form-label">Apellido Materno:</label>
                                    <input id="last-name-m" placeholder="Tu apellido materno" type="text" className="form-control"
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
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                                    <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="form-control"
                                           onChange={(e)=>{
                                               const newInfo = info;
                                               newInfo.email = e.target.value;
                                               setInfo(newInfo);
                                           }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Contraseña:</label>
                                    <input id="password" placeholder="Tu contraseña" type="password" className="form-control"
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
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirm-password" className="form-label">Confirmar contraseña:</label>
                                    <input id="confirm-password" placeholder="Confirma tu contraseña" type="password" className="form-control"
                                           onChange={e=>{
                                               setMensaje({msg:"", error:false});
                                               const newInfo = info;
                                               newInfo.confirm_password = e.target.value;
                                               setInfo(newInfo);
                                           }}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Registrar</button>
                                </div>
                                <div className="m-4">
                                    <span>¿Ya tienes una cuenta? <Link to='/log-in'>¡Inicia sesión!</Link> </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
