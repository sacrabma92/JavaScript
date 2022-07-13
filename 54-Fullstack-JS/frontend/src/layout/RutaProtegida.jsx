import { Outlet, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {

  const navigate = useNavigate();

    const { auth, cargando } = useAuth(); 
    if(cargando) return 'cargando....';

    console.log(cargando);
    
  return (
    <>
        <Header />
            {auth?._id ?
              <main className="container mx-auto mt-10">
                <Outlet />
              </main> : navigate('/ ')}
        <Footer />
    </>
  )
}

export default RutaProtegida