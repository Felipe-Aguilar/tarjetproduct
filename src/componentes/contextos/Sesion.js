import React, { useState, useEffect } from 'react';

const Sesion = React.createContext();


const Proveedor = ({ children }) => {
    const [estadoSesion, setEstadoSesion] = useState(false);

    const sesionTrue = () =>{
        setEstadoSesion(true);
    }
    const sesionFalse = () =>{
        setEstadoSesion(false);
    }

    useEffect(()=>{
        localStorage.setItem('sesion', estadoSesion);
    },[estadoSesion]);

    return ( 
        <Sesion.Provider value={{estadoSesion, sesionTrue, sesionFalse}}>
            { children }
        </Sesion.Provider>
    );
}

export {Sesion, Proveedor};