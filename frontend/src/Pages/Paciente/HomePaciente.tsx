import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const HomePaciente = () => {
    const [usuario] = useState(JSON.parse(localStorage.getItem('usuario'))|| {ID_Tipo_Usuario: 0, NombrePaciente:'', correo: '', Id_Usuario: 0});
    const navigate = useNavigate();
    useEffect(()=>{
        switch(usuario.ID_Tipo_Usuario){
            case 0:
                navigate('/log-in');
                break;
            case 2:
                navigate('/medico')
                break;
            case 3:
                navigate('/medico')
                break;
            case 4:
                navigate('/admin')
                break;
        }
    }, []);
    return (
    <div>
        <h1 className="text-3xl">
            Hola, <span className="font-bold" > {usuario.NombrePaciente}</span>
        </h1>
        <button
            className="absolute bottom-5 right-7 bg-slate-200 p-3 text-xl"
            onClick={()=>{
                navigate('/log-in');
            }}
        >Cerrar Sesión</button>
    </div>
  )
}

export default HomePaciente