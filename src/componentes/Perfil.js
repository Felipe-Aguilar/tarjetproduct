import React from 'react';
import styled from 'styled-components';
import FotoPerfil from '../assets/FotoPerfil.png';
import FotoPerfilPortada from '../assets/FotoPerfilPortada.png';

const Perfil = () => {
    return ( 
        <PerfilContenedor className='row mt-4 justify-content-center'>
            <div className='col-11 contenedor'>
                <div className='row encabezado align-items-centen'>
                    <div className='w-auto'>
                        <img src={FotoPerfil} alt="Tu tarjet | Tarjeta de presentación online"/>
                    </div>
                    <div className='col-5 m-0'>
                        <h5>Name</h5>   
                        <p>
                            Profession
                        </p>
                    </div>
                    <div className='col-5 m-0 p-0'>
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>

                <div className='row portada'>
                    <img src={FotoPerfilPortada} alt="" />
                </div>

                <div className='row informacion'>
                    <div>
                        <h5>Title</h5>
                        <p>November 24, 2022</p>
                    </div>
                </div>
            </div>
        </PerfilContenedor>
    );
}

const PerfilContenedor = styled.div`
    .contenedor{
        background: #fff;
        border-radius: 11px;
        box-shadow:
        0px 0px 2.7px rgba(0, 0, 0, 0.022),
        0px 0px 6.9px rgba(0, 0, 0, 0.031),
        0px 0px 14.2px rgba(0, 0, 0, 0.039),
        0px 0px 29.2px rgba(0, 0, 0, 0.048),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;

        .encabezado{
            padding: 20px 15px;

            h5, p{
                margin: 0;
            } 
            img{
                display: inline-block;
                width: 50px;
                /* margin-right: 10px; */
            }
            i{
                font-size: 20px;
                float: right;
            }
        }

        .portada{
            img{
                width: 100%;
            }
        }

        .informacion{
            padding: 15px 15px;
            h5,p{
                display: block;
                margin: 0;
            }
        }
    }
`;

export default Perfil;