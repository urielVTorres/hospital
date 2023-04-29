
const Alerta = (props:{mensaje: {msg: string, error: boolean} }) => {
    const {msg, error} = props.mensaje;
    return (
        <>
            {error ? <div className="bg-red-600 p-3 text-center text-white mx-auto font-semibold text-lg fixed w-80 opacity-70 rounded-md">
                <p>{msg}</p>
            </div> : <div className="bg-green-400 p-3 text-center text-white mx-auto font-semibold text-lg">
                <p>{msg}</p>
            </div>
            }
        </>
    )
}

export default Alerta