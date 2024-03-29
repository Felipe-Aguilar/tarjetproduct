import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FileSaver from 'file-saver';


import ImageModal from './ImageModal';
import iconoFacebook from '../../assets/iconoFacebook.png';
import iconoInstagram from '../../assets/iconoInstagram.png';
import iconoTelegram from '../../assets/iconoTelegram.png';
import iconoTwitter from '../../assets/iconoTwitter.png';
import iconoYoutube from '../../assets/iconoYoutube.png';
import iconoTiktok from '../../assets/iconoTiktok.png';
import iconoTarjet from '../../assets/iconoTarjet.png';

import perfilTemporal from '../../assets/perfiltemporal.jpg';
import IconServicios from '../../assets/iconos-servicios-site-tarjet.svg';
import IconFolleto from '../../assets/iconos-folleto-site-tarjet.svg';
import imgServicio from '../../assets/servicioRediseño.jpg';
import socialFacebook from '../../assets/icono-face-on-site.svg';
import socialFacebookOff from '../../assets/icono-face-off-site.svg';
import socialInstagram from '../../assets/icono-insta-on-site.svg';
import socialInstagramOff from '../../assets/icono-insta-off-site.svg';
import socialTikTok from '../../assets/icono-tiktok-on-site.svg';
import socialTikTokOff from '../../assets/icono-tiktok-off-site.svg';
import socialTwitter from '../../assets/icono-twitter-on-site.svg';
import socialTwitterOff from '../../assets/icono-twitter-off-site.svg';
import socialYoutube from '../../assets/icono-youtube-on-site.svg';
import socialYoutubeOff from '../../assets/icono-youtube-off-site.svg';
import socialLinkedIn from '../../assets/icono-linkedin-on-site.svg';
import socialLinkedInOff from '../../assets/icono-linkedin-off-site.svg';
import socialTelegram from '../../assets/icono-telegram-om-site.svg';
import socialTelegramOff from '../../assets/icono-telegram-off-site.svg';
import socialTarjet from '../../assets/icono-tarjet-on-site.svg';
import logoTarjet from '../../assets/logo-tarjet.svg';
import promoImg from '../../assets/tarjeta-promo.webp';


