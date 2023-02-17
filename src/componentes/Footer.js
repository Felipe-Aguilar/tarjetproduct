import React from 'react';
import styled from 'styled-components';

import TarjetBlanco from '../assets/TarjetBlanco.png';

const Footer = () => {
    return ( 
        <FooterContenedor className='row mt-4 justify-content-center'>

            <div className='col-12'>
                <img src={TarjetBlanco} alt="Tarjet | Tu tarjeta de presentación Online" />
            </div>

            <div className='col-12 links'>
                <a href="">Aviso de Privacidad</a>
                <a href="">Tienda</a>
                <a href="">Contáctanos</a>
                <a href="">Registro</a>
                <a href="">Empresas</a>
                <a href="">Preguntas Frecuentes</a>
            </div>

                <div className='col-6 d-block d-md-none links-mobile'>
                    <a href="">Aviso de Privacidad</a>
                    <a href="">Tienda</a>
                    <a href="">Contáctanos</a>
                </div>
                <div className='col-6 d-block d-md-none links-mobile'>
                    <a href="">Registro</a>
                    <a href="">Empresas</a>
                    <a href="">Preguntas Frecuentes</a>
                </div>

            <div className='w-auto p-3 text-center'>
                <p>
                    © Todos los Derechos Reservados | 2022
                </p>
                <a href="https://tekrobot.com.mx/" target={'_blank'}>
                    Powered By TekRobot
                </a>
            </div>
        </FooterContenedor>
    );
}

const FooterContenedor = styled.footer`
    background: #212529;
    color: #fff;
    padding: 20px 10px;

    img{
        width: 100px;
        display: block;
        margin: auto;
    }

    .links{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 20px;

        @media screen and (max-width: 575px){
            display: none;
        }
        
        a{
            color:#fff;
        }
    }
    
    .links-mobile{
        margin-top: 20px;
        text-align: center;
        a{
            display: block;
            color:#fff;
        }
    }

    p, a{
        margin:0;
        font-size: 13px;
    }
    a{
        color: #00a859;
        transition: all .3s ease;
        text-decoration: none;
    }
`;

export default Footer;