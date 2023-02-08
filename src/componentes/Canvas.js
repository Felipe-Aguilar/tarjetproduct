import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import TuDiseño from './canvas/TuDiseño';
import TusDatos from './canvas/TusDatos';
import Reverso from './canvas/Reverso';

const Canvas = () => {

    const [activo, setActivo] = useState('active');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10}$/ // 7 a 14 numeros.
    }

    return ( 
        <div className='canvas-contenedor'>
            <div className='row justify-content-center'>
                <div className='col-11 col-md-8'>
                    <p>
                        Nos da mucho gusto que estés a punto de crear tu Tarjet, con ella podrás dar una muy buena primera impresión a tus prospectos y clientes.
                    </p>
                    <h2>Diseña tu Tarjet</h2>
                    <h3>Tu tarjeta de Presentación Virtual</h3>
                    
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-12 col-md-8 menu'>
                    <div className='nav-container w-auto'>
                        {/* <NavLink to="tu-diseño" className={activo} onClick={()=>setActivo('active')}>
                            <i className="bi bi-1-circle-fill"></i> Tu diseño
                        </NavLink> */}
                        <NavLink to="tu-diseño" style={{cursor: 'none', pointerEvents: 'none'}}>
                            <i className="bi bi-1-circle-fill"></i> Tu diseño
                        </NavLink>
                        <NavLink to="tus-datos" style={{cursor: 'none', pointerEvents: 'none'}}>
                            <i className="bi bi-2-circle-fill"></i> Tus datos
                        </NavLink>
                        <NavLink to="reverso" style={{cursor: 'none', pointerEvents: 'none'}}>
                            <i className="bi bi-3-circle-fill"></i> Reverso
                        </NavLink>
                    </div>
                </div>
            </div>


            <Routes>
                <Route path='/' element={<TuDiseño textoValidacion={expresiones.nombre}/>}
                />
                <Route path='tu-diseño' element={<TuDiseño />}/>
                <Route path='tus-datos' element={<TusDatos />}/>
                <Route path='reverso' element={<Reverso numeroValidacion={expresiones.telefono} direccionValidacion={expresiones.nombre}/>}/>
            </Routes>
            
        </div>
    );
}

export default Canvas;