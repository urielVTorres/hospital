import {Outlet} from 'react-router-dom';
import Header from '../Components/Header.tsx';
import Footer from '../Components/Footer.tsx';
const Layout = () => {
  return (
    <div>
        <Header/>
        <h1>Hola mi amigo.</h1>
        <Outlet />
        <h2>Qué pedro</h2>
        <Footer/>
    </div>
  )
}

export default Layout