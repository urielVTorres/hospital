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

      <div className="page-section">
          {msg&& <Alerta mensaje={alerta} />}
          <div className="row justify-content-center mt-5">
              <div className="col-lg-3 col-md-5 col-sm-5">
                  <div className="card shadow">
                      <div className="card-title text-center border-bottom">
                          <h2 className="p-3">Iniciar Sesión</h2>
                      </div>
                      <div className="card-body">
                          <form onSubmit={handleSubmit}>
                              <div className="mb-4">
                                  <label htmlFor="email" className="form-label">Correo electrónico:</label>
                                  <input type="email" className="form-control" id="email" placeholder=" Ej. mi_correo@correo.com"
                                         onChange={
                                             (e)=>{
                                                 const user = usuario;
                                                 user.email = e.target.value;
                                                 setUsuario(user);
                                             }
                                         }
                                  />
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" placeholder="Tu contraseña" className="form-control" id="password"
                                         onChange={
                                             (e)=>{
                                                 const user = usuario;
                                                 user.password = e.target.value;
                                                 setUsuario(user);
                                             }
                                         }
                                  />
                              </div>
                              <div className="d-grid">
                                  <button type="submit" className="btn btn-primary">Enviar</button>
                              </div>
                              <div className="m-4">
                                  <span>¿No tienes una cuenta? <Link to='/sign-in'>¡Registrate!</Link> </span>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Login