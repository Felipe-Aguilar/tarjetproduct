import React, {useContext} from 'react';

import { Sesion } from './contextos/Sesion';

import TarjetProd from './tarjet-prod/tarjet';
import MiTarjetero from './tarjet-prod/MiTarjetero';

const VistaSesion = () => {

    const sesion = useContext(Sesion);

    const sesionLocal = localStorage.getItem('sesion');

    return ( 
        <>
            { sesionLocal ? 
                <MiTarjetero />
            :
                <TarjetProd />
            }
        
        </>
    );
}

export default VistaSesion;