const TarjetSite = () => {

    const navigate = useNavigate();

    const { pageId } = useParams();
    const [comprobarUsuario, setComprobarUsuario] = useState([]);
    const [ usuario, setUsuario ] = useState([]);
    const [ token, setToken ] = useState([]);
    const [datos, setDatos] = useState([]);

    const [servicios, setServicios] = useState([]);
    const [descServicios, setDescServicios] = useState([]);
    const [imagenServicios, setImagenServicios] = useState([]);
    const [imagenSubtitulo, setImagenSubtitulo] = useState([]);
    const [serviciosVideo, setServiciosVideo] = useState([]);

    const [vistaImageModal, setVistaImageModal] = useState(false);
    const [imgModal, setImgModal] = useState('');

    const [popGuardar, setPopGuardar] = useState(false);
    const localSesion = localStorage.getItem('UsuarioSesion');
    
    useEffect(()=>{

        const ConsultaUsuario = async () => {
            const comprobar = await ComprobarUsuario(atob(pageId));
            setComprobarUsuario(comprobar);


            const datosUsuarios = await DatosUsuarioTarjetSite(comprobar.usuId);
            setUsuario(datosUsuarios.SDTSite);
            
            // Token Usuario
            const datoToken = await DatosUsuario(comprobar.usuId);
            setDatos(datoToken);
            setToken(datoToken.UsuToken);

            // Servicios
            const datosServicios = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 1).map(servicio => servicio);
            setServicios(datosServicios);

            // Servicios Descripción Imagen
            const datosServiciosImagen = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio.SiteServDescrip);
            setDescServicios(datosServiciosImagen);

            // Servicios Imagen
            const imagenServiciosImagen = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio.SiteServIMG);
            setImagenServicios(imagenServiciosImagen);

            // Servicios Imagen subtítulo
            const datosServiciosImagenSubtitulo = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio.SiteServSubTitulo);
            setImagenSubtitulo(datosServiciosImagenSubtitulo);

            // Servicios Video
            const datosServiciosVideo = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 3).map(servicio => servicio);
            setServiciosVideo(datosServiciosVideo);
        }
        
        ConsultaUsuario();
    },[]);

    const imagenSRC = 'https://tarjet.site/imagenes/encabezados/';
    const imagenServicio = 'https://tarjet.site/imagenes/servicios/';
    const videoURL = 'https://tarjet.site/imagenes/videos/';

    const urlMaps = `https://www.google.com/maps?q=${usuario.UsuMapsCoord}`;
    
    // Comprobando si existe o no
    if(comprobarUsuario.usuId === 0) return null;

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    };

    // Imagen Modal
    const abrirImagen = async(imagen) =>{
        const img = await imagen;
        setImgModal(img);
        setVistaImageModal(true);
    }
    const cerrarImagen = () => {
        setVistaImageModal(false);
    }

    // Guardar contacto
    const GuardaContacto = () => {
        console.log(datos);
        const data = {
            firstName: 'Felipe',
            lastName: 'Aguilar',
            title: 'Desarrollador Web',
            email: 'felipe@correo.com',
            mobile: '5560078218',
            work: 'TekRobot',
            location: 'México'
        };

        const content = `BEGIN:VCARD
VERSION:3.0
N:${datos.NombreCompleto};;;
FN:${datos.NombreCompleto}
TITLE:${datos.UsuEncabezado};
EMAIL;type=INTERNET;type=pref:${usuario.SiteMail}
TEL;type=MAIN:${datos.UsuActividad}
TEL;type=CELL;type=VOICE;type=pref:${usuario.SiteTelefono2}
ADR;type=WORK;type=pref:;;;${usuario.UsuColonia};;;
END:VCARD`;

        const blob = new Blob([content], { type: "text/vcard;charset=utf-8" });
        FileSaver.saveAs(blob, `${datos.NombreCompleto}.vcf`, true);
    }

    const redesSociales = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    const animacionBtn = {
        initial :{opacity:0 , y: -20},
        whileInView:{y:0, opacity: 1},
        viewport: {once:true}
    }

    return ( 
        <div className='tarjetSite' style={{background: usuario.SiteFondo}}>
            <div className='row justify-content-center encabezado'>
                <div className='col-12 col-md-4 p-0'>
                    <img src={imagenSRC+usuario.SiteImgEncabezado} className='img-fluid'/>
                </div>
            </div>

            <div className='row justify-content-center perfil'>
                <div className='col-12 col-md-4 contenedor'>
                    <img src={perfilTemporal} />
                    <div>
                        <h5>{datos.NombreCompleto}</h5>
                        <p>
                            {datos.UsuEncabezado}
                        </p>
                    </div>
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>

                <div className='col-md-4 contacto2'>

                    <motion.div 
                        className='mb-3'
                        {...animacionBtn}
                        transition={{delay: 0.2}}
                        style={usuario.SiteColorBton1 ? {background: `${usuario.SiteColorBton1}`} : {background: '#dce6ec'}}
                    >
                        <a onClick={GuardaContacto} className='save'>
                            Guardar Contacto
                        </a>
                        <a 
                            onClick={GuardaContacto} 
                            className='icon save'
                            style={usuario.SiteColorBton2 ? {background: `${usuario.SiteColorBton2}`} : {background: '#4186a0'}}
                        >
                            <i className="bi bi-download"></i>
                        </a>
                    </motion.div>

                    { !usuario.SiteTelefono2 == '' &&
                        <motion.div 
                            className='mb-3' 
                            style={{background: '#d0ead6'}}
                            {...animacionBtn}
                            transition={{delay: 0.4}}
                        >
                            <a href={"https://wa.me/"+usuario.SiteTelefono2} target={"_blank"}>
                                Envíame un WhatsApp
                            </a>
                            <a href={"https://wa.me/"+usuario.SiteTelefono2} target={"_blank"} className='icon' style={{background: '#00943e'}}>
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </motion.div>
                    }

                    { !usuario.SiteTelefono3 == '' &&
                        <motion.div 
                            className='mb-3' 
                            style={{background: '#d0ead6'}}
                            {...animacionBtn}
                            transition={{delay: 0.5}}
                        >
                            <a href={"https://wa.me/"+usuario.SiteTelefono3} target={"_blank"}>
                                Envíame un WhatsApp
                            </a>
                            <a href={"https://wa.me/"+usuario.SiteTelefono3} target={"_blank"} className='icon' style={{background: '#00943e'}}>
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </motion.div>
                    }

                    { usuario.SiteVerUbica == 1 &&
                        <motion.div 
                            className='mb-3' 
                            style={{background: '#ffecd2'}}
                            {...animacionBtn}
                            transition={{delay: 0.6}}
                        >
                            <a href={urlMaps} target={"_blank"}>
                                {usuario.SiteTextoUbica} <br/>
                                {usuario.UsuColonia}
                            </a>
                            <a href={urlMaps} target={"_blank"} className='icon' style={{background: '#ffa200'}}>
                                <i className="bi bi-geo-alt-fill"></i>
                            </a>
                        </motion.div>
                    }

                        <motion.div 
                            className='mb-3' 
                            style={{background: '#e1dcf4'}}
                            {...animacionBtn}
                            transition={{delay: 0.8}}
                        >
                            <a href={urlMaps} target={"_blank"}>
                                Comparte mi tarjeta
                            </a>
                            <a href={urlMaps} target={"_blank"} className='icon' style={{background: '#5060c6'}}>
                                <i className="bi bi-geo-alt-fill"></i>
                            </a>
                        </motion.div>

                    { !usuario.SiteMail == '' &&
                        <motion.div 
                            className='mb-3'
                            {...animacionBtn}
                            transition={{delay: 1}}
                            style={{background: '#d4e0f6'}}
                        >
                            <a href={"mailto: "+usuario.SiteMail}>
                                {usuario.SiteMail}
                            </a>
                            <a href={"mailto: "+usuario.SiteMail} className='icon' style={{background: '#0073ce'}}>
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </motion.div>
                    }

                    { !usuario.SiteWeb == '' &&
                        <motion.div 
                            className='mb-3'
                            style={{background: '#e1dcf4'}}
                            {...animacionBtn}
                            transition={{delay: 1.2}}
                        >
                            <a href={`https://${usuario.SiteWeb}`} target='_blank'>
                            {usuario.SiteWeb}
                            </a>
                            <a href={`https://${usuario.SiteWeb}`} target='_blank' className='icon' style={{background: '#5060c6'}}>
                                <i className="bi bi-globe-americas"></i>
                            </a>
                        </motion.div>
                    }

                    <motion.div 
                        className='mb-3'
                        {...animacionBtn}
                        transition={{delay: 1.4}}
                        style={{background: '#99c748'}}
                    >
                        <a onClick={()=>navigate("/"+btoa(token))} className='save'>
                            Ver mi tarjeta
                        </a>
                        <a onClick={()=>navigate("/"+btoa(token))} className='icon save' style={{background: '#678731'}}>
                            <i className="bi bi-person-vcard"></i>
                        </a>
                    </motion.div>

                    <motion.div 
                        {...animacionBtn}
                        transition={{delay: 1.6}}
                        style={{background: '#f1d1d9'}}
                    >
                        <a onClick={redesSociales} className='save'>
                            Mis Redes Sociales
                        </a>
                        <a 
                            onClick={redesSociales} 
                            className='icon save'
                            style={{background: '#9b034f'}}
                        >
                            <i className="bi bi-link-45deg"></i>
                        </a>
                    </motion.div>

                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center Servicios1'>
                <div className='col-11 col-md-4'>
                    <h5>Estética profesional canina</h5>
                    <img src={IconServicios} />
                    <h6>Servicios</h6>
                    <ul>
                        <li>Hospedaje y guardería</li>
                        <li>Estética canina - boutique</li>
                        <li>Accesorios para tu mascota</li>
                        <li>Productos de higiene</li>
                        <li>Juguetes</li>
                        <li>Alimento</li>
                    </ul>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center Servicios2'>
                <div className='col-11 col-md-4'>
                    <div className='icon'>
                        <img src={IconFolleto} />
                    </div>
                    <h5>¡Ven y dale a tu mascota un apapacho de amor!</h5>
                    <img src={imgServicio} />
                    <h6>Transformando a tu mascota en una obra de arte.</h6>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center redesRediseño'>
                <div className='col-12 col-md-4'>
                    <h5>Mis redes sociales</h5>
                    <div className='iconos'>
                        <a 
                            href = {`https://www.facebook.com/${usuario.SiteFacebook}`}
                            className={!usuario.SiteFacebook && 'desactivado'}
                        >
                            <img src={usuario.SiteFacebook ? socialFacebook : socialFacebookOff} />
                        </a>

                        <a 
                            href = {`https://www.instagram.com/${usuario.SiteFacebook}`}
                            className={!usuario.SiteInstagram && 'desactivado'}
                        >
                            <img src={usuario.SiteInstagram ? socialInstagram : socialInstagramOff} />
                        </a>

                        <a 
                            href = {`https://www.tiktok.com/@${usuario.SiteTiktok}`}
                            className={!usuario.SiteTiktok && 'desactivado'}
                        >
                            <img src={usuario.SiteTiktok ? socialTikTok : socialTikTokOff} />
                        </a>

                        <a 
                            href = {`https://www.twitter.com/${usuario.SiteTwitter}`}
                            className={!usuario.SiteTwitter && 'desactivado'}
                        >
                            <img src={usuario.SiteTwitter ? socialTwitter : socialTwitterOff} />
                        </a>
                    </div>
                    <div className='iconos'>
                        <a 
                            href = {`https://www.youtube.com/${usuario.SiteYoutube}`}
                            className={!usuario.SiteYoutube && 'desactivado'}
                        >
                            <img src={usuario.SiteYoutube ? socialYoutube : socialYoutubeOff} />
                        </a>

                        <a 
                            href = {`https://www.linkedin.com/${usuario.SiteLinkedin}`}
                            className={!usuario.SiteLinkedin && 'desactivado'}
                        >
                            <img src={usuario.SiteLinkedin ? socialLinkedIn : socialLinkedInOff} />
                        </a>

                        <a 
                            href = {`https://msng.link/o?${usuario.SiteTelegram}=tg`}
                            className={!usuario.SiteTelegram && 'desactivado'}
                        >
                            <img src={usuario.SiteTelegram ? socialTelegram : socialTelegramOff} />
                        </a>
                        
                        <a onClick={()=> navigate("/"+btoa(token))}>
                            <img src={socialTarjet} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center Promo'>
                <div className='col-11 col-md-4'>
                    <h4>Gracias por visitarme</h4>
                    <p>Tarjeta digital tarjet</p>
                    <p>Nombre de usuario en directorio tarjet:</p>
                    <p>
                        <span>@usuariotarjet</span>
                    </p>

                    <div className='cuerpo'>
                        <img src={logoTarjet} className='logoTarjet' />
                        <h5 className='contact'>Contectamos a personas con tu negocio</h5>
                        <h5>
                            Te agradó esta tarjeta digital <br/>
                            <span>Tú también puedes tener la tuya</span>
                        </h5>
                        <a href="" className='btn-verde'>
                            Solicita gratuitamente <br/> tu tarjeta digital Tarjet
                        </a>
                        <h5>
                            Actualízate <br/>
                            <span>Genera un impacto positivo con tu tarjeta Física Tarjet</span>
                        </h5>
                        <img src={promoImg} className='img-promo'/>
                        <a href="" className='btn-naranja'>
                            Compra tu <br/>
                            tarjeta física Tarjet con NFC <br className='d-block'/>
                            <span>Es personalizada</span>
                        </a>
                        <h5>
                            <span>Hagamos Networking</span> <br/>
                            En nuestro directorio puedes ser encontrado fácilmente por personas que buscan lo que haces
                        </h5>
                        <a href="" className='btn-morado'>
                            Regístrate gratuitamente <br/>
                            <span>y accede a tu tarjetero digital tarjet</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center teInvitamos'>
                <div className='col-11 col-md-4'>
                    <a href="">
                        Te invitamos a conocernos, <br/>
                        visita nuestro sitio oficial
                    </a>
                </div>
            </div>

            {/* { servicios.length > 0 &&
                <>
                <div className='row justify-content-center sliderServicios'>
                    <div className='col-11 col-md-4'>
                        <h5>
                            { usuario.SiteTituloServ == '' ?
                                "Mis Servicios"
                            :
                                usuario.SiteTituloServ
                            }
                        </h5>

                        <Slider {...settings}>
                            { servicios.map((servicio, index)=>(
                                // <div className='cuerpo d-flex align-items-center' key={index}>
                                <div className='cuerpo ' key={index}>
                                    { !servicio.SiteServSubTitulo[index] == '' &&
                                        <p 
                                            className='d-block text-center' 
                                            style={{marginTop: '16px', fontWeight: 'bold', textTransform: 'uppercase'}}
                                        >
                                            {servicio.SiteServSubTitulo}
                                        </p>
                                    }
                                    <p>
                                        {servicio.SiteServDescrip}
                                    </p>
                                </div>
                            ))
                            }
                        </Slider>
                    </div>
                </div>

                <div className='row mt-4 justify-content-center'>
                    <div className='col-11 col-md-4 p-0'>
                        <hr/>
                    </div>
                </div>
                </>
            } */}

            {/* {   descServicios.length > 0 &&
                <>
                <div className='row justify-content-center masServicios'>
                    <div className='col-11 col-md-4'>
                        <h5>
                            { usuario.SiteTituloServ2 == '' ?
                                "Más de mis servicios"
                            :
                                usuario.SiteTituloServ2
                            }
                            
                        </h5>

                        { serviciosVideo && 
                            <>
                                { serviciosVideo.map((servicio, index) => (
                                    <div className='cuerpo mb-5'>
                                        <p>
                                            {servicio.SiteServDescrip}
                                        </p>
                                        <video 
                                            width="100%"
                                            src={videoURL+servicio.SiteServIMG}
                                            autoPlay
                                            loop
                                            controls
                                            muted
                                        ></video>
                                    </div>
                                    ))
                                }
                            </>
                        }

                        { descServicios.map((servicio, index)=>(
                            <div className='cuerpo mb-5' key={index}>

                                { !imagenSubtitulo[index] == '' &&
                                    <p className='subtitulo'>
                                        <span>
                                            {imagenSubtitulo[index]}
                                        </span>
                                    </p>
                                }

                                <p>
                                    {servicio}
                                </p>
                                <motion.img
                                    initial={{opacity: 0}}
                                    whileInView={{opacity:1}}
                                    viewport={{ once: true }}
                                    src={imagenServicio+imagenServicios[index]} 
                                    className='img-fluid'
                                    onClick={()=>abrirImagen(imagenServicio+imagenServicios[index])}
                                />
                            </div>
                        ))
                        }
                    </div>
                </div>

                { vistaImageModal && 
                    <ImageModal imgModal={imgModal} cerrarImagen={cerrarImagen}/>
                }

                { popGuardar &&
                    <div className='popup-guardar'>
                        <motion.div
                            className='cuerpo'
                            initial={{scale:0, opacity:0}}
                            animate={{opacity:1, scale:1}}
                        >
                            <div className='encabezado'>
                                <button onClick={()=>setPopGuardar(false)}>
                                    <i className="bi bi-x"></i>
                                </button>
                            </div>
                            <div className='cuerpo-guardar'>
                                <h6>¿Deseas guardar este contacto ahora?</h6>
                            </div>
                            <hr/>
                            <div className='text-center'>
                                <button onClick={GuardaContacto} >Guardar</button>
                            </div>
                        </motion.div>
                    </div>
                }

                <div className='row mt-1 justify-content-center'>
                    <div className='col-11 col-md-4 p-0'>
                        <hr/>
                    </div>
                </div>
                </>
            } */}

            {/* <div className='row mt-1 justify-content-center'>
                <div className='col-12 col-md-4 btn-contacto p-0'>
                    <button
                        onClick={()=>window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })}
                    >
                        ¡Contáctame ahora!
                    </button>
                    <hr/>
                </div>
            </div> */}

            {/* <div className='row mt-2 justify-content-center redesSociales2'>
                <div className='col-12 col-md-4 contenedor'>
                    <h5 className='p-2'>Mis redes sociales</h5>
                    <div className='d-flex cuerpo'>

                            <div>
                                <button onClick={()=> navigate("/"+btoa(token))}>
                                    <img src={iconoTarjet} className='img-fluid' />
                                </button>
                            </div>
                            
                            <div className='d-flex align-items-center'>
                                <a href={`https://www.facebook.com/${usuario.SiteFacebook}`} target='_blank' className={ usuario.SiteFacebook == '' ? 'desactivado' : ''}>
                                    <img src={iconoFacebook} className='img-fluid' />
                                </a>
                            </div>    

                            
                            <div className='d-flex align-items-center'>
                                <a href={`https://www.instagram.com/${usuario.SiteInstagram}`} 
                                    className={ usuario.SiteInstagram == '' ? 'desactivado' : ''}
                                    target='_blank'
                                >
                                    <img src={iconoInstagram} className='img-fluid' />
                                </a>
                            </div>
                                

                            <div className='d-flex align-items-center'>
                                <a href={`https://msng.link/o?${usuario.SiteTelegram}=tg`} 
                                    className={ usuario.SiteTelegram == undefined ? 'desactivado' : ''}
                                    target='_blank'
                                >
                                    <img 
                                        src={iconoTelegram} 
                                        className='img-fluid'
                                    />
                                </a>
                            </div>

                            { usuario.SiteTwitter == '' &&
                            <div className='d-flex align-items-center'>
                                <a href={`https://twitter.com/${usuario.SiteTwitter}`} 
                                    className={usuario.SiteTwitter == '' ? 'desactivado' : ''}
                                    target='_blank'
                                >
                                    <img src={iconoTwitter} className='img-fluid' />
                                </a>
                            </div>
                            }
                            
                            { usuario.SiteYoutube == '' &&
                                <div className='d-flex align-items-center'>
                                    <a href={`https://www.youtube.com/${usuario.SiteYoutube}`} 
                                        className={usuario.SiteYoutube == '' ? 'desactivado' : ''}
                                        target='_blank'
                                    >
                                        <img 
                                            src={iconoYoutube} 
                                            className='img-fluid' 
                                        />
                                    </a>
                                </div>       
                            }
                            
                            { usuario.SiteInstagram == '' &&
                                <div className='d-flex align-items-center'>
                                    <a href={`https://www.tiktok.com/${usuario.SiteInstagram}`} 
                                        className={usuario.SiteInstagram == '' ? 'desactivado' : ''}
                                        target='_blank'
                                    >
                                        <img src={iconoTiktok} className='img-fluid' />
                                    </a>
                                </div>
                            }
                    </div>                    
                </div>
            </div> */}
        </div>
    );
}

export default TarjetSite;