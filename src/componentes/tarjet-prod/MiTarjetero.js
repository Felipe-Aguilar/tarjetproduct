import React, { useState, useContext } from 'react';

import { Usuarios } from '../contextos/Usuarios';

import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

import icono1 from '../../assets/icono1.png';
import icono2 from '../../assets/icono2.png';
import icono3 from '../../assets/icono3.png';
import icono4 from '../../assets/icono4.png';
import icono5 from '../../assets/icono5.png';
import icono6 from '../../assets/icono6.png';

const MiTarjetero = () => {

    const { usuarios } = useContext(Usuarios);
    
    const [compartir, setCompartir] = useState(false);

    const navigate = useNavigate();
    
    const { pageId } = useParams();
    const usuario = usuarios.find(usuario => usuario.token === atob(pageId));

    if (!usuario) return null;

    return (
        <div className='container-fluid'>
            <div className='miTarjetero' >
                <div className='row justify-content-center tarjeta' style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+usuario.fondoTarjeta})`}}>
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
                        <div className='d-flex justify-content-between align-items-center cuerpo'>
                            {/* <div>
                                <img src={icono6}/>
                            </div> */}
                            <div>
                                <img src={icono2} />
                            </div>
                            <div>
                                <img src={icono1} />
                            </div>
                            <div>
                                <img src={icono3}/>
                            </div>
                            <div>
                                <img src={icono4}/>
                            </div>
                            <div>
                                <img src={icono5} onClick={()=>setCompartir(!compartir)}/>
                                    
                                { compartir &&
                                    <motion.div className='compartir'
                                        initial={{scale:0}}
                                        animate={{scale: 1}}
                                    >
                                        <i className="bi bi-facebook facebook"></i>
                                        <i className="bi bi-whatsapp whats"></i>
                                        <i className="bi bi-instagram instagram"></i>
                                        <i className="bi bi-telegram telegram"></i>
                                        <i className="bi bi-twitter twitter"></i>
                                    </motion.div>
                                }
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
                                    <option value="segmento" >Segmento</option>
                                    <option value="nombres" >Nombres</option>
                                </select>
                                <div className='d-flex align-items-center mt-2'>
                                    <label>Buscar por nombre:</label>
                                    <input type="text" />
                                    <button>Go</button>
                                </div>
                                <div className='mt-2'>
                                    <label>Resultados por página: </label>
                                    <select>
                                        <option value="5" >5</option>
                                        <option value="5" >10</option>
                                        <option value="5" >15</option>
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
        </div>
    );
}

export default MiTarjetero;