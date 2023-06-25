import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"
import Alerta from "../../Components/Alerta"
const Login = () => {
    const [usuario, setUsuario] = useState({email: '', password:''});
    const [alerta, setAlerta] = useState({msg:'', error:false})
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem('usuario');
    }, [])
    const handleSubmit = async (e: any)=>{
        e.preventDefault();
        const {data} = await axios.post('//localhost:4000/api/admin/login', { 
            email: usuario.email,
            password: usuario.password
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
              }
        });
        try {
            setAlerta({msg:data.msg, error: data.error});
            setTimeout(()=>{
                setAlerta({msg:'', error:false});
            }, 3000);
        } catch (error) {
            console.log(error);
        }   
        setAlerta({msg:"Datos Confirmados", error: false});
        setTimeout(()=>{
            setAlerta({msg:'', error:false});
        }, 3000);
        localStorage.setItem('usuario', JSON.stringify(data));
        switch(data.ID_Tipo_Usuario){
            case 1:
                navigate('/paciente');
                break;
            case 2:
                navigate('/medico');
                break;
            case 3:
                navigate('/medico');
                break;
            case 4:
                navigate('/admin');
                break;
        }
        console.log(data);
    }

        
    const {msg} = alerta;
  return (
    <div>
        {msg&& <Alerta mensaje={alerta} />}
        <form 
            className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-5 rounded-sm  border-2"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl md:text-3xl text-center my-8 font-semibold" >Iniciar sesión</h1>
            <label htmlFor="email" >Correo electrónico:</label>
            <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2"
                onChange={
                    (e)=>{
                        const user = usuario;
                        user.email = e.target.value;
                        setUsuario(user);
                    }
                }
            />
            <label htmlFor="password" >Contraseña:</label>
            <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-3"
                onChange={
                    (e)=>{
                        const user = usuario;
                        user.password = e.target.value;
                        setUsuario(user);
                    }
                }            
            />
            <button type="submit" children="Enviar" className="bg-slate-700 px-3 py-2 rounded-md text-white font-bold text-xl shadow-md mb-2"/>
            <p>¿No tienes una cuenta? <Link to='/sign-in'>¡Registrate!</Link> </p>
        </form>
    </div>
  )
}

export default Login