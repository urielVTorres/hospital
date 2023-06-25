import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
const HomeAdmin = () => {
    const [usuario] = useState(JSON.parse(localStorage.getItem('usuario')) || {ID_Tipo_Usuario: 0});
    const navigate = useNavigate();
    useEffect(() => {
        switch (usuario.ID_Tipo_Usuario) {
            case 0:
                navigate('/log-in');
                break
            case 1:
                navigate('/paciente')
                break;
            case 2:
                navigate('/medico')
                break;
            case 3:
                navigate('/medico')
                break;
        }
    }, []);
    return (
        <div className="text-lg font-thin md:flex " >

            {/* Acceso a métodos de los empleados */}
            <div className="border-2 rounded-sm  p-10 md:w-96 w-11/12 mx-auto md:mx-5 mb-5 shadow-md">
                <h2 className="text-2xl">Empleados</h2>
                <div className="grid grid-cols-1 p-5" >
                    <ul>
                        <li>
                            <Link to='agregar-empleado' children="Agregar empleado" />
                        </li>
                        <li>
                            <Link to='buscar-empleado' children="Buscar a un empleado" />
                        </li>
                        <li>
                            <Link to='lista-empleados' children="Lista de empleados" />
                        </li>
                    </ul>
                </div>
            </div>


            {/* Acceso a métodos del hospital */}
            <div className="border-2 rounded-sm  p-10 md:w-96 w-11/12 mx-auto md:mx-5 mb-5 shadow-md">
                <h2 className="text-2xl">Hospital</h2>
                <div className="grid grid-cols-1 p-5" >
                    <ul>
                        <li>
                            <Link to='especialidades' children="Especialidades" />
                        </li>
                        <li>
                            <Link to='consultorios' children="Consultorios" />
                        </li>
                        <li>
                            <Link to='departamentos' children="Departamentos" />
                        </li>
                        <li>
                            <Link to='turnos' children="Turnos laborales" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Acceso  a métodos de los pacientes */}
            <div className="border-2 rounded-sm  p-10 md:w-96 w-11/12 mx-auto md:mx-5 mb-5 shadow-md">
                <h2 className="text-2xl">Pacientes</h2>
                <div className="grid grid-cols-1 p-5" >
                    <ul>
                        <li>
                            <Link to='agendar-cita' children="Agendar una cita" />
                        </li>
                        <li>
                            <Link to='agregar-paciente' children="Agregar paciente" />
                        </li>
                        <li>
                            <Link to='buscar-paciente' children="Buscar a un paciente" />
                        </li>
                        <li>
                            <Link to='consultar-cita' children="Consultar cita" />
                        </li>
                        <li>
                            <Link to='lista-pacientes' children="Lista de paciente" />
                        </li>
                    </ul>
                </div>
            </div>
            <button
                className="absolute bottom-5 right-7 bg-slate-200 p-3 text-xl"
                onClick={() => {
                    navigate('/log-in');
                }}
            >Cerrar Sesión</button>
        </div>
    )
}

export default HomeAdmin