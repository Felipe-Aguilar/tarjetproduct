import React, { useState } from 'react';

const MiTarjeteroGet = React.createContext();

const ProveedorMiTarjeteroGet = ( { children } ) => {

    const obtenerMiTarjeteroGet = async(idUsuario) => {
        
        const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaMiTarjet/?Usutarjetid=${idUsuario}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error(error));
            const dataUsuario = await response.json();
            
            return dataUsuario;
    }

    return ( 
        <MiTarjeteroGet.Provider value={{obtenerMiTarjeteroGet}}>
            { children }
        </MiTarjeteroGet.Provider>
    );
}

export { MiTarjeteroGet, ProveedorMiTarjeteroGet};