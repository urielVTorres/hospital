import { useEffect, useState } from "react";
import { ESTADOS_DE_MEXICO } from "../../Helpers/constantes.tsx";
import axios from "axios";

const Signin2 = () => {
    const [user, setUser] = useState({            
        name: "", 
        last_name_f: "", 
        last_name_m: "", 
        email: "", 
        password: "", 
        CURP: "",
        FechaNacimiento: "",
        calleYNumero: "",
        colonia: "",
        municipio:"",
        estado:"",
        CP:"",
        celular: ""});
    
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
            calleYNumero: "",
            colonia: "",
            municipio:"",
            estado:"",
            CP:"",
            celular: ""
        });
    }, []);

    const handleSubmit = ()=>{
        //Axios post to create new patient
    }
    return (
        <div className="md:mx-10" >
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
                        setUser(actualizado);
                    }}                
                />


                <label htmlFor="calle" >Calle y número:</label>
                <input id="calle" placeholder="Tu calle y numero" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" 
                    onChange={(e)=>{
                        const actualizado = user;
                        actualizado.calleYNumero = e.target.value;
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