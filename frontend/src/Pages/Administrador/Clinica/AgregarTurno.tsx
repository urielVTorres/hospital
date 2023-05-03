import { FormEvent, useState } from "react";
import Alerta from "../../../Components/Alerta";

const AgregarTurno = () => {

    const [turno, setTurno] = useState<string>("");
    const [mensaje, setMensaje] = useState({msg:"", error:false});

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> )=>{
        setTurno(e.target.value);
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            //Hacer un POST request al backend con axios.
            
            console.log(turno);
            setMensaje({msg:"Turno agregado correctamente", error: false});
            setTimeout(()=>{
                setMensaje({msg: "", error:false});
            }, 3000);
        } catch (error) {
            console.log(error);
            setMensaje({msg:"Hubo un error al agregar el turno", error: true});
            setTimeout(()=>{
                setMensaje({msg: "", error:false});
            }, 3000);
        }

    }
    const {msg} = mensaje;
    return (
        <div>
            {msg && <Alerta mensaje={mensaje} /> }
            <form className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-12 rounded-sm  border-2" onSubmit={ handleSubmit }>
                <h1 className="text-2xl md:text-3xl text-center font-semibold mb-8">Agrega un nuevo turno de trabajo.</h1>
                <label htmlFor="turno">Tipo de jornada laboral u horario</label>
                <input id="turno" type="text" placeholder='Tipo de jornada' className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2" onChange={ handleChange }/>
                <button type="submit" children="Agregar" className="bg-slate-700 px-3 py-2 rounded-md text-white font-bold text-xl shadow-md" />
            </form>
        </div>
    )
}

export default AgregarTurno