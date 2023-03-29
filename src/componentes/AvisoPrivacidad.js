import React, { useState } from 'react';

const AvisoPrivacidad = () => {

    const [ abrir, setAbrir ] = useState(false);

    const infoStyle = {
        maxHeight: abrir ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.8s ease-in-out'
    }

    return ( 
        <div className="container-fluid">
            <div className="aviso-privacidad">
                <div className="row justify-content-center">
                        <h1>Aviso de Privacidad</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="acordeon">
                            <div className="titulo">
                                <button className="d-flex justify-content-between align-items-center" onClick={()=>setAbrir(!abrir)}>
                                    1. Pregunta
                                    <i className="bi bi-chevron-down"></i>
                                </button>

                                <div className="info" style={infoStyle}>
                                    <p>
                                        Tarjet, “Tu tarjeta de presentación virtual”, con domicilio en Avenida Industria Militar No. 1055, Colonia Lomas de Sotelo, Miguel Hidalgo Ciudad de México, C.P. 11200, está comprometido con la protección de sus datos personales, al ser responsable de su uso, manejo y confidencialidad mediante la continua revisión de nuestros procesos de protección de datos de manera física como electrónica. 
                                    </p>
                                </div>

                            </div>
                            <div className="titulo">
                                <button className="d-flex justify-content-between align-items-center">
                                    1. Pregunta
                                    <i className="bi bi-chevron-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvisoPrivacidad;