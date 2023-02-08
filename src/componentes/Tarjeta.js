import React, {useState} from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import tarjetaFrente from '../assets/TarjetaFrente.png';
import tarjetaReverso from '../assets/TarjetaReverso.png';

import iconoFlechas from '../assets/iconoFlechas.png';
import iconoOjo from '../assets/iconoOjo.png';
import iconoOjoSinRaya from '../assets/iconoOjoSinRaya.png';
import iconoCompartir from '../assets/iconoCompartir.png';
import iconoGuardar from '../assets/iconoGuardar.png';


const TarjetaVista = () => {

    const [ver, cambiarVer] = useState(true);
    const [reverso, cambiarReverso]  = useState(true);
    const [compartir, cambiarCompartir] = useState(false);

    return (
        <>  
            <TarjetaVistaContenedor className='row justify-content-center align-items-md-center'>
                <div className="col-12 col-md-4 tarjeta-contenedor">
                    <AnimatePresence>
                        { ver ?
                            reverso && (
                                <NavLink to="/tarjetSite">
                                    {/* <motion.img 
                                        src={tarjetaFrente} 
                                        alt="Tarjet | Tu tarjeta de presentación online"
                                        initial={{opacity:0, scale: 0}}
                                        animate={{opacity: 1, scale: [1,1.05,1]}}
                                        transition={{duration: 0.5}}
                                        exit={{opacity: 0, x:100}}
                                    /> */}
                                    <motion.img 
                                        src={tarjetaFrente} 
                                        alt="Tarjet | Tu tarjeta de presentación online"
                                        initial={{opacity:0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.5}}
                                        exit={{x:100, opacity: 0}}
                                    />
                                </NavLink>
                            )
                        :
                            <>
                            </>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        { ver ?
                            !reverso && (
                                <NavLink to="/tarjetSite">
                                    {/* <motion.img 
                                        src={tarjetaReverso}
                                        alt="Tarjet | Tu tarjeta de presentación online"
                                        initial={{opacity:0, scale: 0}}
                                        animate={{opacity: 1, scale: [1,1.05,1]}}
                                        transition={{delay:1, duration: 0.5}}
                                        exit={{transition:100 ,opacity: 0, y:100}}
                                    /> */}
                                    <motion.img 
                                        src={tarjetaReverso}
                                        alt="Tarjet | Tu tarjeta de presentación online"
                                        initial={{opacity:0}}
                                        animate={{x: [-100, 0], opacity: 1}}
                                        transition={{delay:0.5, duration: 0.5}}
                                        exit={{opacity:0 ,x:100}}
                                    />
                                </NavLink>
                            )
                        :
                            <>
                            </>
                        }
                    </AnimatePresence>
                </div>

                {/* <Opciones className='col-11 col-md-4 text-center'>
                    <div className='row headControl'>
                        <div className='w-100'>
                            <h6>Tarjet Control</h6>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className='w-auto'>
                            <i 
                                className="bi bi-arrow-repeat"
                                onClick={() => cambiarReverso(!reverso)}
                            ></i>
                            <p>Reverso</p>
                        </div>
                        <div className='w-auto'>
                            { ver ?
                                <>
                                    <i 
                                        className="bi bi-eye-slash"
                                        onClick={() => cambiarVer(false)}
                                    ></i>
                                    <p>Ver/Ocultar</p>
                                </>
                            :
                                <>
                                    <i 
                                        className="bi bi-eye"
                                        onClick={() => cambiarVer(true)}
                                    ></i>
                                    <p>Ver/Ocultar</p>
                                </>
                            }
                            
                        </div>
                        <div className='w-auto'>
                            <i 
                                className="bi bi-share"
                                onClick={() => cambiarCompartir(!compartir)}
                            ></i>
                            <p>Compartir</p>
                        </div>
                        <div className='w-auto'>
                            <i className="bi bi-download"></i>
                            <p>Guardar</p>
                        </div>
                    </div>
                </Opciones> */}

                <Opciones2 className='col-11 col-md-4 text-center mt-4 mt-md-0'>
                    <h6>¿Qué deseas hacer con tu Tarjeta?</h6>
                    <div className='contenedor'>
                        <div className='header'>
                            <h6>Tarjet Control</h6>
                        </div>
                        <div className='cuerpo d-flex justify-content-between'>
                            <div>
                                <img src={iconoFlechas} className="img-fluid" onClick={() => cambiarReverso(!reverso)}/>
                            </div>
                            <div>
                                { ver ?
                                    <img src={iconoOjo} className="img-fluid" onClick={() => cambiarVer(false)}/>
                                :
                                    <img src={iconoOjoSinRaya} className="img-fluid" onClick={() => cambiarVer(true)}/>
                                }
                            </div>
                            <div>
                                <img src={iconoCompartir} className="img-fluid" onClick={() => cambiarCompartir(!compartir)}/>
                            </div>
                            <div>
                                <img src={iconoGuardar} className="img-fluid"/>
                            </div>
                        </div>
                        <div className='footer d-flex justify-content-between text-center'>
                            <div>
                                <p>Girar</p>
                            </div>
                            <div>
                                <p>Ver/Ocultar</p>
                            </div>
                            <div>
                                <p>Compartir</p>
                            </div>
                            <div>
                                <p>Guardar</p>
                            </div>
                        </div>
                    </div>
                </Opciones2>

                <AnimatePresence>
                    { compartir && (
                        <motion.div 
                            className='row justify-content-around compartir'

                            initial={{opacity:0, scale: 0}}
                            animate={{opacity:1, scale:1}}
                            exit={{opacity:0, scale:0, y:-50}}
                        >
                            <div className='w-auto'>
                                <a href="">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </div>
                            <div className='w-auto'>
                                <a href="">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </div>
                            <div className='w-auto'>
                                <a href="">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                            <div className='w-auto'>
                                <a href="">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </TarjetaVistaContenedor>
        </>
    );
}

const TarjetaVistaContenedor = styled.div`
    margin-top: 6rem;
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0; 
    }
    div{
        position: static;
    }
    img{
        width: 100%;
        border-radius: 11px;
        box-shadow:
        0px 0px 2.7px rgba(0, 0, 0, 0.022),
        0px 0px 6.9px rgba(0, 0, 0, 0.031),
        0px 0px 14.2px rgba(0, 0, 0, 0.039),
        0px 0px 29.2px rgba(0, 0, 0, 0.048),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;
        @media screen and (max-width: 575px){
            width: 100%;
        }
    }
    .tarjeta-contenedor{
        /* height: 300px; */
        height: 241px;
        @media screen and (max-width: 575px){
            height: 198px;
        }
    }
    .compartir{
        position: absolute;
        z-index: 1;
        width: 50%;
        background: #fff;
        margin-top: 300px;
        padding: 15px;
        border-radius: 11px;    
        a{
            font-size: 20px;
            color: #000;
        }
    }
`;

const Opciones = styled.div`
    background: #fff;
    border-radius: 11px;
    padding: 5px 15px;
    padding-top:0;
    height: 100px;
    
    @media screen and (max-width: 575px){
        height: auto;
        margin-top: 1.3rem;
        padding: 5px 15px;
        padding-top:0;
    }

    i{
        font-size: 25px;
        padding: 0;
        cursor: pointer;
    }
    p{
        margin:0;
        font-size: 13px;
    }

    .headControl{
        background: #00aff0;
        padding: 5px 0;
        border-radius: 11px 11px 0px 0px;
        color: #fff;
        h6{
            margin:0;
        }
    }
`;

// const Compartir = styled.div`
//     position: fixed;
//     width: 50%;
//     background: #fff;
//     margin-top: 10px;
//     padding: 15px;
//     border-radius: 11px;    

//     a{
//         font-size: 20px;
//         color: #000;
//     }
// `;

const Opciones2 = styled.div`
    /* background: #aed7ca; */
    background: #c1e1d7;
    padding: 20px;
    border-radius: 11px;
    color: #fff;
    
    @media screen and (max-width: 575px){
        padding: 20px 10px;
    }

    h6{
        color: #007f5b;
    }

    .contenedor{
        border-radius: 11px;
        width: 90%;
        margin: auto;
        @media screen and (max-width: 575px){
            width: 100%;
        }
        .header{
            background: #007f5b;
            padding: 7px;
            border-radius: 11px 11px 0 0;
            h6{
                color:#fff;
                margin: 0;
            }
        }
        .cuerpo{
            background: #43af8d;
            padding: 5px 0;
            div{
                img{
                    box-shadow: none;
                    width: 50%;
                    cursor: pointer;
                }
            }
        }
        .footer{
            background: #007f5b;
            padding: 5px 25px;
            border-radius: 0 0 11px 11px;
            @media screen and (max-width: 575px){
                padding: 5px 20px;
            }
            div{
                /* background-color: red; */
            }
            p{
                font-size: 15px;

                @media screen and (max-width: 575px){
                    width: 100%;
                    font-size: 13px;
                }
                margin: 0;
            }
        }
    }
`;

export default TarjetaVista;