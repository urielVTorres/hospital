import {useState, useEffect} from 'react';
import axios from 'axios';
import Alerta from '../../../Components/Alerta';

const ListaDepartamentos =  () => {
    const [departamentos, setDepartamentos] = useState<{ID_Area: any , Area: string }[]>([]);
    const [editar, setEditar] = useState(false);
    const [agregar, setAgregar] = useState(false);
    const [nuevoDepartamento, setNuevoDepartamento] = useState('');
    const [mensaje, setMensaje] = useState({msg: '', error: false});
    const [idEdit, setIdEdit] = useState(-1);
    
    useEffect( () =>{
            const getDepartamentos = async ()=>{
                try {
                    const {data} = await axios.get('//localhost:4000/api/admin/clinica/departamentos')
                    console.log(data);
                    setDepartamentos(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getDepartamentos(); 
    }, []);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) =>{
        setNuevoDepartamento(e.target.value);
    }

    const agregarDepartamento = async () =>{
        try {
            const {data} = await axios.post('//localhost:4000/api/admin/clinica/departamentos',
            { 
                departamento: nuevoDepartamento 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(data);
            const depart = departamentos;
            const nuevaKey = departamentos.length+1
            console.log(nuevaKey);
            depart.push({ID_Area: nuevaKey, Area: nuevoDepartamento});
            setDepartamentos(depart);
            setAgregar(false);
            setNuevoDepartamento('');
            setMensaje(data);
        } catch (error) {
            console.log(error);    
        }
    }
    const eliminarDepartamento = async (e:any) =>{
        try {
            const id = e.target.id;
            const {data} = await axios.delete(`//localhost:4000/api/admin/clinica/departamentos/${id}`);
            console.log(data);
            setMensaje(data);
            const listaFiltrada  = departamentos.filter(departamento => departamento.ID_Area != id );
            setDepartamentos(listaFiltrada);
        } catch (error) {
            console.log(error);
        }
    }
    const editarDepartamento = async () => {
        try {
            const {data} = await axios.put(`//localhost:4000/api/admin/clinica/departamentos/${idEdit}`,
            {   
                departamento: nuevoDepartamento 
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            setMensaje(data);
            const listaEditada = departamentos.map( departamento => {
                if(departamento.ID_Area == idEdit){
                    const departamentoEditado = {
                        ID_Area: departamento.ID_Area,
                        Area: nuevoDepartamento
                    }
                    return departamentoEditado;
                }
                return departamento;
            } )
            setDepartamentos(listaEditada);
            setNuevoDepartamento("");
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
            DEPARTAMENTOS
        </h1>
        <ul className=' font-light text-lg my-5 ml-10 '>
            
            {departamentos.map(departamento => 
                <li 
                    key={departamento.ID_Area} 
                    className='border-2 px-3 py-2'
                >
                    {departamento.ID_Area != idEdit 
                    ? <p className='flex justify-between'>
                        {departamento.Area.toUpperCase()} 
                        <span className={`flex gap-5 font-semibold ${!editar&&'invisible'}`}>
                            <button className='px-2' id={departamento.ID_Area} value={departamento.Area} onClick={ (e:any) => {setIdEdit(e.target.id); setNuevoDepartamento(e.target.value)}} >Editar</button>
                            <button className='px-2' id={departamento.ID_Area} onClick={eliminarDepartamento}>Eliminar</button>
                        </span>
                    </p>
                    : <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del departamento' 
                        className='bg-slate-100 p-2 rounded-sm w-full' value={nuevoDepartamento} 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={editarDepartamento}>Guardar</button>
                        </span>
                    </p>
                    }
                </li>)
            }
            {agregar && <li 
                    className='border-2 px-3 py-2'
                >
                    <p className='flex justify-between'>
                        <input type='text' placeholder='Nombre del departamento' 
                        className='bg-slate-100 p-2 rounded-sm w-full' 
                        onChange={handleChange}
                        /> 
                        <span className='flex gap-5 font-semibold'>
                            <button className='px-2 ml-2' onClick={agregarDepartamento}>Añadir</button>
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

export default ListaDepartamentos