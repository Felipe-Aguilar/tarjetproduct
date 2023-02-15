import React, {useState,useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import celularPromo1 from '../../assets/celularPromo1.png';
import celularPromo2 from '../../assets/celularPromo2.png';
import celularPromo3 from '../../assets/celularPromo3.png';
import BannerTarjetaVirtual from '../../assets/BannerTuTarjetaVirtual.png';

import tarjetaAlberto from '../../assets/TarjetaAlberto.png';
import TarjetaBrenda from '../../assets/TarjetaBrenda.jpg';
import TarjetaFelipe from '../../assets/TarjetaFelipe.jpg';
import TarjetaPaco from '../../assets/TarjetaPaco.jpg';

import Mano3D from '../../assets/Mano3D.png';
import CirculoLink from '../../assets/CirculoLink.png';

const TarjetProd = ({usuarios}) => {
    
    const { pageId } = useParams();
    const { empresaId } = useParams();

    const usuario = usuarios.find(usuario => usuario.id === atob(pageId) && usuario.empresaId === atob(empresaId));

    if (!usuario) return null;

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    // const [canvasContext, setCanvasContext] = useState(null);
    // const canvasRef = useRef(null);
    // const canvasRefMobile = useRef(null);

    // useEffect(()=>{

    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');

    //     const img = new Image();
    //     img.src = tarjetaAlberto;
    //     context.drawImage(img, 0, 0,397, 238);
    //     context.font = "bold 20px serif";
    //     context.fillStyle = "#fff";

    //     context.fillText('FELIPE AGUILAR' ,190, 160);
    //     context.fillText('DESARROLLADOR' ,190, 190);
    //     setCanvasContext(context);
    // });

    // Canvas Mobile
    // useEffect(()=>{
    //     const canvas = canvasRefMobile.current;
    //     const context = canvas.getContext('2d');

    //     const img = new Image();
    //     img.src = tarjetaAlberto;
    //     context.drawImage(img, 0, 0,330, 198);
        
    //     context.font = "bold 20px serif";
    //     context.fillStyle = "#fff";
    //     context.fillText('FELIPE AGUILAR' ,150,140);
    //     context.fillText('DESARROLLADOR' ,145,165);
        
    //     setCanvasContext(context);
    // });

    return ( 
        <div className='tarjetProd'>
            <div className='row justify-content-center pruebas'>
                <div className='col-11 col-md-4 p-0'>
                    {/* <canvas ref={canvasRef} width={'397px'} height={'238px'}>
                    </canvas> */}
                    <p>
                        Toca la tarjeta para más información
                    </p>
                    <NavLink to={`/${btoa(usuario.id)}`}>
                        {   usuario.id == '00001' &&
                            <motion.div className='TarjetaContenedorVista'
                                initial={{opacity:0}}
                                whileInView={{opacity:1 , rotate: [0,-5,5,0]}}
                                viewport={{once:true}}
                                transition={{delay: 2, duration:1, type: "spring", damping:30}}
                            >
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </motion.div>
                        }
                        {   usuario.id == '00002' &&
                            <motion.div className='TarjetaContenedorVista TarjetaPaco'
                                initial={{opacity:0}}
                                whileInView={{opacity:1 , rotate: [0,-5,5,0]}}
                                viewport={{once:true}}
                                transition={{delay: 2, duration:1, type: "spring", damping:30}}
                            >
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </motion.div>
                        }
                        {   usuario.id == '00003' &&
                            <motion.div className='TarjetaContenedorVista TarjetaFelipe'
                                initial={{opacity:0}}
                                whileInView={{opacity:1 , rotate: [0,-5,5,0]}}
                                viewport={{once:true}}
                                transition={{delay: 2, duration:1, type: "spring", damping:30}}
                            >
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </motion.div>
                        }
                        {   usuario.id == '00004' &&
                            <motion.div className='TarjetaContenedorVista TarjetaBrenda'
                                initial={{opacity:0}}
                                whileInView={{opacity:1 , rotate: [0,-5,5,0]}}
                                viewport={{once:true}}
                                transition={{delay: 2, duration:1, type: "spring", damping:30}}
                            >
                                <img src={CirculoLink} className="circulo"/>
                                <motion.img 
                                    src={Mano3D} 
                                    className="mano"
                                    animate={{rotate: [0,20,0]}}
                                    transition={{repeat: Infinity, repeatDelay:2}}
                                />
                            </motion.div>
                        }
                        
                    </NavLink>
                    
                </div>
                <div className='col-11 col-md-8 d-none p-0' id='canvasMobile'>
                    {/* <canvas ref={canvasRefMobile} width={'330px'} height={'198px'} >
                    </canvas> */}
                </div>
            </div>

            <div className='row mt-2 justify-content-center text-center'>
                <div className='teEnvio'>
                    <h3>Hola!</h3>
                    <h4>Te envío mi tarjeta de presentación</h4>
                    <p>
                        Dale clic a mi tarjeta para más información
                    </p>
                </div>
            </div>

            <div className='row mt-2 justify-content-center mt-5'>
                <div className='col-11 col-md-4 banner'>
                    <img src={BannerTarjetaVirtual} className="img-fluid" />
                    <p>
                        Promoción válida únicamente para tarjetas personales, si necesita tarjetas para su empresa visite la sección Empresas en donde encontrará descuentos especiales.
                    </p>
                </div>
            </div>

            <div className='row justify-content-center boton'>
                <div>
                    <a href="https://wa.me/5586763895" target={"_blank"}>
                        Quiero mi Tarjet Gratis <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>

            <div className='row justify-content-center slider'>
                <div className='col-11 col-md-4'>
                    <Slider {...settings}>
                        <div>
                            <img src={celularPromo1} className="img-fluid" />
                        </div>
                        <div>
                            <img src={celularPromo2} className="img-fluid" />
                        </div>
                        <div>
                            <img src={celularPromo3} className="img-fluid" />
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    );
}

export default TarjetProd;