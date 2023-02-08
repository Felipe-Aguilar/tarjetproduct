import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const TusDatos = () => {

    const [profesion, setProfesion] = useState();
    const [especialidad, setEspecialidad] = useState();

    const navigate = useNavigate();

    const validar = () => {
        if (profesion == 'Area de trabajo') {
            document.getElementById('selectAreaTrabajo').style.border = '2px solid #f62e2e';
        }else{
            document.getElementById('selectAreaTrabajo').style.border = '2px solid #e3e3e3';
        }
        
        if (especialidad == 'Especialidad') {
            document.getElementById('selectEspecialidad').style.border = '2px solid #f62e2e';
        }else{
            document.getElementById('selectEspecialidad').style.border = '2px solid #e3e3e3';
        }
    }

    return ( 
        <div className='mt-3 TusDatos'>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <div className='d-flex align-items center'>
                            <label>El segmento de tu negocio / profesión.</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <select onChange={(e)=>{setProfesion(e.target.value)}} onBlur={validar} id='selectAreaTrabajo'>
                                <option value="Area de trabajo">Area de trabajo</option>
                                <option value="Automotriz">Automotriz</option>
                            </select>
                            <label className='label-info'>
                                Si no aparece tú área no te preocupes, <span>contáctanos</span> y solicítalo. <span>Nos encanta aprender.</span>
                            </label>
                        </div>

                        <div className='d-flex align-items-center'>
                            <label>La especialidad de tu profesión / negocio.</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>

                        <div className='d-flex align-items-center'>
                            <select onChange={(e)=>{setEspecialidad(e.target.value)}} onBlur={validar} id='selectEspecialidad'>
                                <option value="Especialidad">Especialidad</option>
                                <option value="Electrisista">Electrisista</option>
                            </select>
                            <label className='label-info'>
                                Si no aparece tu especialidad no te preocupes, contáctanos y solicítalo.
                            </label>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-6 switch-contenedor'>
                                <label>Tarjet pública</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className='col-6'>
                                <label>Rango de localización</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <div className='row'>
                                    <div className='col-5'>
                                        <select className='rango'>
                                            <option value="" key="">5kms</option>
                                        </select>
                                    </div>
                                    {/* <div className='col-7 p-0'>
                                        <label className='label-info'>
                                            ¿Necesitas ser encontrado en más rango? Accede a Premium. ahí no existen los límites.
                                        </label>
                                    </div> */}
                                </div>
                            </div>

                            <div className='col-8 col-md-6 mt-2 mt-md-0 switch-contenedor'>
                                <label>En mantenimiento</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className='col-12 col-md-8 mt-2 mt-md-0 switch-contenedor'>
                                <label>Mostrar estadísticas de tu actividad</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            
            { profesion == 'Area de trabajo' | especialidad == 'Especialidad' ?
                <div className='row mt-2 justify-content-center'>
                    <div className='col-11 col-md-5'>
                        <div className='error'>
                            { profesion == 'Area de trabajo' ?
                                <p>
                                    <i className="bi bi-exclamation-circle"></i>
                                    Por favor seleccione un Área de trabajo
                                </p>
                                :
                                <></>
                            }
                            { especialidad == 'Especialidad' ? 
                                <p>
                                    <i className="bi bi-exclamation-circle"></i>
                                    Por favor seleccione una Especialidad
                                </p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            :
                <></>
            }

            <div className='row mt-1 justify-content-center siguiente'>
                <div className='col-11 col-md-5'>
                    {/* <NavLink to="reverso" className={profesion == undefined | especialidad == undefined | profesion == 'Area de Trabajo' | especialidad == 'Especialidad' ? 'disabled' : ''}>
                        Siguiente 
                        <i className="bi bi-chevron-double-right"></i>
                    </NavLink> */}
                    <button onClick={()=>navigate("/canvas/reverso")} className={profesion == undefined | especialidad == undefined | profesion == 'Area de Trabajo' | especialidad == 'Especialidad' ? 'disabled' : ''}>
                        Siguiente 
                        <i className="bi bi-chevron-double-right"></i>
                    </button>
                    
                </div>
            </div>

        </div>
    );
}

export default TusDatos;