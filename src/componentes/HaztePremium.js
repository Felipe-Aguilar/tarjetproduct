import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import BannerPremium1 from '../assets/BannerPremium1.png';
import BannerPremium2 from '../assets/BannerPremium2.png';
import BannerPremium3 from '../assets/BannerPremium3.png';
import PersonaMovimiento from '../assets/PersonaMovimiento.png';
import ChicaDatos from '../assets/ChicaDatos.png';
import TarjetaPremium from '../assets/TarjetaPremium.png';
import Radar from '../assets/radar.png';
import PersonasMundo from '../assets/PersonasMundo.png';
import Tarjetas from '../assets/tarjetas.png';
import Restaurante from '../assets/restaurante.png';

import Promoo from '../assets/Promoo.png';


const HaztePremium = () => {
    return (

        <>
            <Slider className='row justify-content-center'>
                <div className='col-8 p-0'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner marginn">

                            <div className="carousel-item active" data-interval="4000">
                                <div className='row justify-content-center align-items-center slider-personalizado'>
                                    <div className='col-6'>
                                        <h1>Es la forma profesional y fácil</h1>
                                        <h4>de compartir tus servicios o prodcutos de una forma profesional</h4>
                                    </div>
                                    <div className='w-auto '>
                                        <img src={Promoo} alt=""/>
                                    </div>
                                </div>

                                <div className='row slider-personalizado slider-mobile d-block d-md-none'>
                                    <h1>Es la herramienta perfecta</h1>
                                    <h4>para compartir tus servicios o productos de uan forma sencilla y profesional.</h4>
                                    <img src={Promoo} alt=""/>
                                </div>
                            </div>
                            {/* <div class="carousel-item active" data-interval="4000">
                                <img src={BannerPremium1} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div>
                            <div class="carousel-item" data-interval="4000">
                                <img src={BannerPremium2} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div>
                            <div class="carousel-item" data-interval="4000">
                                <img src={BannerPremium3} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div> */}
                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Slider>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>Tu tarjeta de presentación Virtual</h6>
                    <h5>a otro Nivel.</h5>
                </div>
            </div>

            <DiseñosTarjet className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor diseños'>
                    <p>
                        Elije <span>diseños</span> exclusivos de Tarjet y TarjetSite
                    </p>
                    <motion.img 
                        src={PersonaMovimiento} 
                        alt="Tarjet | Tu tarjeta de presentación Online"

                        whileInView={{rotate: [0, 5,-5,0]}}
                        // whileInView={{scale: [1,1.1,1]}}
                        // whileInView={{x:[0,5,-5,0]}}
                        transition={{repeat: Infinity, duration: 2}}
                    />
                    <p className='float-left'>
                        incluso con movimiento
                    </p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor tarjet'>
                    <p>
                        <span>TarjetSite es Gratis, pero con <span>Premium</span> podrás Subir tu fotografía con un diseño genial.</span>
                    </p>
                    <motion.img 
                        src={ChicaDatos} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        initial={{scale:0}}
                        whileInView={{scale:1}}
                        transition={{delay:1}}
                    />
                </div>
            </DiseñosTarjet>

            <Logotipo className='row mt-4 justify-content-center'>

                <div className='col-11 col-md-8 contenedor'>
                    <p>
                        Agrega el logotipo de tu negocio a tu Tarjet y Tarjet Site
                    </p>
                    <p className='mt-4'>
                        Aquí tu logotipo
                    </p>
                    <motion.img 
                        src={TarjetaPremium} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:[1,1.1,1]}}
                        whileTap={{scale: 1}}
                        viewport={{once:true}}
                    />
                </div>
            </Logotipo>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-8 text-center'>
                    <p>
                        <b>El buscador de Tarjet</b> es ideal para aquellos que buscan un servicio o un producto determinado, y es gratis en un rango de 3kms.
                    </p>
                </div>
            </div>

            <PremiumConfigura className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor premium'>
                    <p>
                        Con <span>Premium</span> no existen límites ya que las personas podrán encontrar tus servicios en un rango mayor. 
                    </p>
                    <motion.img 
                        src={Radar} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        initial={{opacity:0}}
                        whileInView={{opacity: 1}}
                        whileTap={{x:-20}}
                    />
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor configura'>
                    <p>
                        Configura el rango en el que deseas ser localizado, incluso a nivel Nacional y atrearás y más <span>clientes</span>
                    </p>
                    <motion.img 
                        src={PersonasMundo} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:[1,1.1,1]}}
                        whileTap={{scale:1}}
                        viewport={{once:true}}
                    />
                </div>
            </PremiumConfigura>

            <div className='row mt-4 justify-content-center text-center'>
                <div className='w-75'>
                    <h5>Más espacio en tu Tarjet y TarjetSite</h5>
                </div>
            </div>

            <TarjetEmpresa className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor TarjetSite'>
                    <p>TarjetSite te permite subir hasta 4 imágenes Gratis de tus servicios.</p>
                    <p>
                        Con <span>Premium podrás subir hasta 10 imágenes.</span>
                    </p>
                    <motion.img 
                        src={Tarjetas} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:[1,1.1,1]}}
                        whileTap={{scale:1}}
                        viewport={{once:true}}
                    />
                </div>

                <div className='col-11 col-md-4 contenedor empresa'>
                    <p>
                        Si tienes una empresa o negocio con 2 o más participantes, visita nuestro apartado empresas o contáctanos. 
                    </p>
                    <motion.img 
                        src={Restaurante} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:[1,1.1,1]}}
                        whileTap={{scale:1}}
                        viewport={{once:true}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </TarjetEmpresa>

        </>

    );
}

const HaztePremiumContenedor = styled.div`
    
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        background: #fff;
        border-radius: 20px;
        padding: 0;
    }
    
    .contenedor1{

        img{
            width: 100%;
            border-radius: 20px 20px 0 0;
        }

        .info{
            width: 100%;
            padding: 15px 20px;

            h6{
                margin-bottom: 15px;
            }
            .mensuales{
                line-height: 17px;
                span{
                    font-size: 20px;
                    font-weight: 600;
                }
            }
            .diferencia{
                text-align: center;
            }
            .elije{
                span{
                    font-size: 20px;
                }
            }
        }
    }

    .contenedor2{
        padding: 15px 20px;

        h6{
            text-align: center;
            font-weight: 600;
        }
    }
`;

const Slider = styled.div`
    margin-top: 5rem;

    .marginn{
        border-radius: 20px;
    }
    
    .slider-personalizado{
        padding: 40px 20px;
        background: #00afef;
        color: #fff;
        height: 80vh;

        @media screen and (max-width: 575px){
            display: none;
        }

        img{
            width: 300px;
        }
    }

    .slider-mobile{
        padding: 30px;
        background: #00afef;
        color: #fff;

        h1{
            font-size: 30px;
        }
        h4{
            font-size: 20px;
            width: 60%;
        }

        img{
            width: 215px;
            /* float: right; */
            position: absolute;
            bottom: 35px;
            right: 30px;
        }
    }
`;

const DiseñosTarjet = styled.div`

    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .diseños{
        background: #ed2f59;
        img{
            width: 65%;
            float: right;
        }
    }
    .tarjet{
        background: #00a859;

        p{
            @media screen and (max-width: 575px){
                margin-bottom: 250px;
            }
        }

        img{
            width: 70%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`;

const Logotipo = styled.div`
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #5ca47a;

        p{
            width: 40%;
            @media screen and (max-width: 575px){
                width: 100%;
            }
            span{
                font-size: 20px;
            }
        }
        img{
            width: 50%;
            float: right;
            @media screen and (max-width: 575px){
                width:100%;
            }
        }

    }
`;

const PremiumConfigura = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #0d82ae;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .premium{
        img{
            width: 70%;
            float: right;

            @media screen and (max-width: 575px){
                width: 90%;
            }
        }
    }
    .configura{
        img{
            width: 100%;
            float: right;
        }
    }
`;

const TarjetEmpresa = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .TarjetSite{
        background: #6a9493;
        img{
            width: 100%;
            float: right;
        }
    }
    .empresa{
        background: #fff;
        color: #212529;

        img{
            width: 100%;
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            padding: 0;
            outline: none;
            float: right;
            margin-top: 10px;
        }
    }
`;
export default HaztePremium;