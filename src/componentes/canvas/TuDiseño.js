import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import tarjetaFrenteVacia from '../../assets/TarjetaFrenteVacia.png';

const TuDiseño = ({textoValidacion}) => {

    const [nombre, setNombre] = useState('');
    const [nombreValido, setNombreValido] = useState();

    const [subtitulo, setSubtitulo] = useState('');
    const [subtituloValido, setSubtituloValido] = useState();

    const [canvasContext, setCanvasContext] = useState(null);
    const canvasRef = useRef(null);
    const canvasRefMobile = useRef(null);

    const navigate = useNavigate();
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaFrenteVacia;
        context.drawImage(img, 0, 0,397, 238);
        
        context.font = "bold 20px serif";
        context.fillStyle = "#fff";

        context.fillText(nombre.toUpperCase() ,190,160);
        context.fillText(subtitulo.toUpperCase() ,190,190);
        
        setCanvasContext(context);
    });

    // Canvas Mobile
    useEffect(()=>{
        const canvas = canvasRefMobile.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaFrenteVacia;
        context.drawImage(img, 0, 0,330, 198);
        
        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText(nombre.toUpperCase() ,150,140);
        context.fillText(subtitulo.toUpperCase() ,145,165);
        
        setCanvasContext(context);
    });

    // const guardar = () =>{
    //     const canvas = canvasRef.current;

    //     const dato = canvas.toDataURL();
    //     const link = document.createElement("a");
    //     link.href = dato;
    //     link.download = 'tarjetaImagen';
    //     link.click();
        
    // }

    const validacionNom = () =>{
        if (textoValidacion.test(nombre)){
            setNombreValido(true);
            document.getElementById('inputNombre').style.border = '2px solid #e3e3e3';
        }else{
            setNombreValido(false);
            document.getElementById('inputNombre').style.border = '2px solid #f62e2e';
        }
        // if (nombre == "") {
        //     setError('Falta por llenar un campo');
        // }
    }

    const validacionSub = () =>{
        if (textoValidacion.test(subtitulo)){
            setSubtituloValido(true);
            document.getElementById('inputSubtitulo').style.border = '2px solid #e3e3e3';
        }else{
            setSubtituloValido(false);
            document.getElementById('inputSubtitulo').style.border = '2px solid #f62e2e';
        }
        // if (subtitulo == "") {
        //     setError('Falta por llenar un campo');
        // }
    }

    return ( 
        <div className='mt-3 TuDiseño'>
            <div className='row justify-content-center'>
                <div className='col-11 col-md-8 d-none d-md-block'>
                    <form>
                        <label>Colección: </label>
                        <select>
                            <option value="Ejecutivas" key="">Ejecutivas</option>
                        </select>
                        <i className="bi bi-question-circle-fill"></i>
                    </form>
                </div>
            </div>

            <div className='row mt-2 justify-content-center'>
                <div className='col-11 col-md-8 d-none d-md-block'>
                    <canvas ref={canvasRef} width={'397px'} height={'238px'}>
                    </canvas>
                </div>
                <div className='col-11 col-md-8 d-block d-md-none' id='canvasMobile'>
                    <canvas ref={canvasRefMobile} width={'330px'} height={'198px'} >
                    </canvas>
                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Encabezado de tu Tarjet (30 caracteres)' 
                            maxLength={30} 
                            className='encabezado'
                            // value={encabezado}
                            // onChange={(e)=>{setEncabezado(e.target.value)}}
                            readOnly
                        />
                        <select className='select'>
                            <option value="Sr." key="">Sr.</option>
                        </select>
                        <input 
                            type="text"
                            id='inputNombre'
                            placeholder='Nombre y apellidos (40 caracteres)' 
                            maxLength={40} 
                            className='nombre'
                            value={nombre}
                            onChange={(e)=>{setNombre(e.target.value)}}
                            pattern={textoValidacion}
                            // Al presionar tecla 
                            onKeyUp={validacionNom}
                            // Al dar clic fuera del input
                            onBlur={validacionNom}
                        />
                        <input 
                            type="text"
                            id='inputSubtitulo'
                            placeholder='Texto debajo de tu nombre (30 caracteres)' 
                            maxLength={30} 
                            className='texto'
                            value={subtitulo}
                            onChange={(e)=>{setSubtitulo(e.target.value)}}
                            onKeyUp={validacionSub}
                            onBlur={validacionSub}
                        />
                    </form>
                </div>
            </div>

            { nombreValido == false | subtituloValido == false ?
                <div className='row mt-2 justify-content-center'>
                    <div className='col-11 col-md-5'>
                        <div className='error'>
                            { nombreValido == false &&
                                <>
                                    <p>
                                        <i className="bi bi-exclamation-circle"></i>
                                        El nombre tiene que ser de 4 a 20 dígitos y solo puede contener letras.
                                    </p>
                                    { nombre == '' ?
                                        <p>
                                            <i className="bi bi-exclamation-circle"></i>
                                            Falta uno o más campos por llenar.
                                        </p>
                                    :
                                        <></>
                                    }
                                </>
                            }
                            { subtituloValido == false && 
                                <>
                                    <p>
                                        <i className="bi bi-exclamation-circle"></i>
                                        El texto debajo del nombre tiene que ser de 4 a 20 dígitos y solo puede contener letras.
                                    </p>

                                    { subtitulo == '' ?
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
                <>

                </>
            }

            <div className='row mt-2 justify-content-center siguiente'>
                <div className='col-11 col-md-5'>
                    <button onClick={()=> navigate("/canvas/tus-datos")} className={nombreValido == true & subtituloValido == true ? '' : 'disabled'}>
                        Siguiente 
                        <i className="bi bi-chevron-double-right"></i>
                    </button>
                    
                </div>
            </div>

        </div>
    );
}

export default TuDiseño;