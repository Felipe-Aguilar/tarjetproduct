import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';

import ImageModal from './ImageModal';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iconoFacebook from '../../assets/iconoFacebook.png';
import iconoInstagram from '../../assets/iconoInstagram.png';
import iconoTelegram from '../../assets/iconoTelegram.png';
import iconoTwitter from '../../assets/iconoTwitter.png';
import iconoYoutube from '../../assets/iconoYoutube.png';
import iconoTiktok from '../../assets/iconoTiktok.png';
import iconoTarjet from '../../assets/iconoTarjet.png';
import Video from '../../assets/video.mp4';

const TarjetSite = () => {

    const navigate = useNavigate();

    const { pageId } = useParams();
    const [comprobarUsuario, setComprobarUsuario] = useState([]);
    const [ usuario, setUsuario ] = useState([]);
    const [ token, setToken ] = useState([]);

    const [servicios, setServicios] = useState([]);
    const [descServicios, setDescServicios] = useState([]);
    const [imagenServicios, setImagenServicios] = useState([]);
    const [imagenSubtitulo, setImagenSubtitulo] = useState([]);
    const [serviciosVideo, setServiciosVideo] = useState([]);

    const [vistaImageModal, setVistaImageModal] = useState(false);
    const [imgModal, setImgModal] = useState('');
    
    useEffect(()=>{

        const ConsultaUsuario = async () => {
            const comprobar = await ComprobarUsuario(atob(pageId));
            setComprobarUsuario(comprobar);


            const datosUsuarios = await DatosUsuarioTarjetSite(comprobar.usuId);
            setUsuario(datosUsuarios.SDTSite);

            // Token Usuario
            const datoToken = await DatosUsuario(comprobar.usuId);
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

    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    // Imagen Modal
    const abrirImagen = async(imagen) =>{
        const img = await imagen;
        setImgModal(img);
        setVistaImageModal(true);
    }
    const cerrarImagen = () => {
        setVistaImageModal(false);
    }

    return ( 
        <div className='tarjetSite' style={{background: usuario.SiteFondo}}>
            <div className='row justify-content-center encabezado'>
                <div className='col-12 col-md-4 p-0'>
                    <img src={imagenSRC+usuario.SiteImgEncabezado} className='img-fluid'/>
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-md-4 contacto'>
                    <div className='d-flex justify-content-between align-items-center'>
                        { !usuario.SiteTelefono2 == '' &&
                            <>
                                <div>
                                    <h6>Envíame un WhatsApp</h6>
                                    <p>
                                        {usuario.SiteTelefono2}
                                    </p>
                                </div>
                                <div>
                                    <a href={"https://wa.me/"+usuario.SiteTelefono2} target={"_blank"}>
                                        <i className="bi bi-whatsapp whats"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        { !usuario.SiteTelefono3 == '' &&
                            <>
                                <div>
                                    <h6>Envíame un WhatsApp</h6>
                                    <p>
                                        {usuario.SiteTelefono3}
                                    </p>
                                </div>
                                <div>
                                    <a href={"https://wa.me/"+usuario.SiteTelefono3} target={"_blank"}>
                                        <i className="bi bi-whatsapp whats"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>


                    <div className='d-flex justify-content-between align-items-center'>
                        { !usuario.SiteMail == '' &&
                            <>
                                <div>
                                    <h6>Contáctame por mail</h6>
                                    <p className='usuarioEmail'>
                                        {usuario.SiteMail}
                                    </p>
                                </div>
                                <div>
                                    <a href={"mailto: "+usuario.SiteMail}>
                                        <i className="bi bi-envelope-fill email"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        { usuario.SiteVerUbica == 1 &&
                            <>
                                <div>
                                    <h6>
                                        {usuario.SiteTextoUbica}
                                    </h6>
                                    <p>
                                        {usuario.UsuColonia}
                                    </p>
                                </div>
                                <div>
                                    <a href={urlMaps} target={"_blank"}>
                                        <i className="bi bi-geo-alt-fill ubication"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        { !usuario.SiteWeb == '' &&
                            <>
                                <div>
                                    <h6>Mi página web </h6>
                                    <a href={usuario.SiteWeb} target='_blank'>
                                        {usuario.SiteWeb}
                                    </a>
                                </div>
                                <div>
                                    <a href="http://tekrobot.com.mx/" target={'_blank'}>
                                        <i className="bi bi-globe-americas world"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h6>Ver mi tarjeta</h6>
                        </div>
                        <div>
                            <a onClick={()=>navigate("/"+btoa(token))}>
                                <i className="bi bi-person-badge-fill tarjeta"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            { servicios.length > 0 &&
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
            }

            {   descServicios.length > 0 &&
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
                                <img 
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

                <div className='row mt-1 justify-content-center'>
                    <div className='col-11 col-md-4 p-0'>
                        <hr/>
                    </div>
                </div>
                </>
            }

            <div className='row mt-1 justify-content-center'>
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
            </div>


            <div className='row mt-2 justify-content-center redesSociales'>
                <div className='col-12 col-md-4'>
                    <h5 className='p-2'>Mis redes sociales</h5>
                    <Slider {...settings2}>
                    <div className='d-flex justify-content-around cuerpo'>

                            <div>
                                <button onClick={()=> navigate("/"+btoa(token))}>
                                    <img src={iconoTarjet} className='img-fluid' />
                                </button>
                            </div>
                            
                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteFacebook} className={ usuario.SiteFacebook == '' ? 'desactivado' : ''}>
                                    <img src={iconoFacebook} className='img-fluid' />
                                </a>
                            </div>    

                            
                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteInstagram} className={ usuario.SiteInstagram == '' ? 'desactivado' : ''}>
                                    <img src={iconoInstagram} className='img-fluid' />
                                </a>
                            </div>
                                

                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteTelegram} className={ usuario.SiteTelegram == undefined ? 'desactivado' : ''}>
                                    <img 
                                        src={iconoTelegram} 
                                        className='img-fluid'
                                    />
                                </a>
                            </div>
                            
                    </div>
                    <div className='d-flex justify-content-around cuerpo'>

                        { !usuario.SiteTwitter == '' &&
                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteTwitter} >
                                    <img src={iconoTwitter} className='img-fluid' />
                                </a>
                            </div>
                        }
                        
                        { !usuario.SiteYoutube == '' &&
                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteYoutube} >
                                    <img 
                                        src={iconoYoutube} 
                                        className='img-fluid' 
                                    />
                                </a>
                            </div>       
                        }
                        
                        { !usuario.SiteInstagram == '' &&
                            <div className='d-flex align-items-center'>
                                <a href={usuario.SiteInstagram} >
                                    <img src={iconoTiktok} className='img-fluid' />
                                </a>
                            </div>
                        }
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default TarjetSite;