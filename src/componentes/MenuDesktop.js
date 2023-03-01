import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';

const MenuDesktop = () => {

    const sesion = useContext(Sesion);

    const sesionLocal = localStorage.getItem('sesion');


    return ( 
        <MenuDesktopContenedor>
            
            <NavLink to="">Empresas</NavLink>
            <NavLink to="">Contacto</NavLink>

            { !sesion.estadoSesion && 
                <NavLink to="/login">Iniciar Sesion</NavLink>
            }
            
        </MenuDesktopContenedor>
    );
}

const MenuDesktopContenedor = styled.div`
    display: flex;
    gap: 25px;
    a{
        color: #191c1f;
        text-decoration: none;
    }
    .desactivate{
        color: #696969;
        pointer-events: none;
    }
`;

export default MenuDesktop;