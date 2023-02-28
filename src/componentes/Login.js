import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';
import { Usuarios } from './contextos/Usuarios';

import LogoTarjet from '../assets/TarjetNegro.png';

const Login = () => {

    // Estado Global de la sesión 
    const {sesionTrue} = useContext(Sesion);
    // Estado Global de los usuarios
    const {usuarios} = useContext(Usuarios);
    
    const [errorLogin, setErrorLogin] = useState();
    const [errorLogin2, setErrorLogin2] = useState();
    
    const [usuarioForm, setUsuarioForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');

    const navigate = useNavigate();

    const comprobar = (e) => {
        e.preventDefault();


        if (usuarioForm | passwordForm == '') {
            setErrorLogin(true);
        }else{
            setErrorLogin(false);

            const sesion = usuarios.find(usuario => usuario.usuarioNombre === usuarioForm && usuario.usuarioPassword === passwordForm );

            if (!sesion){
                setErrorLogin2(true);
            }else{
                setErrorLogin2(false);
                navigate('/' + btoa(sesion.token));
                sesionTrue();
                
            }
        }
    }

    return ( 
        <div className='container-fluid vh-100 login'>
            <div className='row justify-content-center align-items-center h-100'>
                
                    <div className='col-12 col-md-4'>
                        <img src={LogoTarjet} />
                        <h1>Iniciar Sesión</h1>

                        <div className='w-auto cuerpo-login'>
                            <form onSubmit={comprobar}>
                                <label>Usuario</label>
                                <input 
                                    type="text" 
                                    value={usuarioForm} 
                                    onChange={(e)=>{setUsuarioForm(e.target.value)}}
                                />
                                <label>Contraseña</label>
                                <input type="password"
                                    value={passwordForm}
                                    onChange={(e)=>{setPasswordForm(e.target.value)}}
                                />


                                <button type='submit'>
                                    Iniciar sesión
                                </button>
                            </form>
                            { errorLogin ?
                                <div className='error-cuerpo'>
                                    <p>Falta uno o más campos por llenar</p>
                                </div>
                            :
                                <></>
                            }
                            { errorLogin2 ?
                                <div className='error-cuerpo'>
                                    <p>Usuario o cantraseña incorrectos</p>
                                </div>
                            :
                                <></>
                            }
                            <p>
                                ¿Aún no tienes una cuenta? <a href='https://wa.me/5586763895' target={'_blank'}> Contáctanos</a>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Login;