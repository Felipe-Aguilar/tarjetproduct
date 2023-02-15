import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

const MiTarjetero = () => {

    

    return (
        <div className='miTarjetero'>

            <div className='row justify-content-center tarjeta'>
                <div className='col-11 col-md-4 p-0'>
                    <img src={CirculoLink} className="circulo"/>
                    <motion.img 
                        src={Mano3D} 
                        className="mano"
                        animate={{rotate: [0,20,0]}}
                        transition={{repeat: Infinity, repeatDelay:2}}
                    />
                </div>
            </div>

            <div className='row mt-4 justify-content-center opciones'>
                <div className='col-11 col-md-4'>
                    <div className='d-flex justify-content-around cuerpo'>
                        <div>
                            <i className="bi bi-trash-fill"></i>
                        </div>
                        <div>
                            <i className="bi bi-download"></i>
                        </div>
                        <div>
                            <i className="bi bi-file-person-fill"></i>
                        </div>
                        <div>
                            <i className="bi bi-qr-code"></i>
                        </div>
                        <div>
                            <i className="bi bi-link-45deg"></i>
                        </div>
                        <div>
                            <i className="bi bi-box-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-4 justify-content-center MiTarjeteroPersonal'>
                <div className='col-11 col-md-4'>
                    <div className='cuerpo'>
                        <h5>Mi Tarjetero personal (00)</h5>
                        <hr/>

                        <form>
                            <label>Mostrar por:</label>
                            <select>
                                <option value="segmento" key="">Segmento</option>
                                <option value="nombres" key="">Nombres</option>
                            </select>
                            <div className='d-flex align-items-center mt-2'>
                                <label>Buscar por nombre:</label>
                                <input type="text" />
                                <button>Go</button>
                            </div>
                            <div className='mt-2'>
                                <label>Resultados por página: </label>
                                <select>
                                    <option value="5" key="">5</option>
                                    <option value="5" key="">10</option>
                                    <option value="5" key="">15</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='row mt-4 my-4 justify-content-center Informacion'>
                <div className='col-11 col-md-4'>
                    <h5>Construcción</h5>
                    <a href="">Sr David Rodriguez Sánchez</a>
                    <p>Albañil</p>
                </div>
            </div>

        </div>
    );
}

export default MiTarjetero;