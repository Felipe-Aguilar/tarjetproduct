import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';

const MenuDesktop = () => {

    const sesionLocal = localStorage.getItem('UsuarioSesion');
    const { sesionFalse } = useContext(Sesion);

    return ( 
        <MenuDesktopContenedor>
            
            <a href="https://tarjet.mx/#/que-es-tarjet">Qué es Tarjet</a>
            <a href="https://tarjet.mx/#/tienda" className='disabled'>Tienda</a>
            <a href="https://tarjet.mx/#/hazte-premium">Premium</a>
            <a href='https://tarjet.mx/#/empresas' className='disabled'>Empresas</a>
            <a href='https://wa.me/5586763895' target='_blank'>Contacto</a>

            { !sesionLocal ? 
                <NavLink to="/login">Iniciar Sesion</NavLink>
            :
                <button onClick={sesionFalse}>Cerrar Sesion</button>
            }

            
        </MenuDesktopContenedor>
    );
}

const MenuDesktopContenedor = styled.div`
    display: flex;
    gap: 25px;
    a{
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: #48657c;
        letter-spacing: 0;
    }
    button{
        background: none;
        border: none;
        outline: none;

        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: #48657c;
        letter-spacing: 0;
    }
    .disabled{
        color: #696969;
        pointer-events: none;
    }
`;

export default MenuDesktop;