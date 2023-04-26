import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout.tsx';
import Home from './Pages/Home.tsx';
import HomeMedico from './Pages/HomeMedico.tsx';
import HomePaciente from './Pages/HomePaciente.tsx';
import HomeAdmin from './Pages/HomeAdmin.tsx';
import './App.css';

function App()  {

  return (
    <BrowserRouter>
        <Routes>
            {/* Páginas para quienes no han iniciado sesión.*/}
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
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
