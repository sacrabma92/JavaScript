import { useState } from 'react'
import Alerta from './Alerta'

const Formulario = () => {

    const [nombre, setNombre ] = useState('');
    const [propietario, setPropietario ] = useState('');
    const [email, setEmail ] = useState('');
    const [fecha, setFecha ] = useState(Date.now());
    const [sintomas, setSintomas ] = useState('');

    const [alerta, setAlerta] = useState({});

    const handleSubmit = e =>{
        e.preventDefault();

        //Validar el formulario
        if([nombre, propietario,email,fecha,sintomas].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
    }

    const{ msg } = alerta;


  return (
    <>
        <p className="text-lg text-center mb-10">Añade tus pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

        <form className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>
                <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" id="nombre" placeholder="Nombre de la Mascota" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" id="propietario" placeholder="Nombre del Propietario" type="text" value={propietario} onChange={e => setPropietario(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="email">Email Propietario</label>
                <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" id="email" placeholder="Email del Propietario" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha Alta</label>
                <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" id="fecha" type="date" value={fecha} onChange={e => setFecha(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                <textarea className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" id="sintomas" placeholder="Describe los Sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} />
            </div>

            <input type="submit" value="Agregar Paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
        </form>
        {msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario