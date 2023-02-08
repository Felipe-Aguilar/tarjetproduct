import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Promo from '../assets/Promoo.png';
import Promo2 from '../assets/Promo2.png';
import Slider1 from '../assets/Slide1.jpg';
import Slider2 from '../assets/Slide2.jpg';
import Slider3 from '../assets/Slide3.png';
import Slider4 from '../assets/Slide4.png';
import Banner3 from '../assets/Banner32.png';
import Planes from '../assets/planes.png';
import TarjetaGratis from '../assets/tarjetaGratis.png';
import mundo from '../assets/mundo.png';
import Radar from '../assets/radar.png';
import mujer from '../assets/mujer.png';

const Informacion = () => {
    return (
        <>
            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5> <span>Tarjet es </span> la tarjeta de presentación Totalmente Gratis.</h5>
                </div>
            </div>

            <CelularPersonas className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor celular'>
                    <p>
                        La herramienta perfecta para compartir tus servicios o productos de una forma sencilla y profesional.
                    </p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                    />
                </div>
                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor personas'>
                    <img src={Banner3} 
                        alt="Tarjet | Tú tarjeta de presentación Online" 
                        className='img-fluid'
                    />
                    <p>
                        Y compartir la información de lo que haces, <span>a todo el mundo.</span>
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </CelularPersonas>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5>Tendrás un micrositio que muestra más sobre tu profesión o negocio.</h5>
                </div>
            </div>

            <SliderCrea className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 slider'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="3000">
                                <div className='contenedor'>
                                    <img src={Slider3} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="3000">
                                <div className='contenedor '>
                                    <img src={Slider1} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>

                            <div className="carousel-item" data-interval="3000">
                                <div className='contenedor'>
                                    <img src={Slider2} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='contenedor '>
                                    <img src={Slider4} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
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

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor crea'>
                    <h5>Crea tu Tarjet Gratis.</h5>
                    <p>Elige de nuestra galería el diseño que más te guste para tu Perfil.</p>
                    <motion.img 
                        src={Promo2} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        className='img-fluid'
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.2}}
                        whileInView={{rotate: [0,-5]}}
                        viewport={{once:true}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </SliderCrea>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5>
                        En nuestro buscador puedes ser encontrado fácilmente por personas que buscan lo que haces.
                    </h5>
                </div>
            </div>

            <MundoMujer className='row mt-4 justify-content-center'>

                <div className='col-11 col-md-4 contenedor radar'>
                    <p className='buscar'>
                        Buscar personas:
                    </p>
                    <label>Profesor de Piano</label>
                    <motion.img 
                        src={Radar} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once:true}}
                        whileTap={{scale: 1}}
                        />
                    <p>
                        Puedes hacer tu Tarjet pública o privada.
                    </p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor mundo'>
                    <p>
                        <span>Comparte</span> tu <span>Tarjet</span> las veces que quieras.
                    </p>
                    <p>
                        Y deja que te recomienden
                    </p>
                    <motion.img 
                        src={mundo} 
                        alt="Tarjet | Tu tarjeta de presentación online" 
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:[1,1.1,1]}}
                        transition={{ease:'easeOut'}}
                        viewport={{once:true}}
                        whileTap={{scale:1}}
                    />
                    <p>Sin costo alguno.</p>
                </div>
            </MundoMujer>

            {/* <PublicaCrea className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor publica'>
                    <p>
                        La herramienta perfecta para compartir tus servicios o productos de una forma sencilla y profesional.
                    </p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                        />
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor crea'>
                    <h5>Crea tu Tarjet Gratis.</h5>
                    <p>Elige de nuestra galería el diseño que más te guste para tu Perfil.</p>
                    <motion.img 
                        src={Promo2} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        className='img-fluid'
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.2}}
                        whileInView={{rotate: [0,-5]}}
                        viewport={{once:true}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </PublicaCrea> */}

            <ConfiguraCrea className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>Configura gratis!</h6>
                    <h5>Crea tu Tarjet y comparte tu información de manera profesional.</h5>
                    <a href="#">
                        Regístrate y Disfruta
                    </a>

                    <h5 className='mt-5'>También tenemos Tarjet para empresas</h5>
                </div>
            </ConfiguraCrea>

            <EmpresasPersonalizamos className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor tambien'>
                    <img src={Planes} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    <div className='planesInfo'>
                        <h5 className='mb-5'>También contamos con planes corporativos.</h5>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Ver planes <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>

                <div className='col-11 col-md-4 contenedor personalizamos mt-4 mt-md-0'>
                    <p>
                        Personalizamos la tarjeta virtual de los colaboradores de tu empresa. 
                    </p>
                    <p>
                        Brindamos una imagen única y diseños vanguardistas.
                    </p>
                    <p>
                        Fortalece el Networking entre clientes y tu empresa.
                    </p>
                    <p>
                        Administra la rotación de tu personal, de esta forma evitas fuga de clientes.
                    </p>
                    <p className='mb-5'>
                        Tus servicios y productos podrán aparecer en nuestro buscador.
                    </p>
                    <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Ver planes <i className="bi bi-arrow-right"></i>
                        </motion.button>
                </div>
            </EmpresasPersonalizamos>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto'>
                    <h5>Tarjet es una herramienta para todos.</h5>
                </div>
            </div>

            <AmarilloChica className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor amarillo'>
                    <div className='gratisInfo'>
                        <h5>
                            Es la mejor forma de llegar a más clientes.
                        </h5>
                    </div>
                    <motion.img 
                        src={TarjetaGratis} 
                        alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid' 
                        initial={{scale:0, x:-10}}
                        whileInView={{x:0 , scale: 1}}
                        viewport={{once:true}}
                    />
                    <div className='gratisInfo'>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Crea y configura Ya! <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor chica'>
                    <p>
                        No es necesario crear una tarjeta virtual para guardar, recomendar y recibir recomendaciones de Tarjet's
                    </p>
                    <img src={mujer} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Solo Regístrate <i className="bi bi-arrow-right"></i>
                        </motion.button>
                </div>

            </AmarilloChica>

        </>
    );
}

