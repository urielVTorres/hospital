import {useState, useEffect} from 'react'
import axios from 'axios';
import Alerta from '../../../Components/Alerta';
const AgregarEspecialidad = () => {
    const [especialidades, setEspecialidades] = useState<{ID_Especialidad: any , NombreEspecialidad: string }[]>([]);
    const [editar, setEditar] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [nuevaEspecialidad, setNuevaEspecialidad] = useState('');
    const [mensaje, setMensaje] = useState({msg: '', error: false});
    const [idEdit, setIdEdit] = useState(-1);
    
    useEffect( () =>{
            const getEspecialidades = async ()=>{
                try {
                    const {data} = await axios.get('//localhost:4000/api/admin/clinica/especialidades')
                    console.log(data);
                    setEspecialidades(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getEspecialidades(); 
    }, []);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) =>{
        setNuevaEspecialidad(e.target.value);
    }

    const agregarEspecialidad = async () =>{
        try {
            const {data} = await axios.post('//localhost:4000/api/admin/clinica/especialidades',
            { 
                especialidad: nuevaEspecialidad 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(data);
            const especial = especialidades;
            const nuevaKey = especialidades.length+1;
            especial.push({ID_Especialidad: nuevaKey, NombreEspecialidad: nuevaEspecialidad});
            setEspecialidades(especial);
            setAgregar(false);
            setNuevaEspecialidad('');
            setMensaje(data);
        } catch (error) {
            console.log(error);    
        }
    }
    const eliminarEspecialidad = async (e:any) =>{
        try {
            const id = e.target.id;
            const {data} = await axios.delete(`//localhost:4000/api/admin/clinica/especialidades/${id}`);
            console.log(data);
            setMensaje(data);
            const listaFiltrada  = especialidades.filter(especialidad => especialidad.ID_Especialidad != id );
            setEspecialidades(listaFiltrada);
        } catch (error) {
            console.log(error);
        }
    }
    const editarEspecialidad = async () => {
        try {
            const {data} = await axios.put(`//localhost:4000/api/admin/clinica/especialidades/${idEdit}`,
            {   
                especialidad: nuevaEspecialidad 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            setMensaje(data);
            const listaEditada = especialidades.map( especialidad => {
                if(especialidad.ID_Especialidad == idEdit){
                    const especialidadEditado = {
                        ID_Especialidad: especialidad.ID_Especialidad,
                        NombreEspecialidad: nuevaEspecialidad
                    }
                    return especialidadEditado;
                }
                return especialidad;
            } )
            setEspecialidades(listaEditada);
            setNuevaEspecialidad("");
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
            ESPECIALIDADES
        </h1>
        <ul className=' font-light text-lg my-5 ml-10 '>
            
            {especialidades.map(especialidad => 
                <li 
                    key={especialidad.ID_Especialidad} 
                    className='border-2 px-3 py-2'
                >
                    {especialidad.ID_Especialidad != idEdit 
                    ? <p className='flex justify-between'>
                        {especialidad?.NombreEspecialidad?.toUpperCase()} 
                        <span className={`flex gap-5 font-semibold ${!editar&&'invisible'}`}>
                            <button className='px-2' id={especialidad.ID_Especialidad} value={especialidad.NombreEspecialidad} onClick={ (e:any) => {setIdEdit(e.target.id); setNuevaEspecialidad(e.target.value)}} >Editar</button>
                            <button className='px-2' id={especialidad.ID_Especialidad} onClick={eliminarEspecialidad}>Eliminar</button>
                        </span>
                    </p>
                    : <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del especialidad' 
                        className='bg-slate-100 p-2 rounded-sm w-full' value={nuevaEspecialidad} 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={editarEspecialidad}>Guardar</button>
                        </span>
                    </p>
                    }
                </li>)
            }   
            {agregar && <li 
                    className='border-2 px-3 py-2'
                >
                    <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del especialidad' 
                        className='bg-slate-100 p-2 rounded-sm w-full' 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={agregarEspecialidad}>Añadir</button>
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

export default AgregarEspecialidad