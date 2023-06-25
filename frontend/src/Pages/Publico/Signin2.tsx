import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ESTADOS_DE_MEXICO } from "../../Helpers/constantes.tsx";
import Alerta from "../../Components/Alerta.tsx";
import axios from "axios";

const Signin2 = () => {
    const [alerta, setAlerta] = useState({msg: "", error: false});
    const [user, setUser] = useState({            
        name: "", 
        last_name_f: "", 
        last_name_m: "", 
        email: "", 
        password: "", 
        CURP: "",
        FechaNacimiento: "",
        calle: "",
        numero: "",
        colonia: "",
        municipio:"",
        estado:"",
        CP:"",
        celular: "",
        edad:  0
    });
    const navigate = useNavigate();
    useEffect(()=>{
        const {name, last_name_f, last_name_m, email, password} = JSON.parse(localStorage.getItem('user') || "");
        setUser({
            name, 
            last_name_f, 
            last_name_m, 
            email, 
            password, 
            CURP: "",
            FechaNacimiento: "",
            calle: "",
            numero: "",
            colonia: "",
            municipio:"",
            estado:"",
            CP:"",
            celular: "",
            edad: 0,
        });
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { CURP, FechaNacimiento, calle, numero, colonia, municipio, estado, CP, celular } = user;
        if ([CURP, FechaNacimiento, calle, numero, colonia, municipio, estado, CP, celular].includes('')){
            setAlerta({msg: "Todos los campos son obligatorios", error: true});
            setTimeout(()=>{
                setAlerta({msg:"", error:false});
            },3000)
            return;
        }
        //Axios post to create new patient
        const {data} = await axios.post('//localhost:4000/api/admin/user',
        { 
            email: user.email,
            password: user.password,
            tipo_usuario: 1 
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        console.log(data);
        const respuesta = await axios.post('//localhost:4000/api/paciente',
        { 
            nombre: user.name, 
            paterno: user.last_name_f, 
            materno: user.last_name_m, 
            correo: user.email,
            CURP: user.CURP,
            fechaNac: user.FechaNacimiento,
            calle: user.calle,
            numero: user.numero,
            colonia: user.colonia,
            municipio: user.municipio,
            estado: user.estado,
            CP: user.CP,
            telefono: user.celular,
            edad: user.edad
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
              }
        })

        console.log(respuesta);
        navigate('/')
    }
    const {msg} = alerta;
    return (
        
        <div className="md:mx-10" >
            {msg && <Alerta mensaje={alerta} />}
            <form className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-5 rounded-sm  border-2" onSubmit={handleSubmit}>
                <h2 className="text-2xl md:text-3xl text-center my-8 font-semibold">Para continuar con tu registro, por favor ingresa los siguientes datos.</h2>
                <label htmlFor="curp" >CURP:</label>
                <input id="curp" placeholder="ABCD123456HMCRRR00" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.CURP = e.target.value;
                        setUser(actualizado);
                    }}
                />


                <label htmlFor="fecha" >Fecha de nacimiento*:</label>
                <input id="fecha" type="date" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.FechaNacimiento = e.target.value;
                        const nacim = new Date(actualizado.FechaNacimiento);
                        const hoy = new Date();
                        let edad = hoy.getFullYear() - nacim.getFullYear();
                        const m = hoy.getMonth() - nacim.getMonth();
                        
                        if (m < 0 || (m === 0 && hoy.getDate() < nacim.getDate())) {
                            edad--;
                        }
                        actualizado.edad = edad;
                        setUser(actualizado);
                    }}                
                />



                <label htmlFor="calle" >Calle*:</label>
                <input id="calle" placeholder="Tu calle" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.calle = e.target.value;
                        setUser(actualizado);
                    }} 
                />

                <label htmlFor="numero" >Número*:</label>
                <input id="numero" placeholder="Numero de tu lote" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.numero = e.target.value;
                        setUser(actualizado);
                    }} 
                />


                <label htmlFor="colonia" >Colonia:</label>
                <input id="colonia" placeholder="Tu colonia" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                onChange={(e)=>{
                    const actualizado = user;
                    actualizado.colonia = e.target.value;
                    setUser(actualizado);
                }} 
                />


                <label htmlFor="municipio" >Municipio o delegación:</label>
                <input id="municipio" placeholder="Tu municipio o delegación" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.municipio = e.target.value;
                        setUser(actualizado);
                    }} 
                />


                <label htmlFor="estado" >Estado:</label>
                <select id="estado" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" onChange={(e)=>{
                        const actualizado = user;
                        actualizado.estado = e.target.value;
                        setUser(actualizado);
                    }} >
                    {ESTADOS_DE_MEXICO.map((estado, index) => <option value={estado} key={index}>{estado}</option>)}
                </select>


                <label htmlFor="cp" >Código Postal:</label>
                <input id="cp" placeholder="12345" type="name" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.CP = e.target.value;
                        setUser(actualizado);
                    }} 
                />


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

export default Signin2