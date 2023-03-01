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
<<<<<<< HEAD
=======
        console.log(localStorage.getItem('sesion'));
>>>>>>> e45715f9637d00eb8d4e591a4ede269bba9b6840
    },[estadoSesion]);

    return ( 
        <Sesion.Provider value={{estadoSesion, sesionTrue, sesionFalse}}>
            { children }
        </Sesion.Provider>
    );
}

export {Sesion, Proveedor};