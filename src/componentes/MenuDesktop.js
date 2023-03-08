import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Sesion } from './contextos/Sesion';

const MenuDesktop = () => {

    const sesionLocal = localStorage.getItem('UsuarioSesion');
    const { sesionFalse } = useContext(Sesion);

    return ( 
        <MenuDesktopContenedor>
            
            <NavLink to="">Empresas</NavLink>
            <NavLink to="">Contacto</NavLink>

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
        color: #191c1f;
        text-decoration: none;
    }
    button{
        background: none;
        border: none;
        color: #191c1f;
        outline: none;
    }
    .desactivate{
        color: #696969;
        pointer-events: none;
    }
`;

export default MenuDesktop;