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
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
