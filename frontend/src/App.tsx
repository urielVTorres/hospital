import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.tsx';
//Publico
import Home from './Pages/Publico/Home.tsx';
import Nosotros from './Pages/Publico/Nosotros.tsx';
import Servicios from './Pages/Publico/Servicios.tsx';
import Contacto from './Pages/Publico/Contacto.tsx';
import Login from './Pages/Publico/Login.tsx';
import Signin  from './Pages/Publico/Signin.tsx';

import HomeMedico from './Pages/Medico/HomeMedico.tsx';
import HomePaciente from './Pages/Paciente/HomePaciente.tsx';
import HomeAdmin from './Pages/Administrador/HomeAdmin.tsx';
import './App.css';
import Signin2 from './Pages/Publico/Signin2.tsx';
import ListaPacientes from './Pages/Administrador/Pacientes/ListaPacientes.tsx';
import AgregarPaciente from './Pages/Administrador/Pacientes/AgregarPaciente.tsx';
import ConsultarCita from './Pages/Administrador/Pacientes/ConsultarCita.tsx';
import AgendarCita from './Pages/Administrador/Pacientes/AgendarCita.tsx';
import BuscarPaciente from './Pages/Administrador/Pacientes/BuscarPaciente.tsx';
import AgregarEmpleado from './Pages/Administrador/Empleados/AgregarEmpleado.tsx';
import ListaEmpleados from './Pages/Administrador/Empleados/ListaEmpleados.tsx';
import BuscarEmpleado from './Pages/Administrador/Empleados/BuscarEmpleado.tsx';
import AgregarConsultorio from './Pages/Administrador/Clinica/AgregarConsultorio.tsx';
import ListaConsultorios from './Pages/Administrador/Clinica/ListaConsultorios.tsx';
import AgregarDepartamento from './Pages/Administrador/Clinica/AgregarDepartamento.tsx';
import ListaDepartamentos from './Pages/Administrador/Clinica/ListaDepartamentos.tsx';
import BuscarConsultorio from './Pages/Administrador/Clinica/BuscarConsultorio.tsx';
import AgregarEspecialidad from './Pages/Administrador/Clinica/AgregarEspecialidad.tsx';
import AgregarTurno from './Pages/Administrador/Clinica/AgregarTurno.tsx';

function App()  {

  return (
    <BrowserRouter>
        <Routes>
            {/* Páginas para quienes no han iniciado sesión.*/}
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/log-in' element={<Login />} />
                <Route path='/sign-in' element={<Signin />} />
                <Route path='/sign-in/continue' element={<Signin2 />} />
            </Route>

            {/* Páginas para pacientes registrados*/}
            <Route path='/paciente' element={<Layout />}>
                <Route index element={<HomePaciente />} />
            </Route>


            {/* Páginas para medicos registrados*/}
            <Route path='/medico' element={<Layout />}>
                <Route index element={<HomeMedico />} />
            </Route>
            
            
            {/* Páginas para el administrador*/}
            <Route path='/admin' element={<Layout />}>
                <Route index element={<HomeAdmin />} />
                <Route path='agendar-cita' element={<AgendarCita />} />
                <Route path='agregar-paciente' element={<AgregarPaciente />} />
                <Route path='buscar-paciente' element={<BuscarPaciente />} />
                <Route path='consultar-cita' element={<ConsultarCita />} />
                <Route path='lista-pacientes' element={<ListaPacientes />} />


                <Route path='agregar-empleado' element={<AgregarEmpleado />} />
                <Route path='buscar-empleado' element={<BuscarEmpleado />} />
                <Route path='lista-empleados' element={<ListaEmpleados />} />
                
                <Route path='agregar-consultorio' element={<AgregarConsultorio />} />
                <Route path='agregar-departamento' element={<AgregarDepartamento />} />
                <Route path='agregar-especialidad' element={<AgregarEspecialidad />} />
                <Route path='agregar-turno' element={<AgregarTurno />} />
                <Route path='buscar-consultorio' element={<BuscarConsultorio />} />
                <Route path='lista-consultorios' element={<ListaConsultorios />} />
                <Route path='lista-departamentos' element={<ListaDepartamentos />} />


            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