const CelularPersonas = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        background: #fff;
        border-radius: 20px;
        color: #000;
        padding: 30px;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }
    }
    .celular{
        background: #406fe8;
        color: #fff;
        img{
            width: 250px;
            /* margin-top: 20px; */
            float: right;

            @media screen and (max-width: 575px){
                width: 200px;
            }
        }
        .parrafo{
            position: absolute;
            bottom: 20px;
            width: 50%;
        }
    }
    .personas{
        p{
            margin-bottom: 80px;
        }
        button{
            position: absolute;
            right: 30px;
            bottom: 30px;
        }
        .telefonito{
            width: 60px;
            position: absolute;
            left: 175px;
            top: 145px;
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #000;
            padding: 0;
            margin-top: 30px;
            outline: none;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 30px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;

const SliderCrea = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        background: #fff;
        border-radius: 20px;
        color: #000;
        padding: 30px;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }
    }
    .slider{
        .contenedor{
        background: #3ea97b;
        border-radius: 20px;
        /* height: 500px; */
        padding: 0;
        color: #fff;
        display: block;
        margin: auto;
        
        img{
            border-radius: 20px;
        }
        }
    }
    .crea{
        background: #f58634;
        color: #000;
        
        h5{
            font-weight: 600;
        }
        img{
            margin-top: 30px;
            @media screen and (max-width: 575px){
                margin-bottom: 60px;
            }
        }
        button{
            position: absolute;
            bottom: 30px;
            right: 30px;
            border:none;
            font-size: 25px;
            background: transparent;
            padding: 0;
            margin-top: 30px;
            outline: none;
            float: right;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 30px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;

const MundoMujer = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
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

    .mundo{
        background: #12a3d9;
        overflow: hidden;

        img{
            width: 110%;
            /* float: right; */
            position: relative;
            left: 70px;
            top: -3px;
            
            @media screen and (max-width: 575px){
                width: 120%;
                left: 65px;
            }
        }
    }
    .radar{
        background: #0d82ae;

        .buscar{
            margin-bottom: 5px;
        }
        label{
            background: #e6e7e8;
            padding: 9px 40px 9px 10px;
            border-radius: 6px;
            color: #212529;
        }
        img{
            width: 90%;
            float: right;

            @media screen and (max-width: 575px){
                width: 100%;
            }
        }
    }
`;

const PublicaCrea = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
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
    .publica{
        background: #406fe8;
        img{
            width: 250px;
            /* margin-top: 20px; */
            float: right;

            @media screen and (max-width: 575px){
                width: 200px;
            }
        }
        .parrafo{
            position: absolute;
            bottom: 20px;
            width: 50%;
        }
    }
    .crea{
        background: #f58634;
        color: #000;
        
        h5{
            font-weight: 600;
        }
        img{
            margin-top: 30px;
            @media screen and (max-width: 575px){
                margin-bottom: 60px;
            }
        }
        button{
            position: absolute;
            bottom: 30px;
            right: 30px;
            border:none;
            font-size: 25px;
            background: transparent;
            padding: 0;
            margin-top: 30px;
            outline: none;
            float: right;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 30px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;

const ConfiguraCrea = styled.div`
    h5{
        margin-bottom: 20px;
    }
    a{
        background: #171717;
        color: #fff;
        padding: 7px 18px;    
        border-radius: 6px;
        text-decoration: none;
    }
`;

const EmpresasPersonalizamos = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #ad3534;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .tambien{
        padding: 0;
        
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            outline: none;
            float: right;
            margin-bottom: 30px;
        }
        img{
            width: 100%;
            border-radius: 20px 20px 0px 0px;
        }

        .planesInfo{
            padding: 30px;
        }
    }
    .personalizamos{
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            outline: none;
            position: absolute;
            right: 30px;
            bottom: 30px;
        }
    }
`;

const AmarilloChica = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
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
    .amarillo{
        background: #fbd208;
        padding: 0;
        color: #212529;

        .gratisInfo{
            padding: 30px;
            button{
                border:none;
                font-size: 25px;
                background: transparent;
                color: #212529;
                float: left;
                padding: 0;
                outline: none;
                margin-bottom: 30px;
            }
        }
    }
    .chica{
        background: #fff;
        color: #212529;

        img{
            width: 70%;
            display: block;
            margin: auto;
            margin-bottom: 20px;

            @media screen and (max-width: 575px){
                width: 90%;
            }
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #212529;
            float: left;
            padding: 0;
            outline: none;
        }
    }
`;


export default Informacion;