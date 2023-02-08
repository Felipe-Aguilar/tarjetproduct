import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const MisTarjetas2 = () => {
    return ( 
        <MisTarjetasContenedor className='row mt-4 justify-content-center'>
                <motion.div 
                    className='col-11 col-md-8 contenedor'
                    initial={{opacity:0, x:-20}}
                    animate={{opacity: 1, x:0}}
                >
                    
                    <div className='row justify-content-between align-items-center'>
                        <div className='w-auto'>
                            <h6>Mis Tarjetas</h6>
                        </div>
                        <div className='w-auto menu-circle'>
                            <NavLink to="*" className='no-active'>
                                <i className="bi bi-circle-fill"></i>
                            </NavLink>
                            <NavLink to="/Tarjetas2" className='active'>
                                <i className="bi bi-circle-fill"></i>
                            </NavLink>
                            <NavLink to="/Tarjetas3" className='no-active'>
                                <i className="bi bi-circle-fill"></i>
                            </NavLink>
                        </div>
                    </div>

                    <div className='row mt-4 justify-content-end'>
                        <div className='w-auto'>
                            <h6>Hogar</h6>
                        </div>
                    </div>

                    <div className='row mt-3 informacion'>
                        <div className='w-50 left'>
                            <NavLink to="/Tarjetas3">Plomería</NavLink>
                            <NavLink to="/Tarjetas3">Albañilería</NavLink>
                            <NavLink to="/Tarjetas3">Electricidad</NavLink>
                            <NavLink to="/Tarjetas3">Loseta</NavLink>
                        </div>
                        <div className='w-50 right'>
                            <NavLink to="/Tarjetas3">Construcción en General</NavLink>
                            <NavLink to="/Tarjetas3">Decoración de Interiores</NavLink>
                            <NavLink to="/Tarjetas3">Jardinería</NavLink>
                            <NavLink to="/Tarjetas3">Seguridad</NavLink>
                        </div>
                    </div>
                </motion.div>
            </MisTarjetasContenedor>
    );
}

const MisTarjetasContenedor = styled.div`
    .contenedor{
        background: #fff;
        border-radius: 20px;
        padding: 10px 30px;
        height: 310px;
        box-shadow:
        0px 0.1px 2.2px rgba(0, 0, 0, 0.02),
        0px 0.1px 5.3px rgba(0, 0, 0, 0.028),
        0px 0.3px 10px rgba(0, 0, 0, 0.035),
        0px 0.4px 17.9px rgba(0, 0, 0, 0.042),
        0px 0.8px 33.4px rgba(0, 0, 0, 0.05),
        0px 2px 80px rgba(0, 0, 0, 0.07)
        ;

        @media screen and (max-width: 360px) and (max-height: 800px){
            height: 330px;
        }
        h6{
            margin: 0;
        }

        .menu-circle{
            display: flex;
            gap: 3px;
            a{
                text-decoration: none;
                outline: none;
            }
            .active{
                color: #212529;
            }
            .no-active{
                color: #9d9d9d;
            }
        }

        .informacion{
            background: #00aff0;
            padding: 12px;
            border-radius: 10px;
            
            a{
                color: #fff;
                display: block;
                text-decoration: none;
            }
            .left{
                border-right: 2px inset #ffffff96;
            }
            .right{
                padding: 0 10px;
            }
        }

        .buscar{
            form{
                margin-top: 5px;
                font-size: 13px;
                input{
                    border: solid 2px #c5c5c5;
                    border-right: none;
                    border-radius: 3px 0 0 3px;
                    outline: none;
                    padding: 0px 5px;
                    height: 30px;
                    width: 150px;
                    max-width: 150px;
                    @media screen and (max-width: 360px) and (max-height: 800px){
                        width: 130px;
                    }
                }
                select{
                    padding: 0px 5px;
                    height: 30px;
                    border: solid 2px #c5c5c5;
                    color: #212529;
                    background: #c5c5c5;
                    border-radius: 0 3px 3px 0;
                    outline: none;
                    transition: all .3s ease;
                }
            }
        }
    }
`;

export default MisTarjetas2;