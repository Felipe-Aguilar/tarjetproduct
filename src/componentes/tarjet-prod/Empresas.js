import empresas from '../../assets/empresas1.jpg';
import perfil from '../../assets/CirculoLink.png';
import perfilFatima from '../../assets/PerfilFatima.jpeg';
import perfilJazmin from '../../assets/PerfilJazmin.jpeg';

import iconoFacebook from '../../assets/iconoFacebook.png';
import iconoInstagram from '../../assets/iconoInstagram.png';
import iconoTelegram from '../../assets/iconoTelegram.png';
import iconoTwitter from '../../assets/iconoTwitter.png';
import iconoYoutube from '../../assets/iconoYoutube.png';
import iconoTiktok from '../../assets/iconoTiktok.png';
import iconoTarjet from '../../assets/iconoTarjet.png';

const Empresas = () => {
    return ( 
        <div className="empresas">

            <div className="row justify-content-center encabezado">
                <div className="col-12 col-md-4 p-0">
                    <img src={empresas} className='img-fluid' />
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-12 col-md-4 contacto'>

                    <div 
                        className='mb-3'
                        style={{background: '#0F8C54'}}
                    >
                        <a href="">
                            Guardar Contacto
                        </a>
                        <a href="" className='icon save' style={{background: '#00A859'}}>
                            <i className="bi bi-download"></i>
                        </a>
                    </div>

                    <div 
                        className='mb-3'
                        style={{background: '#A93538'}}
                    >
                        <a href="">
                            Visítanos en:
                        </a>
                        <a href="" className='icon save' style={{background: '#7F2E2F'}}>
                            <i className="bi bi-geo-alt-fill"></i>
                        </a>
                    </div>

                    <div 
                        className='mb-3' 
                        style={{background: '#434E9B'}}
                    >
                        <a href="">
                            Redes sociales
                        </a>
                        <a href="" className='icon save' style={{background: '#6F6BAF'}}>
                            <i className="bi bi-globe-americas"></i>
                        </a>
                    </div>

                </div>

            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-12 col-md-4'>
                    <h5>Somos una empresa 100% mexicana</h5>
                </div>

            </div>

            <div className='row justify-content-center'>
                <div className='col-12 col-md-4 title'>
                    <div className='fondo'>
                        <h5>Contacta a nuestro <br/> equipo de ventas</h5>
                    </div>

                    <div className='vendedora'>

                        <div className='green'>
                        </div>

                        <div className='cuerpo'>
                            <div className='w-50'>
                                <img src={perfilJazmin} className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h3>Jazmín</h3>
                                <h5>Ventas</h5>
                                <p>
                                    Será un placer atenderte!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='vendedora'>

                        <div className='green'>
                        </div>

                        <div className='cuerpo'>
                            <div className='w-50'>
                                <img src={perfilFatima} className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h3>Fatima</h3>
                                <h5>Ventas</h5>
                                <p>
                                    Siempre a tus órdenes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='vendedora'>

                        <div className='green'>
                        </div>

                        <div className='cuerpo'>
                            <div className='w-50'>
                                <img src={perfil} className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h3>Erendira</h3>
                                <h5>Ventas</h5>
                                <p>
                                    Siempre alegre!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='vendedora'>

                        <div className='green'>
                        </div>

                        <div className='cuerpo'>
                            <div className='w-50'>
                                <img src={perfil} className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h3>Rubí</h3>
                                <h5>Ventas</h5>
                                <p>
                                    Tus deseos son órdenes!
                                </p>
                            </div>
                        </div>
                    </div> */}

                    <div className='fondo fondo2'>
                        <h5>Envíos a toda la república!</h5>
                    </div>
                </div>
            </div>

            <div className='row mt-2 justify-content-center redesSociales2'>
                <div className='col-12 col-md-4 contenedor'>
                    <h5 className='p-2'>Mis redes sociales</h5>
                    <div className='d-flex cuerpo'>

                            {/* <div>
                                <button onClick={()=> navigate("/"+btoa(token))}>
                                    <img src={iconoTarjet} className='img-fluid' />
                                </button>
                            </div> */}
                            
                            <div className='d-flex align-items-center'>
                                <a  className={ 'desactivado'}>
                                    <img src={iconoFacebook} className='img-fluid' />
                                </a>
                            </div>    

                            
                            <div className='d-flex align-items-center'>
                                <a  className={ 'desactivado'}>
                                    <img src={iconoInstagram} className='img-fluid' />
                                </a>
                            </div>
                                

                            <div className='d-flex align-items-center'>
                                <a  className={ 'desactivado'}>
                                    <img 
                                        src={iconoTelegram} 
                                        className='img-fluid'
                                    />
                                </a>
                            </div>

                            
                            <div className='d-flex align-items-center'>
                                <a  
                                    className={'desactivado'}
                                >
                                    <img src={iconoTwitter} className='img-fluid' />
                                </a>
                            </div>
                            
                            
                            
                                <div className='d-flex align-items-center'>
                                    <a  
                                        className={'desactivado'}
                                    >
                                        <img 
                                            src={iconoYoutube} 
                                            className='img-fluid' 
                                        />
                                    </a>
                                </div>       
                            
                            
                            
                                <div className='d-flex align-items-center'>
                                    <a  
                                        className={'desactivado'}
                                    >
                                        <img src={iconoTiktok} className='img-fluid' />
                                    </a>
                                </div>
                            
                    </div>
                    {/* <div className='d-flex justify-content-around cuerpo'>

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
                    </div> */}
                    
                </div>
            </div>

        </div>
    );
}

export default Empresas;