import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EncabezadoAlberto from '../../assets/EncabezadoAlberto.jpg';
import EncabezadoBrenda from '../../assets/EncabezadoBrenda.jpg';
import EncabezadoFelipe from '../../assets/EncabezadoFelipe.jpg';
import EncabezadoPaco from '../../assets/EncabezadoPaco.jpg';

import AlbertoServicios1 from '../../assets/AlbertoServicios1.png';
import AlbertoServicios2 from '../../assets/AlbertoServicios2.png';
import AlbertoServicios3 from '../../assets/AlbertoServicios3.png';
import AlbertoServicios4 from '../../assets/AlbertoServicios4.png';

const TarjetSite = ({usuarios}) => {

    const navigate = useNavigate();

    const { pageId } = useParams();
    const usuario = usuarios.find(usuario => usuario.id === pageId);

    if (!usuario) return null;

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
        arrows: true,
        infinite: true,
        autoplaySpeed: 6000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return ( 
        <div className='tarjetSite'>
            <div className='row justify-content-center encabezado'>
                <div className='col-11 col-md-4 p-0'>
                    {   usuario.id == '001' &&
                        <img src={EncabezadoAlberto} className='img-fluid'/>
                    }
                    {   usuario.id == '002' &&
                        <img src={EncabezadoPaco} className='img-fluid'/>
                    }
                    {   usuario.id == '003' &&
                        <img src={EncabezadoFelipe} className='img-fluid'/>
                    }
                    {   usuario.id == '004' &&
                        <img src={EncabezadoBrenda} className='img-fluid'/>
                    }
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-11 col-md-4 contacto'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h6>Envíame un WhatsApp</h6>
                            <p>
                                {usuario.telefono}
                            </p>
                        </div>
                        <div>
                            <a href={"https://wa.me/"+usuario.telefono} target={"_blank"}>
                                <i className="bi bi-whatsapp whats"></i>
                            </a>
                        </div>
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
                        <div>
                            <h6>Contáctame por mail</h6>
                            <p className='usuarioEmail'>
                                {usuario.email}
                            </p>
                        </div>
                        <div>
                            <a href={"mailto: "+usuario.mail}>
                                <i className="bi bi-envelope-fill email"></i>
                            </a>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h6>Visítame en mi oficina </h6>
                            <p>
                                {usuario.direccion}
                            </p>
                        </div>
                        <div>
                            <a href="https://goo.gl/maps/J3z4Ssm7E2AogXoZ9" target={"_blank"}>
                                <i className="bi bi-geo-alt-fill ubication"></i>
                            </a>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h6>Mi página web </h6>
                            <p>
                                www.tekrobot.com.mx
                            </p>
                        </div>
                        <div>
                            <a href="http://tekrobot.com.mx/" target={'_blank'}>
                                <i className="bi bi-globe-americas world"></i>
                            </a>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h6>Ver mi tarjeta</h6>
                        </div>
                        <div>
                            <a onClick={()=>navigate("/"+btoa(usuario.token))}>
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

            

            <div className='row justify-content-center sliderServicios'>
                <div className='col-11 col-md-4'>
                    <h5>Mis Servicios</h5>
                    <Slider {...settings}>
                        <div className='cuerpo'>
                            <p>
                                Somos un grupo de desarrolladores de software, con una experiencia de más de 15 años.
                            </p>
                            <p>
                                Creamos y diseñamos cualquier sitio web que se te ocurra, con una funcionalidad fuera de serie y un diseño increíble.
                            </p>
                        </div>
                        <div className='cuerpo'>
                            <p>
                                Somos un grupo de desarrolladores de software, con una experiencia de más de 15 años.
                            </p>
                            <p>
                                Creamos y diseñamos cualquier sitio web que se te ocurra, con una funcionalidad fuera de serie y un diseño increíble.
                            </p>
                        </div>
                        <div className='cuerpo'>
                            <p>
                                Somos un grupo de desarrolladores de software, con una experiencia de más de 15 años.
                            </p>
                            <p>
                                Creamos y diseñamos cualquier sitio web que se te ocurra, con una funcionalidad fuera de serie y un diseño increíble.
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row justify-content-center masServicios'>
                <div className='col-11 col-md-4'>
                    <h5>Más de mis servicios</h5>
                    
                    <div className='cuerpo'>
                        <p>
                            Desarrollamos software en medida de tus necesidades.
                        </p>
                        <img src={AlbertoServicios1} className='img-fluid'/>
                    </div>
                    <div className='cuerpo'>
                        <p>
                            Creamos y configuramos tu tienda virtual lista para vender.
                        </p>
                        <img src={AlbertoServicios2} className='img-fluid'/>
                    </div>
                    <div className='cuerpo'>
                        <p>
                            Configuramos para que los metodos de pago en tu tienda virtual sean seguros y confiables.
                        </p>
                        <img src={AlbertoServicios3} className='img-fluid'/>
                    </div>
                    <div className='cuerpo'>
                        <p>
                            Somos especialistas en puntos de Venta y control de Inventarios para tu Negocio
                        </p>
                        <img src={AlbertoServicios4} className='img-fluid'/>
                    </div>
                    
                </div>
            </div>

            <div className='row mt-1 justify-content-center'>
                <div className='col-11 col-md-4 p-0'>
                    <hr/>
                </div>
            </div>

            <div className='row mt-2 justify-content-center redesSociales'>
                <div className='col-11 col-md-4'>
                    <h5>Mis redes sociales</h5>
                    <div className='d-flex justify-content-around cuerpo'>
                        <div>
                            <button onClick={()=> navigate("/"+btoa(usuario.token))}>
                                <i className="bi bi-person-badge-fill"></i>
                            </button>
                        </div>
                        <div>
                            <a >
                                <i className="bi bi-facebook facebook"></i>
                            </a>
                        </div>
                        <div>
                            <a >
                                <i className="bi bi-twitter twitter"></i>
                            </a>
                        </div>
                        <div>
                            <a >
                                <i className="bi bi-telegram telegram"></i>
                            </a>
                        </div>
                        <div>
                            <a >
                                <i className="bi bi-instagram instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetSite;