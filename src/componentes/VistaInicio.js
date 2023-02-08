import React, {useState} from 'react';

import Tarjeta from './Tarjeta';
import InformacionSinSesion from './InformacionSinSesion';
import InformacionConSesion from './InformacionConSesion';

const VistaInicio = () => {

    const [sesion, cambioSesion] = useState(true);

    return ( 
        <>
            <Tarjeta />
            {sesion ? 
                <InformacionSinSesion/>
            :
                <InformacionConSesion/>
            }
        </>
    );
}

export default VistaInicio;