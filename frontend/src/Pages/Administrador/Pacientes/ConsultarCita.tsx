import {useState, useEffect} from 'react';
import axios from 'axios';

interface ICita {
    ID_Cita: number,
    Fecha_Cita: string,
    nombrePaciente: string,
    CorreoP: string,
    nombreDoctor: string,
    CorreoD: string,
    ID_Consultorio: string
}

const ConsultarCita = () => {
    const [Citas, setCitas] = useState<ICita[]>([]);
    
    useEffect(()=>{
        const obtenerCitas = async () => {
            const {data} = await axios.get('//localhost:4000/api/admin/clinica/citas')
            setCitas(data);
        }
        obtenerCitas();
    }, [])
    return (
        <div className="flex justify-center">
            <div className="justify-center">
                <div className="p-2 border-2 bg-pink-500 border-pink-500 text-white font-semibold grid grid-cols-7 gap-4"
                >
                    <span>Fecha</span>
                    <span>Paciente</span>
                    <span>Correo Paciente</span>
                    <span>Doctor</span>
                    <span>Correo Doctor</span>
                    <span>Consultorio</span>
                </div>
                {Citas.map( (cita:ICita) => (
                    <div key={cita.ID_Cita} 
                        className="p-2 border-2 border-pink-300 grid grid-cols-7 items-center gap-4"
                    >
                        <span >{cita.Fecha_Cita.substring(0,10)}</span>
                        <span>{cita.nombrePaciente }</span>
                        <span>{cita.CorreoP}</span>
                        <span>{cita.nombreDoctor}</span>
                        <span>{cita.CorreoD}</span>
                        <span>{cita.ID_Consultorio}</span>
                        <button className="text-pink-400 rounded-md font-semibold text-center w-fit px-4 py-1 m-auto">Cancelar</button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default ConsultarCita