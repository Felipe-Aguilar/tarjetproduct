import React, {useState} from 'react';
import styled from 'styled-components';
import { AnimatePresence ,motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import MenuDesktop from './MenuDesktop';

import TarjetNegro from '../assets/TarjetNegro.png';

const Header = () => {

    const [menu, cambioMenu] = useState(true);

    return (
        <>
            <Encabezado className='row m-0 justify-content-between justify-content-md-around align-items-center'>
                <div className='w-auto'>
                    {/* <h1>Tarjet.</h1> */}
                    <NavLink to="/">
                        <img src={TarjetNegro} alt="Tarjet | Tu tarjeta de presentación Online" onClick={()=> cambioMenu(true)}/>
                    </NavLink>
                </div>
                <div className='w-auto d-block d-lg-none'>
                    { menu ?
                        <motion.div 
                            className='Icon'
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1,
                                background: '#fff'
                            }}
                        >
                            <button onClick={()=> cambioMenu(false)}>
                                <i className="bi bi-list"></i>
                            </button>
                        </motion.div>
                    :
                        <motion.div 
                            className='Icon'
                            initial={{opacity:0}}
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1,
                                background: '#191c1f'
                            }}
                        >
                            <button onClick={()=> cambioMenu(true)}>
                                <i className="bi bi-x" style={{color: '#fff'}}></i>
                            </button>
                        </motion.div>
                    }
                </div>
                <div className='w-auto d-none d-lg-block'>
                    <MenuDesktop />
                </div>
            </Encabezado>
            <AnimatePresence>
                {!menu &&(
                    <NavMenu>
                        <motion.div
                            initial={{opacity: 0, scale:0}}
                            animate={{opacity: 1, scale:1}}
                            exit={{opacity:0, scale:0, x: 200}}
                            className="contenedorMenu"
                        >
                            <Menu cambioMenu={cambioMenu}/>
                        </motion.div>
                    </NavMenu>
                )}
            </AnimatePresence>
        </>
    );
}

const Encabezado = styled.div`
    padding: 15px 100px;
    backdrop-filter: blur(16px);
    background-color: rgba(234, 237, 240, 0.8);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgb(223, 227, 231);
    @media screen and (max-width: 575px){
        padding: 13px 15px;
    }

    img{
        width: 120px;
    }

    h1{
        font-weight: bold;
    }

    .Icon{
        background: #fff;
        padding: 3px 3px;
        border-radius: 12px;
        transition: all .3s ease;

        button{
            border:none;
            background: transparent;
            outline: none;
            color: #000;
        }
        i{
            font-size: 20px;
            font-weight: bold;
        }
    }
`;

const NavMenu = styled.div`
    .contenedorMenu{
        background: #fff;
        width: 30%;
        /* position: absolute;
        right: 0; */
        position: fixed;
        top: 60px;
        padding: 20px;
        z-index: 1;
        
        @media screen and (max-width: 575px){
            width: 100%;
            /* height: 85%; */
            height: 90.7%;
        }
    
        a{
            display: block;
        }
    }
`;

export default Header;