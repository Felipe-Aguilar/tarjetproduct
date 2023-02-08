import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
    return ( 
        <MenuDesktopContenedor>
            {/* <NavLink to="/que-es-tarjet" className={'desactivate'}>Qué es Tarjet</NavLink> */}
            {/* <NavLink to="" className={'desactivate'}>Tienda</NavLink> */}
            {/* <NavLink to="/hazte-premium" className={'desactivate'}>Premium</NavLink> */}
            <NavLink to="">Empresas</NavLink>
            {/* <NavLink to="" className={'desactivate'}>Mi Perfil</NavLink> */}
            <NavLink to="">Contacto</NavLink>
            {/* <NavLink to="/canvas" className={'desactivate'}>Canvas</NavLink> */}
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