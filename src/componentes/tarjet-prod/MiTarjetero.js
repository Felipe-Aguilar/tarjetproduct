import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DatosUsuarioSesion } from '../contextos/DatosUsuarioSesion';
import { ConsultaTarjetero, ConsultaTarjeteroFiltro, ConsultaTarjeteroNombre } from '../contextos/ConsultaTarjetero';
import { ConsultaSegmento } from '../contextos/ConsultaSegmento';
import { ConsultaClicUsuario } from '../contextos/ConsultaClicUsuario';

import { ComprobarUsuario , DatosUsuario } from '../contextos/ComprobarUsuario';

import { GuardarTarjet } from '../contextos/GuardarTarjet';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { toast, Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

import Qr from './Qr';
import Compartir from './Compartir';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

import icono1 from '../../assets/icono1.png';
import icono2 from '../../assets/icono2.png';
import icono3 from '../../assets/icono3.png';
import icono4 from '../../assets/icono4.png';
import icono5 from '../../assets/icono5.png';
import icono6 from '../../assets/icono6.png';
import miniTarjetero from '../../assets/miniTarjetero.jpg';
import MiTarjeteroTitulo from '../../assets/MiTarjetero.png';

const MiTarjetero = () => {

    const { pageId } = useParams();
    const [comprobarUsuario, setComprobarUsuario] = useState([]);
    const [ usuario, setUsuario ] = useState([]);

    const usuarioSesion = JSON.parse(localStorage.getItem('DatosSesion'));
    const idUsuarioSesion = JSON.parse(localStorage.getItem('IdDatosSesion'));

    const [datosMiTarjetero, setDatosMiTarjetero ] = useState([]);
    const [datosSegmentos, setDatosSegmentos ] = useState([]);

    useEffect(()=>{

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const ConsultaDatos = async () => {
            const comprobarUsuario = await ComprobarUsuario(atob(pageId));
            setComprobarUsuario(comprobarUsuario);
            
            const resultados = await DatosUsuario(comprobarUsuario.usuId);
            setUsuario(resultados);
        }

        const ConsultaMiTarjetero = async () =>{
            const datosTarjeteroGuardado = await ConsultaTarjetero(idUsuarioSesion.usuId);
            const datosSeg = await ConsultaSegmento(idUsuarioSesion.usuId);
    
            setDatosMiTarjetero(datosTarjeteroGuardado.SDTTarjetsG);
            setDatosSegmentos(datosSeg.SDTSegmentos);
        }

        ConsultaDatos();
        ConsultaMiTarjetero();
    },[]);

    // TODO BIEN AQUÍ

    const navigate = useNavigate();
    
    const [opcionSelected, setOpcionSelected] = useState('');


    const [busquedaSegmento, setBusquedaSegmento] = useState(false);
    const [reBusSegmento, setReBusSegmento ] = useState([]);
    const [nomSeg, setNomSeg] = useState();

    const ConsultaFiltroSegmento = async(SegmentoId) =>{
        setBusquedaSegmento(true);
        const resultadosSegmento = await ConsultaTarjeteroFiltro(idUsuarioSesion.usuId , SegmentoId);

        setReBusSegmento(resultadosSegmento.SDTTarjetsG);
        setNomSeg(resultadosSegmento.SDTTarjetsG[0].SegmentoDesc);
    }

    const [capturaNombre, setCapturaNombre] = useState('');
    const [busquedaNombre, setBusquedaNombre ] = useState(false);
    const [reBusNombre, setReBusNombre] = useState([]);

    const ConsultaNombre = async (e) => {
        setBusquedaNombre(true);
        setCapturaNombre(e.target.value);
        
        const resultadoNombre = await ConsultaTarjeteroNombre(idUsuarioSesion.usuId, capturaNombre);

        setReBusNombre(resultadoNombre.SDTTarjetsG);
    }

    const [busquedaUsuario, setBusquedaUsuario] = useState(false);
    const [usuarioBuscado, setUsuarioBuscado] = useState([]);

    const ConsultaUsuarioClic = async (IdTarjet) =>{
        const respuesta = await ConsultaClicUsuario(IdTarjet);
        setBusquedaUsuario(true);
        setUsuarioBuscado(respuesta);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const GuardarTarjetero = () => {
        GuardarTarjet(idUsuarioSesion.usuId, comprobarUsuario.usuId);

        toast.success('Tarjeta guardada con éxito',{
            duration: 4500,
            position: 'top-center',
        });

        setInterval(()=>{
            window.location.reload();
        },3000);
    }

    const [qr, setQr] = useState(false);
    const [compartir, setCompartir] = useState(false);

    const setQrEstado = () => {
        setQr(!qr);
    }

    const setCompartirEstado = () => {
        setCompartir(!compartir);
    }

    const copiarPortapapeles = () => {

        if (!busquedaUsuario) {
            const el = document.createElement('textarea');
            el.value = window.location.href;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }else{
            const el = document.createElement('textarea');
            el.value = 'https://tarjet.site/#/' + btoa(usuarioBuscado.UsuToken);
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

        }
        toast('Copiado en el portapapeles',{
            duration: 4500,
            position: 'top-center',
        });
    }

    // Comprobando si existe o no
    if(comprobarUsuario.usuId === 0) return null;

    return (

        <div className='container-fluid'>

            <div className='miTarjetero' >
                { !busquedaUsuario ?
                    <div 
                        className='row justify-content-center tarjeta' 
                        style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+ usuario.UsuFondoF})`}}
                        onClick={()=>navigate('/st/'+btoa(usuario.UsuToken))}
                    >
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
                :
                    <div 
                        className='row justify-content-center tarjeta' 
                        style={{backgroundImage: `url(${'https://tarjet.site/imagenes/'+usuarioBuscado.UsuFondoF})`}}
                        onClick={()=>navigate('/st/'+btoa(usuarioBuscado.UsuToken))}
                    >
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
                }

                {/* Opciones de tarjetero antiguas */}
                {/* <div className='row mt-4 justify-content-center opciones'>
                    <div className='col-11 col-md-4'>
                        <div className='d-flex justify-content-between align-items-center cuerpo'>
                            <div>
                                <img 
                                    src={icono2} 
                                    onClick={GuardarTarjetero}
                                />
                                <Toaster />
                            </div>
                            <div>
                                <img 
                                    src={icono1} 
                                    onClick={()=>{
                                        navigate('/'+btoa(usuarioSesion.UsuToken)); 
                                        window.location.reload();
                                    }}
                                />
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
                </div> */}

                <div className='row mt-4 justify-content-center opciones2'>
                    <div className='col-11 col-md-4 p-0'>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-around align-items-center cuerpo'>
                                <div>
                                    <img 
                                        src={icono2} 
                                        onClick={GuardarTarjetero}
                                    />
                                    <Toaster />
                                </div>
                                <div>
                                    <img 
                                        src={icono1} 
                                        onClick={()=>{
                                            navigate('/'+btoa(usuarioSesion.UsuToken)); 
                                            window.location.reload();
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='d-flex justify-content-around align-items-center cuerpo'>
                                <div>
                                    <img 
                                        src={icono3}
                                        onClick={()=>setQr(true)}
                                    />
                                    { qr &&
                                        <Qr showQr={qr} cerrarQr={setQrEstado} usuarioQr={usuario.UsuToken} busquedaUsuario={busquedaUsuario} buscadoQr={usuarioBuscado.UsuToken}/>
                                    }
                                </div>
                                <div>
                                    <img src={icono4} onClick={copiarPortapapeles}/>
                                </div>
                                <div>
                                    <img src={icono5} onClick={()=>setCompartir(true)}/>
                                    
                                    { compartir &&
                                        <Compartir showCompartir={compartir} cerrarCompartir={setCompartirEstado} busquedaUsuario={busquedaUsuario} usuarioBuscado={usuarioBuscado}/>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mi tarjetero opciones */}
                {/* <div className='row mt-4 justify-content-center MiTarjeteroPersonal'>
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
                </div> */}


                <div className='row mt-4 justify-content-center MiTarjeteroPersonal2'>
                    <div className='col-12 col-md-4 p-0'>
                        <div className='imagen-titulo'>
                            <img src={MiTarjeteroTitulo} />
                        </div>
                        <div className='cuerpo'>
                            <div className='d-flex justify-content-center mb-2'>
                                <div className=''>
                                    <h6>Actualmente ({datosMiTarjetero.length}) Tarjets</h6>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-start mb-2'>
                                <div className='col-md-4 col-5 p-0'>
                                    <img src={miniTarjetero} className='img-fluid' />
                                </div>
                                <div className='col-md-6 col-6 p-0 ml-3'>
                                    <h5>mi Tarjetero personal</h5>
                                    <h6>Actualmente ({datosMiTarjetero.length}) Tarjets</h6>
                                </div>
                            </div> */}

                            <form>
                                <label>Mostrar por:</label>
                                <select value={opcionSelected} onChange={(e)=>setOpcionSelected(e.target.value)}>
                                    <option value="">Seleccione</option>
                                    <option value="segmento">Segmento</option>
                                    <option value="nombre">Nombre</option>
                                </select>
                            </form>
                            <form>
                                <div className='mt-3'>
                                    <label className='lbl-nombre'>Buscar por nombre:</label>
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
                                {/* <div className='mt-2'>
                                    <label>Resultados por página: </label>
                                    <select>
                                        <option value="5" >5</option>
                                        <option value="5" >10</option>
                                        <option value="5" >15</option>
                                    </select>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>

                <div className='row mt-4 my-4 justify-content-center Datos'>
                    <div className='col-11 col-md-4'>
                        {/* { opcionSelected == '' &&
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
                        } */}
                        {  opcionSelected == 'segmento' &&
                            <>
                                {/* <h6>
                                    <i className="bi bi-search"></i>
                                    Resultados de búsqueda por segmento
                                </h6> */}
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
                                                onClick={()=>ConsultaUsuarioClic(segmento.IdTarjet)}
                                            >
                                                {segmento.NombreCompleto}
                                                <span>{segmento.UsuEncabezado}</span>
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
                                {/* <h6>
                                    <i className="bi bi-search"></i>
                                    Resultados de búsqueda por nombre
                                </h6> */}
                                { !busquedaNombre &&
                                    <>
                                        <p>Mostrando: Todos</p>
                                        <hr/>
                                        { datosMiTarjetero.map((dato, index)=>(
                                            <button 
                                                className='resultado' 
                                                key={index}
                                                onClick={()=>ConsultaUsuarioClic(dato.IdTarjet)}
                                            >
                                                {dato.NombreCompleto}
                                                <span>{dato.UsuEncabezado}</span>
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
                                            <button 
                                                className='resultado' 
                                                key={index}
                                                onClick={()=>ConsultaUsuarioClic(dato.IdTarjet)}
                                            >
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