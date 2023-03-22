import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite } from '../contextos/ComprobarUsuario';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TarjetSite = () => {

    const navigate = useNavigate();

    const { pageId } = useParams();
    const [comprobarUsuario, setComprobarUsuario] = useState([]);
    const [ usuario, setUsuario ] = useState([]);
    const [ token, setToken ] = useState([]);

    const [servicios, setServicios] = useState([]);
    const [descServicios, setDescServicios] = useState([]);
    const [imagenServicios, setImagenServicios] = useState([]);
    
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
            const datosServicios = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 1).map(servicio => servicio.SiteServDescrip);
            setServicios(datosServicios);

            // Servicios Descripción Imagen
            const datosServiciosImagen = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio.SiteServDescrip);
            setDescServicios(datosServiciosImagen);

            // Servicios Imagen
            const imagenServiciosImagen = datosUsuarios.SDTSite.Serv.filter(servicio => servicio.TipoServSiteId === 2).map(servicio => servicio.SiteServIMG);
            setImagenServicios(imagenServiciosImagen);

        }
        
        ConsultaUsuario();
    },[]);

    const imagenSRC = 'https://tarjet.site/imagenes/encabezados/';
    const imagenServicio = 'https://tarjet.site/imagenes/servicios/';
    
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

                    {/* <div className='d-flex'>
                        <div>
                            <h6>Más números de contacto</h6>
                            <a href="">
                                55 687 9144
                            </a>
                        </div>
                    </div> */}

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
                        { !usuario.SiteTextoUbica == '' &&
                            <>
                                <div>
                                    <h6>Visítame en mi oficina </h6>
                                    <p>
                                        {usuario.SiteTextoUbica}
                                    </p>
                                </div>
                                <div>
                                    <a href={usuario.SiteTextoUbica} target={"_blank"}>
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
                                    <a href={usuario.SiteWeb}>
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
                        <h5>Mis Servicios</h5>

                        <Slider {...settings}>
                            { servicios.map((servicio, index)=>(
                                <div className='cuerpo' key={index}>
                                    <p>
                                        {servicio}
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
                        <h5>Más de mis servicios</h5>

                        { descServicios.map((servicio, index)=>(
                            <div className='cuerpo' key={index}>
                                <p>
                                    {servicio}
                                </p>
                                <img src={imagenServicio+imagenServicios[index]} className='img-fluid'/>
                            </div>
                        ))
                        }
                    </div>
                </div>

                <div className='row mt-1 justify-content-center'>
                    <div className='col-11 col-md-4 p-0'>
                        <hr/>
                    </div>
                </div>
                </>
            }


            <div className='row mt-2 justify-content-center redesSociales'>
                <div className='col-12 col-md-4'>
                    <h5 className='p-2'>Mis redes sociales</h5>
                    <div className='d-flex justify-content-around cuerpo'>
                        <div>
                            <button onClick={()=> navigate("/"+btoa(token))}>
                                <i className="bi bi-person-badge-fill"></i>
                            </button>
                        </div>
                        {   !usuario.SiteFacebook == '' &&
                            <>
                                <div>
                                    <a href={usuario.SiteFacebook}>
                                        <i className="bi bi-facebook facebook"></i>
                                    </a>
                                </div>    
                            </>
                        }
                        { !usuario.SiteTwitter == '' &&
                            <>
                                <div>
                                    <a href={usuario.SiteTwitter}>
                                        <i className="bi bi-twitter twitter"></i>
                                    </a>
                                </div>
                            </>
                        }
                        { !usuario.SiteTelegram == '' &&
                            <>
                                <div>
                                    <a href={usuario.SiteTelegram}>
                                        <i className="bi bi-telegram telegram"></i>
                                    </a>
                                </div>
                            </>
                        }
                        {   !usuario.SiteInstagram == '' &&
                            <>
                                <div>
                                    <a href={usuario.SiteInstagram}>
                                        <i className="bi bi-instagram instagram"></i>
                                    </a>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetSite;