import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import MisTarjetas1 from './MisTarjetas1';
import MisTarjetas2 from './MisTarjetas2';
import MisTarjetas3 from './MisTarjetas3';

const InformacionConSesion = () => {
    return (

        <Routes>
            <Route path='*' element={<MisTarjetas1 />}/>
            <Route path='/inicial' element={<MisTarjetas1 />}/>

            <Route path='/Tarjetas2' element={<MisTarjetas2 />}/>
            <Route path='/Tarjetas3' element={<MisTarjetas3 />}/>
        </Routes> 
        
    );
}

export default InformacionConSesion;