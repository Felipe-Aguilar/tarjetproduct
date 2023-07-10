import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';
import FileSaver from 'file-saver';

import IntersectionObserver from 'intersection-observer';

import IconServicios from '../../assets/iconos-servicios-site-tarjet.svg';
import IconFolleto from '../../assets/iconos-folleto-site-tarjet.svg';
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
import IconBtnGuardar from '../../assets/boton-contacto-site.svg';
import IconBtnWhats from '../../assets/boton-whats-site.svg';
import IconBtnUbi from '../../assets/boton-ubicacion-site.svg';
import IconBtnCompartir from '../../assets/boton-compartir-site.svg';
import IconBtnCorreo from '../../assets/boton-correo-site.svg';
import IconBtnWeb from '../../assets/boton-web-site.svg';
import IconBtnRedes from '../../assets/boton-redes-site.svg';

import PortadaMxm from '../../assets/mxm/portada-mxm.webp';
import PerfilLogo from '../../assets/mxm/logotipo-perfil.webp';
import logoPequeño from '../../assets/mxm/mxm-collection.svg';
import ImagenSite from '../../assets/mxm/imagen-site-mxm.webp';

import CinthiaVideo from '../../assets/mxm/mxmcinthia.mp4';
import CitlalliVideo from '../../assets/mxm/mxmcitlalli.mp4';
import ElyVideo from '../../assets/mxm/mxmely.mp4';
import MarleneVideo from '../../assets/mxm/mxmmarlene.mp4';
import MonseVideo from '../../assets/mxm/mxmmonse.mp4';
import PaulaVideo from '../../assets/mxm/mxmpaula.mp4';
import RobertoVideo from '../../assets/mxm/mxmroberto.mp4';

const Perfilmxm = () => {
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
            const imagenServiciosImagen = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio);
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
N:${'MxmCollection'};;;
FN:${'MxmCollection'}
TITLE:${'Fabrticantes de ropa de moda para dama'};
EMAIL;type=INTERNET;type=pref:${usuario.SiteMail}
TEL;type=MAIN:${'Fabrticantes de ropa de moda para dama'}
TEL;type=CELL;type=VOICE;type=pref:${usuario.SiteTelefono2}
ADR;type=WORK;type=pref:;;;${''};;;
END:VCARD`;

        const blob = new Blob([content], { type: "text/vcard;charset=utf-8" });
        FileSaver.saveAs(blob, `${'Mxm Collection'}.vcf`, true);
    }

    const redesSociales = () => {
        const seccDestino = document.getElementById('redesSocialesSecc');
        const offset = 100;

        const scrollToOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        }

        window.scrollTo({
            top: seccDestino.offsetTop - offset,
            ...scrollToOptions
        });
    }

    const animacionBtn = {
        initial :{opacity:0 , y: -20},
        whileInView:{y:0, opacity: 1},
        viewport: {once:true}
    }

    // Vendedores
    const personal = [
        { id:1, nombre: 'cinthia', video: CinthiaVideo, frase:'Con actitud positiva'},
        { id:2, nombre: 'citlalli', video: CitlalliVideo, frase:'Con gusto por los detalles'},
        { id:3, nombre: 'ely', video: ElyVideo, frase:'Con sentido de la moda'},
        { id:4, nombre: 'marlene', video: MarleneVideo, frase:'Encatadora y creativa'},
        { id:5, nombre: 'monse', video: MonseVideo, frase:'Con estilo y carismática'},
        { id:6, nombre: 'paula', video: PaulaVideo, frase:'Eficiente y amigable'},
        { id:7, nombre: 'roberto', video: RobertoVideo, frase:'Organizado y detallista'},
    ]
    // Vendedores aleatorios
    const personalAleatorio = () => {
        const vendedoresAleatorios = [...personal];
        vendedoresAleatorios.sort(() => Math.random()-0.5);
        return vendedoresAleatorios
    }

    // Reproducir videos en pantalla
    

    return ( 
        <div className='tarjetSite' style={{background: '#fff'}}>
            <div className='row justify-content-center encabezado bgMxm'>
                <div className='col-12 col-md-4 p-0'>
                    <img src={PortadaMxm} className='img-fluid'/>
                </div>
            </div>

            <div className='row justify-content-center perfil bgMxm'>
                <div className='col-12 col-md-4 contenedor'>
                    <img src={PerfilLogo} />
                    <div>
                        <h5>MXM COLLECTION</h5>
                        <p style={{textTransform: 'none'}}>
                            Fabricantes de ropa de moda para dama
                        </p>
                    </div>
                </div>
            </div>

            <div className='row pt-3 justify-content-center bgMxm'>

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
                            <img src={IconBtnGuardar}/>
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
                                <img src={IconBtnWhats}/>
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
                                <img src={IconBtnWhats}/>
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
                                <img src={IconBtnUbi}/>
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
                                <img src={IconBtnCompartir}/>
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
                                <img src={IconBtnCorreo}/>
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
                                <img src={IconBtnWeb}/>
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
                        onClick={redesSociales}
                        {...animacionBtn}
                        transition={{delay: 1.6}}
                        style={{background: '#f1d1d9'}}
                    >
                        <a className='save'>
                            Mis Redes Sociales
                        </a>
                        <a 
                            onClick={redesSociales} 
                            className='icon save'
                            style={{background: '#9b034f'}}
                        >
                            <img src={IconBtnRedes}/>
                        </a>
                    </motion.div>

                </div>
            </div>

            <div className='row pt-4 justify-content-center bgMxm'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center Servicios1 bgMxm'>
                <div className='col-11 col-md-4'>
                    <h5>Ropa de moda para dama</h5>
                    <img src={IconServicios} />
                    <h6>Servicios</h6>
                    <ul>
                        <li>Fabricante de ropa 100% mexicanos</li>
                        <li>Empoderando emprendedores</li>
                        <li>Venta exclusiva por mayoreo</li>
                        <li>18 años de experiencia</li>
                    </ul>
                </div>
            </div>

            <div className='row justify-content-center bgMxm'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            
            <div className='row justify-content-center Servicios2 bgMxm pb-0'>
                <div className='col-11 col-md-4'>
                    
                    <div className='icon'>
                        <img src={IconFolleto} />
                    </div>
                    
                    <div className='card-mxm'>
                        <h5 className='mxm-title-h5'>
                            ¡Elige a tu <br/>
                            <span>Asesora MXM</span> <br/>
                            ideal para tí! 
                        </h5>
                        {personalAleatorio().map((vendedor)=>(
                            <div key={vendedor.id}>

                                <video autoPlay loop>
                                    <source src={vendedor.video}/>
                                </video>
                                <img src={logoPequeño} className='logo-pequeño'/>
                                <p className='frase'>
                                    {vendedor.frase}
                                </p>
                                <h5 className='nombre-title'>
                                    {vendedor.nombre}
                                </h5>
                                <button className='btn-mxm'>
                                    { vendedor.id != 7 ?
                                        'Contactarla'
                                    :
                                        'Contactarlo'
                                    }
                                </button>
                                <hr className='hr-mxm'/>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>

            <div className='row justify-content-center img-promo'>
                <div className='col-11 col-md-4'>
                    <img src={ImagenSite}/>
                </div>
            </div>

            <div className='row justify-content-center redesRediseño' id='redesSocialesSecc'>
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
        </div>
    );
}

export default Perfilmxm;