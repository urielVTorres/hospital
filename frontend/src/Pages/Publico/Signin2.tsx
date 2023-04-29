import { ESTADOS_DE_MEXICO } from "../../Helpers/constantes.tsx";

const Signin2 = () => {
    return (
        <div className="md:mx-10" >
            <form className="grid grid-cols-1 md:w-1/2 mx-auto text-xl md:text-2xl font-thin gap-4 shadow-md p-10 rounded-md">
                <h2 className="text-2xl md:text-3xl text-center mb-10 font-semibold">Para continuar con tu registro, por favor ingresa los siguientes datos.</h2>
                <label htmlFor="curp" >CURP:</label>
                <input id="curp" placeholder="ABCD123456HMCRRR00" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="fecha" >Fecha de nacimiento*:</label>
                <input id="fecha" type="date" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="calle" >Calle y número:</label>
                <input id="calle" placeholder="Tu calle y numero" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="colonia" >Colonia:</label>
                <input id="colonia" placeholder="Tu colonia" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="municipio" >Municipio o delegación:</label>
                <input id="municipio" placeholder="Tu municipio o delegación" type="text" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="estado" >Estado:</label>
                <select id="estado" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5">
                    {ESTADOS_DE_MEXICO.map((estado, index) => <option value={estado} key={index}>{estado}</option>)}
                </select>


                <label htmlFor="cp" >Código Postal:</label>
                <input id="cp" placeholder="12345" type="name" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />


                <label htmlFor="telefono" >Celular:</label>
                <input id="telefono" placeholder="5579873432" type="tel" pattern="[0-9]{10}" className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-3 mb-5" />

                <input type="submit" value="Continuar" className="bg-slate-700 px-3 py-3 rounded-md text-white font-bold text-xl shadow-md"/>
            </form>
        </div>
    )
}

export default Signin2