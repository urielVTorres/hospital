import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex gap-4 fixed bottom-0" >
        <Link to='/admin'><button className="p-3 bg-white "> Admin View </button></Link>
        <Link to='/paciente'><button className="p-3 bg-white "> Paciente View </button></Link>
        <Link to='/medico'><button className="p-3 bg-white "> Medico View </button></Link>
    </div>
  )
}

export default Footer