import React, { useState, useContext, useEffect } from 'react';

import { DatosUsuarioSesion } from '../contextos/DatosUsuarioSesion';
import { ConsultaTarjetero, ConsultaTarjeteroFiltro, ConsultaTarjeteroNombre } from '../contextos/ConsultaTarjetero';
import { ConsultaSegmento } from '../contextos/ConsultaSegmento';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

import icono1 from '../../assets/icono1.png';
import icono2 from '../../assets/icono2.png';
import icono3 from '../../assets/icono3.png';
import icono4 from '../../assets/icono4.png';
import icono5 from '../../assets/icono5.png';
import icono6 from '../../assets/icono6.png';

const MiTarjetero = () => {

    const { datosUsuario } = useContext(DatosUsuarioSesion);
    const { datosUsuarioId } = useContext(DatosUsuarioSesion);
    const [datosMiTarjetero, setDatosMiTarjetero ] = useState([]);
    const [datosSegmentos, setDatosSegmentos ] = useState([]);

    useEffect(()=>{

        const Consulta = async () =>{
            const datosTarjeteroGuardado = await ConsultaTarjetero(datosUsuarioId);
            const datosSeg = await ConsultaSegmento(datosUsuarioId);
    
            setDatosMiTarjetero(datosTarjeteroGuardado.SDTTarjetsG);
            setDatosSegmentos(datosSeg.SDTSegmentos);
        }

        Consulta();
    }, []);
    
    const [compartir, setCompartir] = useState(false);

    const navigate = useNavigate();
    
    const [opcionSelected, setOpcionSelected] = useState('');


    const [busquedaSegmento, setBusquedaSegmento] = useState(false);
    const [reBusSegmento, setReBusSegmento ] = useState([]);
    const [nomSeg, setNomSeg] = useState();

    const ConsultaFiltroSegmento = async(SegmentoId) =>{
        setBusquedaSegmento(true);
        const resultadosSegmento = await ConsultaTarjeteroFiltro(datosUsuarioId , SegmentoId);

        setReBusSegmento(resultadosSegmento.SDTTarjetsG);
        setNomSeg(resultadosSegmento.SDTTarjetsG[0].SegmentoDesc);
    }

    const [capturaNombre, setCapturaNombre] = useState('');
    const [busquedaNombre, setBusquedaNombre ] = useState(false);
    const [reBusNombre, setReBusNombre] = useState([]);

    const ConsultaNombre = async (e) => {
        setBusquedaNombre(true);
        setCapturaNombre(e.target.value);
        
        const resultadoNombre = await ConsultaTarjeteroNombre(datosUsuarioId, capturaNombre);

        setReBusNombre(resultadoNombre.SDTTarjetsG);
    }

    return (
        <div className='container-fluid'>
            <div className='miTarjetero' >
                <div className='row justify-content-center tarjeta' style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+datosUsuario.UsuFondoF})`}}>
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
                            <h5>Mi Tarjetero personal ({datosMiTarjetero.length})</h5>
                            <hr/>

                            <form>
                                <label>Mostrar por:</label>
                                <select value={opcionSelected} onChange={(e)=>setOpcionSelected(e.target.value)}>
                                    <option value="">Seleccione</option>
                                    <option value="segmento">Segmento</option>
                                    <option value="nombre">Nombre</option>
                                </select>
                            </form>
                            <form>
                                <div className='d-flex align-items-center mt-2'>
                                    <label>Buscar por nombre:</label>
                                    { opcionSelected == 'segmento' | opcionSelected == '' ? 
                                        <input type="text" value={capturaNombre} disabled/>
                                    :
                                        <input 
                                            type="text"
                                            value={capturaNombre}
                                            onChange={ConsultaNombre}
                                        />
                                    }
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

                <div className='row mt-4 my-4 justify-content-center Datos'>
                    <div className='col-11 col-md-4'>
                        { opcionSelected == '' &&
                            <>
                                <h6>
                                    <i className="bi bi-search"></i>
                                    Resultados de búsqueda
                                </h6>
                                <hr/>
                                <p>
                                    Para mostrar los resultados de búsqueda seleccione una opción mostrar por: (segmento o nombre).
                                </p>
                            </>
                        }
                        {  opcionSelected == 'segmento' &&
                            <>
                                <h6>
                                    <i className="bi bi-search"></i>
                                    Resultados de búsqueda por segmento
                                </h6>
                                { !busquedaSegmento &&
                                    <>
                                        <p>Mostrando: Todos</p>
                                        <hr/>

                                        {   datosSegmentos.map((segmento)=>(
                                            <button 
                                                className='resultado' 
                                                key={segmento.SegmentoId}
                                                onClick={() => ConsultaFiltroSegmento(segmento.SegmentoId)}
                                            >
                                                {segmento.SegmentoDesc}
                                            </button>
                                        ))
                                        }
                                    </>
                                }
                                { busquedaSegmento && 
                                    <>
                                        <p>Mostrando: {nomSeg}</p>
                                        <hr/>
                                        {   reBusSegmento.map((segmento, index)=>(
                                            <button 
                                                className='resultado' 
                                                key={index}
                                            >
                                                {segmento.NombreCompleto}
                                                <span>{segmento.UsuActividad}</span>
                                            </button>
                                        ))
                                        }
                                        <button className='regresar' onClick={()=>setBusquedaSegmento(false)}>
                                            <i className="bi bi-arrow-left-circle-fill"></i>
                                            Regresar
                                        </button>
                                    </>
                                }
                                
                            </>
                        }
                        { opcionSelected == 'nombre' && 
                            <>
                                <h6>
                                    <i className="bi bi-search"></i>
                                    Resultados de búsqueda por nombre
                                </h6>
                                { !busquedaNombre &&
                                    <>
                                        <p>Mostrando: Todos</p>
                                        <hr/>
                                        { datosMiTarjetero.map((dato, index)=>(
                                            <button className='resultado' key={index}>
                                                {dato.NombreCompleto}
                                                <span>{dato.UsuActividad}</span>
                                            </button>
                                        ))
                                        }
                                    </>
                                }
                                { busquedaNombre &&
                                    <>
                                        <p>Mostrando: {capturaNombre}</p>
                                        <hr/>
                                        { reBusNombre.map((dato, index)=>(
                                            <button className='resultado' key={index}>
                                                {dato.NombreCompleto}
                                                <span>{dato.UsuActividad}</span>
                                            </button>
                                        ))
                                        }
                                        { reBusNombre.length == 0 &&
                                            <p className='noEncontrado'>
                                                <i className="bi bi-exclamation-circle"></i>
                                                No se encontraron resultados para <b>{capturaNombre}</b>
                                            </p>
                                        }
                                        <button className='regresar' onClick={()=>setBusquedaNombre(false)}>
                                            <i className="bi bi-arrow-left-circle-fill"></i>
                                            Regresar
                                        </button>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiTarjetero;