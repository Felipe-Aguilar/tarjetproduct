import empresas from '../../assets/empresas1.jpg';
import perfil from '../../assets/CirculoLink.png';

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
                                <img src={perfil} className='img-fluid' />
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
                                <img src={perfil} className='img-fluid' />
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

                    <div className='vendedora'>

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
                    </div>

                    <div className='fondo fondo2'>
                        <h5>Envíos a toda la republica!</h5>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Empresas;