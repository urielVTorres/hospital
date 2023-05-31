import { useState, useEffect } from "react";
import Alerta from "../../../Components/Alerta";
import axios from "axios";

const AgregarTurno = () => {
    const [turnos, setListaTurnos] = useState<{ID_Turno: any , Turno: string }[]>([]);
    const [editar, setEditar] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [nuevoTurno, setNuevoTurno] = useState('');
    const [mensaje, setMensaje] = useState({msg: '', error: false});
    const [idEdit, setIdEdit] = useState(-1);
    
    useEffect( () =>{
            const getTurnos = async ()=>{
                try {
                    const {data} = await axios.get('//192.168.100.20:4000/api/admin/clinica/turnos')
                    console.log(data);
                    setListaTurnos(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getTurnos(); 
    }, []);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) =>{
        setNuevoTurno(e.target.value);
    }

    const agregarTurno = async () =>{
        try {
            const {data} = await axios.post('//192.168.100.20:4000/api/admin/clinica/turnos',
            { 
                turno: nuevoTurno 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(data);
            const turn = turnos;
            const nuevaKey = turnos.length+1
            console.log(nuevaKey);
            turn.push({ID_Turno: nuevaKey, Turno: nuevoTurno});
            setListaTurnos(turn);
            setAgregar(false);
            setNuevoTurno('');
            setMensaje(data);
        } catch (error) {
            console.log(error);    
        }
    }
    const eliminarTurno = async (e:any) =>{
        try {
            const id = e.target.id;
            const {data} = await axios.delete(`//192.168.100.20:4000/api/admin/clinica/turnos/${id}`);
            console.log(data);
            setMensaje(data);
            const listaFiltrada  = turnos.filter(turno => turno.ID_Turno != id );
            setListaTurnos(listaFiltrada);
        } catch (error) {
            console.log(error);
        }
    }
    const editarTurno = async () => {
        try {
            const {data} = await axios.put(`//192.168.100.20:4000/api/admin/clinica/turnos/${idEdit}`,
            {   
                turno: nuevoTurno 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            setMensaje(data);
            const listaEditada = turnos.map( turno => {
                if(turno.ID_Turno == idEdit){
                    const turnoEditado = {
                        ID_Turno: turno.ID_Turno,
                        Turno: nuevoTurno
                    }
                    return turnoEditado;
                }
                return turno;
            } )
            setListaTurnos(listaEditada);
            setNuevoTurno("");
            setIdEdit(-1);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        if(mensaje.msg != ''){
            setTimeout(()=>{
                setMensaje({msg:'', error: false});
            }, 3000);
        }
    }, [mensaje]);

    const {msg} = mensaje
  return (
    <div className='px-8 pt-10 pb-5 border-2 rounded-md mx-auto md: w-1/2'>
        {msg&&<Alerta mensaje={mensaje}/>}
        <h1 className='text-xl font-black' >
            TURNOS
        </h1>
        <ul className=' font-light text-lg my-5 ml-10 '>
            
            {turnos.map(turno => 
                <li 
                    key={turno.ID_Turno} 
                    className='border-2 px-3 py-2'
                >
                    {turno.ID_Turno != idEdit 
                    ? <p className='flex justify-between'>
                        {turno.Turno.toUpperCase()} 
                        <span className={`flex gap-5 font-semibold ${!editar&&'invisible'}`}>
                            <button className='px-2' id={turno.ID_Turno} value={turno.Turno} onClick={ (e:any) => {setIdEdit(e.target.id); setNuevoTurno(e.target.value)}} >Editar</button>
                            <button className='px-2' id={turno.ID_Turno} onClick={eliminarTurno}>Eliminar</button>
                        </span>
                    </p>
                    : <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del turno' 
                        className='bg-slate-100 p-2 rounded-sm w-full' value={nuevoTurno} 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={editarTurno}>Guardar</button>
                        </span>
                    </p>
                    }
                </li>)
            }   
            {agregar && <li 
                    className='border-2 px-3 py-2'
                >
                    <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del turno' 
                        className='bg-slate-100 p-2 rounded-sm w-full' 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={agregarTurno}>Añadir</button>
                        </span>
                    </p> 
                </li>
            }
        </ul>
        <div className='flex md:justify-end gap-3'>
            <button className='px-5 py-3 font-bold text-lg text-cyan-600 shadow-sm border-2 border-cyan-600'
                onClick={()=>{setEditar(!editar); setIdEdit(-1)}}
            >
                {editar ? 'Listo' : 'Editar'}
            </button>
            <button className='px-5 py-3 font-bold text-lg text-green-500 shadow-sm border-2 border-green-600'
                onClick={()=>{setAgregar(!agregar)}}
            >
                {agregar ? 'Cancelar' : 'Nuevo'}
            </button>
        </div>
    </div>
  )
}

export default AgregarTurno