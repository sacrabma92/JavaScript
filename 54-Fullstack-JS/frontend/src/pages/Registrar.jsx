import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';
import clienteAxios from '../config/axios';

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e =>{
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({msg: 'Hay campos vacios', error: true});
            return;
        }

        if(password !== repetirPassword){
            setAlerta({msg: 'Los Password no son iguales', error: true});
            return;
        }

        if(password.length < 6 ){
            setAlerta({msg: 'El Password es muy corto, Agrega minimo 6 Caracteres', error: true});
            return;
        }

        setAlerta({})

        // Crear el usuario en la api
        try {
            await clienteAxios.post('/veterinarios', {nombre, email, password});
            setAlerta({
                msg:'Creado Correctamente, revisa tu email',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <>
            <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra {""} <span className="text-black">tus Pacientes</span></h1>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta 
                    alerta={alerta}
                />}
                <form onSubmit={ handleSubmit }>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
                            Nombre
                        </label>
                        <input className="border w-full p-3 mt-3 bg-gray-100 rounded-xl" placeholder="Tu Nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
                            Email
                        </label>
                        <input className="border w-full p-3 mt-3 bg-gray-100 rounded-xl" placeholder="Email de Registro" type="text"  value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
                            Password
                        </label>
                        <input className="border w-full p-3 mt-3 bg-gray-100 rounded-xl" placeholder="Password" type="password" value={password} onChange={ e => setPassword(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="">
                            Repetir Password
                        </label>
                        <input className="border w-full p-3 mt-3 bg-gray-100 rounded-xl" placeholder="Repite tu Password" type="password" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)}/>
                    </div>

                    <input className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" type="submit" value="Crear Cuenta" />
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link to="/" className='block text-center my-5 text-gray-500'>Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link to="/olvide-password" className='block text-center my-5 text-gray-500'>Olvide mi Password</Link>
                </nav>
            </div>
        </>
    )
}

export default Registrar