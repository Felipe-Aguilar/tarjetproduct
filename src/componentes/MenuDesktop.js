import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
    return ( 
        <MenuDesktopContenedor>
            
            <NavLink to="">Empresas</NavLink>
            <NavLink to="">Contacto</NavLink>

            <NavLink to="/login">Iniciar Sesion</NavLink>
            
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