import {Outlet} from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet />
        </div>
        <Footer/>

        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Derechos reservados &copy; Vida Sana @ 2023</small></div>
        </div>
    </div>
  )
}

export default Layout