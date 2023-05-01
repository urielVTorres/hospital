import { Link } from "react-router-dom"

const HomeAdmin = () => {
    return (
        <div className="text-lg font-thin md:flex " >
            <div className="border-2 rounded-sm  p-10 md:w-96 w-11/12 mx-auto md:mx-5 mb-5 shadow-md">
                <h2 className="text-2xl">Pacientes</h2>
                <div className="grid grid-cols-1 p-5" >
                    <ul>
                        <li>
                            <Link to='lista-pacientes' children="Lista de paciente" />
                        </li>
                        <li>
                            <Link to='agregar-paciente' children="Agregar paciente" />
                        </li>
                        <li>
                            <Link to='agendar-cita' children="Agendar una cita" />
                        </li>
                        <li>
                            <Link to='consultar-cita' children="Consultar cita" />
                        </li>
                        <li>
                            <Link to='buscar-paciente' children="Buscar a un paciente" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-2 rounded-sm  p-10 md:w-96 w-11/12 mx-auto md:mx-5 mb-5 shadow-md">
                <h2 className="text-2xl">Empleados</h2>
                <div className="grid grid-cols-1 p-5" >
                    <ul>
                        <li>
                            <Link to='agregar-empleado' children="Agregar empleado" />
                        </li>
                        <li>
                            <Link to='lista-empleados' children="Lista de empleados" />
                        </li>
                        <li>
                            <Link to='buscar-empleado' children="Buscar a un empleado" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin