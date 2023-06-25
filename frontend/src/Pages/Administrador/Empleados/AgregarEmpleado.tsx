import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Alerta from '../../../Components/Alerta';
import axios from 'axios';
import { ESTADOS_DE_MEXICO } from '../../../Helpers/constantes';
const AgregarEmpleado = () => {
    const [mensaje, setMensaje] = useState({msg:"", error:false});
    
    const [user, setUser] = useState({            
        name: "", 
        last_name_f: "", 
        last_name_m: "", 
        email: "", 
        password: "", 
        confirm_password: "",
        CURP: "",
        cedula: "",
        edad:  0,
        celular: "",
        turno: "",
        especialidad: "",
        usuario: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e : any ) =>{
        e.preventDefault();
        const {name, last_name_f, email, password, confirm_password} = user;
        if([name, last_name_f, email, password, confirm_password].includes('')){
            setMensaje({msg:"Todos los campos son obligatorios", error: true})
            return;
        }
        if(user.password !== user.confirm_password){
            setMensaje({msg:"Las contraseñas no coinciden.", error: true});
            return;
        }
        const { CURP, celular } = user;
        if ([CURP, celular].includes('')){
            setMensaje({msg: "Todos los campos son obligatorios", error: true});
            setTimeout(()=>{
                setMensaje({msg:"", error:false});
            },3000)
            return;
        }
        //Axios post to create new patient
        const {data} = await axios.post('//localhost:4000/api/admin/user',
        { 
            email: user.email,
            password: user.password,
            tipo_usuario: 2 
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        console.log(data);
        const respuesta = await axios.post('//localhost:4000/api/empleado',
        { 
            nombre: user.name, 
            paterno: user.last_name_f, 
            materno: user.last_name_m, 
            correo: user.email,
            CURP: user.CURP,
            cedula: user.cedula,
            telefono: user.celular,
            edad: user.edad,
            turno:user.turno,
            especialidad: user.especialidad,
            usuario: user.usuario
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
              }
        })

        console.log(respuesta);
        navigate('/')
    }
    
    const {msg} = mensaje;   
  return (
    <div className="md:mx-10">
    { msg && <Alerta mensaje={mensaje} />}
    <form className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-5 rounded-sm  border-2"
        onSubmit={handleSubmit}
    >
        <h1 className="text-2xl md:text-3xl text-center my-8 font-semibold" >Registra al Doctor</h1>

        <label htmlFor="name" >Nombre(s)*:</label>
        <input id="name" placeholder="Tu nombre" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={(e)=>{
                const newUser = user;
                newUser.name = e.target.value;
                setUser(newUser);
                setMensaje({msg:"", error:false});
                if(user.name.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null){
                    setMensaje({msg:"Nombre inválido", error: true});
                }
            }} 
        />

        <label htmlFor="last-name-f" >Apellido Paterno*:</label>
        <input id="last-name-f" placeholder="Tu apellido paterno" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={(e)=>{
                const newUser = user;
                newUser.last_name_f = e.target.value;
                setUser(newUser);
                setMensaje({msg:"", error:false});
                if(user.last_name_f.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null){
                    setMensaje({msg:"Apellido paterno inválido.", error: true});
                }
            }} 
        />


        <label htmlFor="last-name-m" >Apellido Materno:</label>
        <input id="last-name-m" placeholder="Tu apellido materno" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={(e)=>{
                const newUser = user;
                newUser.last_name_m = e.target.value;
                setUser(newUser);
                setMensaje({msg:"", error:false});
                if(user.last_name_m.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]+$")==null && user.last_name_m !== ""){
                    setMensaje({msg:"Apellido materno inválido", error: true});
                }
            }}                 
        />


        <label htmlFor="email" >Correo electrónico:</label>
        <input id="email" placeholder=" Ej. mi_correo@correo.com" type="email" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={(e)=>{
                const newUser = user;
                newUser.email = e.target.value;
                setUser(newUser);
            }} 
        />


        <label htmlFor="password" >Contraseña:</label>
        <input id="password" placeholder="Tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={(e)=>{
                setMensaje({msg:"", error:false});
                const newUser = user;
                newUser.password = e.target.value;
                setUser(newUser);
                if(user.password.match("^[a-zA-ZñÑ0-9.!#$%&/()=?¡¿*+-]+$")==null && user.password !== ""){
                    setMensaje({msg:"La contraseña es inválida.", error: true});
                }
            }} 
        />


        <label htmlFor="confirm-password" >Confirmar contraseña:</label>
        <input id="confirm-password" placeholder="Confirma tu contraseña" type="password" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
            onChange={e=>{
                setMensaje({msg:"", error:false});
                const newUser = user;
                newUser.confirm_password = e.target.value;
                setUser(newUser);
            }}
        />

        <h2 className="text-2xl md:text-3xl text-center my-8 font-semibold">Para continuar con tu registro, por favor ingresa los siguientes datos.</h2>
                <label htmlFor="curp" >CURP:</label>
                <input id="curp" placeholder="ABCD123456HMCRRR00" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.CURP = e.target.value;
                        setUser(actualizado);
                    }}
                />

                <label htmlFor="cedula" >Cedula*:</label>
                <input id="cedula" placeholder="Tu cedula" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.cedula = e.target.value;
                        setUser(actualizado);
                    }} 
                />

                <label htmlFor="turno" >Turno:</label>
                <select id="turno" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" onChange={(e)=>{
                        const actualizado = user;
                        actualizado.turno = e.target.value;
                        setUser(actualizado);
                    }} >
                    {ESTADOS_DE_MEXICO.map((estado, index) => <option value={estado} key={index}>{estado}</option>)}
                </select>

                <label htmlFor="especialidad" >Especialidad:</label>
                <select id="especialidad" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" onChange={(e)=>{
                        const actualizado = user;
                        actualizado.especialidad = e.target.value;
                        setUser(actualizado);
                    }} >
                    {ESTADOS_DE_MEXICO.map((estado, index) => <option value={estado} key={index}>{estado}</option>)}
                </select>


                <label htmlFor="telefono" >Celular:</label>
                <input id="telefono" placeholder="5579873432" type="tel" pattern="[0-9]{10}" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.celular = e.target.value;
                        setUser(actualizado);
                    }} 
                />

                <input type="submit" value="Continuar" className="bg-slate-700 px-3 py-2 rounded-md text-white font-bold text-xl shadow-md mb-2"/>
    </form>
</div>

  )
}

export default AgregarEmpleado