import axios from "axios"
import { useState, useEffect } from "react"
interface IPaciente {
    Ap_MaternoP: string,
    Ap_PaternoP: string,
    CP: string | null,
    CURP: string,
    Calle: string,
    Colonia: string,
    CorreoP: string,
    Edad: string,
    Estado: string | null,
    FechaNac: string,
    ID_Paciente: string,
    Id_Usuario_Paciente: number,
    Municipio: string | null,
    NombreP: string,
    Numero: string,
    TelefonoP: string
}
const ListaPacientes = () => {
    const [pacientes, setPacientes] = useState<IPaciente[]>([]);
    
    useEffect(()=>{
        const obtenerPacientes = async () => {
            const {data} = await axios.get('//192.168.100.20:4000/api/admin/paciente')
            setPacientes(data);
        }
        obtenerPacientes();
    }, [])
    return (
        <div className="text-lg flex justify-center">
            <div className="text-lg w-2/3 justify-center">
                <div className="p-2 border-2 bg-pink-500 border-pink-500 text-white font-semibold grid grid-cols-4 text-center"
                >
                    <span className="col-span-2" >Nombre </span>
                    <span>CURP</span>
                    
                    </div>
                {pacientes.map( (paciente:IPaciente) => (
                    <div key={paciente.ID_Paciente} 
                        className="p-2 border-2 border-pink-300 grid grid-cols-4 items-center"
                    >
                        <span className="col-span-2">{paciente.Ap_PaternoP } {paciente.Ap_MaternoP} {paciente.NombreP}</span>
                        <span className="font-mono">{paciente.CURP}</span>
                        <button className="text-pink-400 rounded-md font-semibold text-center w-fit px-4 py-1 m-auto">Expediente</button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default ListaPacientes