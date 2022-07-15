import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/axios'

const PacienteContext = createContext()

export const PacientesProvider = (children) =>{

    return(
        <PacienteContext.Provider value={{
            
        }}>
            {children}
        </PacienteContext.Provider>
    )
}




export default PacientesContext;