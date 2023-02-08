import React,{ useRef, useState, useEffect} from 'react';

import tarjetaReversoVacia from '../../assets/TarjetaReversoVacia.png';


const Reverso = ({numeroValidacion, direccionValidacion}) => {

    const [telefono, setTelefono] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [servicio1, setServicio1] = useState('');
    const [servicio2, setServicio2] = useState('');
    const [servicio3, setServicio3] = useState('');
    const [terminos, setTerminos] = useState();

    const [canvasContext, setCanvasContext] = useState(null);
    const canvasRef = useRef(null);
    const canvasRefMobile = useRef(null);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaReversoVacia;
        context.drawImage(img, 0, 0,397, 238);

        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText(telefono ,30,180);
        context.fillText(ubicacion ,30,210);
        context.fillText(servicio1 ,30,80);
        context.fillText(servicio2 ,30,100);
        context.fillText(servicio3 ,30,120);
        
        setCanvasContext(context);
    });

    // Canvas Mobile 
    useEffect(()=>{
        const canvas = canvasRefMobile.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaReversoVacia;
        context.drawImage(img, 0, 0,397, 238);

        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText(telefono ,30,150);
        context.fillText(ubicacion ,30,175);
        context.fillText(servicio1 ,30,60);
        context.fillText(servicio2 ,30,80);
        context.fillText(servicio3 ,30,100);
        
        setCanvasContext(context);
    });

    
    // Validaciones
    const [telefonoValido, setTelefonoValido] = useState();
    const [ubicacionValido, setUbicacionValido] = useState();
    const [servicioValido, setServicioValido] = useState();

    const validacionNum = () =>{
        if (numeroValidacion.test(telefono)) {
            setTelefonoValido(true);
            document.getElementById('inputTelefono').style.border = '2px solid #e3e3e3';
        }else{
            setTelefonoValido(false);
            document.getElementById('inputTelefono').style.border = '2px solid #f62e2e';
        }
    }

    const validacionUbi = () =>{
        if (direccionValidacion.test(ubicacion)) {
            setUbicacionValido(true);
            document.getElementById('inputUbicacion').style.border = '2px solid #e3e3e3';
        }else{
            setUbicacionValido(false);
            document.getElementById('inputUbicacion').style.border = '2px solid #f62e2e';
        }
    }

    return ( 
        <div className='mt-3 Reverso'>
            <div className='row justify-content-center'>
                <div className='col-11 col-md-8 d-none d-md-block'>
                    <canvas ref={canvasRef} width={'397px'} height={'238px'} >
                    </canvas>
                </div>
                <div className='col-11 col-md-8 d-block d-md-none'>
                    <canvas ref={canvasRefMobile} width={'330px'} height={'198px'} >
                    </canvas>
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <div className='d-flex align-items-center'>
                            <label>Teléfono de contacto</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input 
                                type="text" 
                                className='whats'
                                placeholder='WhatsApp'
                                maxLength={10}
                                value={telefono}
                                onChange={(e)=>{setTelefono(e.target.value)}}
                                onKeyUp={validacionNum}
                                onBlur={validacionUbi}
                                id='inputTelefono'
                            />
                            <label className='label-info'>
                                Preferentemente ingresa un número con WhatsApp para que sea más fácil contactarte.
                            </label>
                        </div>

                        <div className='d-flex align-items-center mt-1'>
                            <label>Ingresa tu dirección (opcional)</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input 
                                type="text" 
                                placeholder='Ubicación'
                                maxLength={20}
                                className="ubicacion"
                                value={ubicacion}
                                onChange={(e)=>{setUbicacion(e.target.value)}}
                                onKeyUp={validacionUbi}
                                onBlur={validacionUbi}
                                id='inputUbicacion'
                            />
                            <label className='label-info'>
                                El ícono los llevará a tu ubicación en Google Maps
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-11 col-md-5'>
                    <div className='row'>
                        <div className='col-6'>
                                <form className='formulario-columnas'>
                                    <label>Descripción de Servicio 1 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 1'
                                        maxLength={15}
                                        value={servicio1}
                                        onChange={(e)=>{setServicio1(e.target.value)}}
                                    />

                                    <label>Descripción de Servicio 3 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 3'
                                        maxLength={15}
                                        onChange={(e)=>{setServicio2(e.target.value)}}
                                    />

                                    <label>Descripción de Servicio 5 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 5'
                                        maxLength={15}
                                        onChange={(e)=>{setServicio3(e.target.value)}}
                                    />
                                    
                                </form>
                        </div>
                        <div className='col-6'>
                                <form className='formulario-columnas'>
                                    <label>Descripción de Servicio 2 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 2'
                                        maxLength={15}
                                        readOnly
                                    />
                                    <label>Descripción de Servicio 4 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 4'
                                        maxLength={15}
                                        readOnly
                                    />
                                    <label>Descripción de Servicio 6 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 6'
                                        maxLength={15}
                                        readOnly
                                    />
                                </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-11 col-md-5'>
                    <form>
                        <input type="checkbox" className='mr-2' id='terminos' onChange={(e)=>{setTerminos(e.target.value)}}/> 
                        <label htmlFor='terminos'>
                            Acepto términos de privacidad
                        </label>
                    </form>
                </div>
            </div>

            { telefonoValido == false | ubicacionValido == false | terminos == false ?
                <div className='row mt-2 justify-content-center'>
                    <div className='col-11 col-md-5'>
                        <div className='error'>
                            { telefonoValido == false &&
                                <>
                                    <p>
                                        <i className="bi bi-exclamation-circle"></i>
                                        El teléfono debe contener 10 dígitos y solo se admiten números.
                                    </p>

                                    { telefonoValido == '' ?
                                        <p>
                                            <i className="bi bi-exclamation-circle"></i>
                                            Falta uno o más campos por llenar.
                                        </p>
                                        :
                                        <></>
                                    }
                                </>
                            }
                            { ubicacionValido == false &&
                                <>
                                    <p>
                                        <i className="bi bi-exclamation-circle"></i>
                                        La dirección tiene que ser de 4 a 20 dígitos y no puede contener caracteres especiales (#*/)
                                    </p>
                                    { ubicacionValido == '' ? 
                                        <p>
                                            <i className="bi bi-exclamation-circle"></i>
                                            Falta uno o más campos por llenar.
                                        </p>
                                        :
                                        <></>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
                :
                <></>
            }

            <div className='row mt-3 justify-content-center siguiente'>
                <div className='col-11 col-md-5'>
                    <button className={telefonoValido == true & ubicacionValido == true & terminos == 'on' ? '' : 'disabled'}>
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Reverso;