import React from 'react'

const AgregarEspecialidad = () => {
  return (
    <div>
        <form className="grid grid-cols-1 md:w-96 w-11/12 mx-auto text-lg font-thin gap-2 shadow-sm px-10 py-12 rounded-sm  border-2">
            <h1 className="text-2xl md:text-3xl text-center font-semibold mb-8">Agrega una nueva especialidad.</h1>
            <label htmlFor="especialidad">Nombre de la especialidad</label>
            <input id="especialidad" type="text" placeholder='Ej. Cardiología' className="bg-slate-100  border-2 rounded-lg  focus:bg-white p-2 mb-2"/>
            <button type="submit" children="Agregar" className="bg-slate-700 px-3 py-2 rounded-md text-white font-bold text-xl shadow-md"/>
        </form>
    </div>
  )
}

export default AgregarEspecialidad