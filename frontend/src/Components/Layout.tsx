import {Outlet} from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
const Layout = () => {
  return (
    <div>
        <Header/>
        <div className="p-5">
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default Layout