import React, { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Login from './componentes/Login';

import TarjetSiteProd from './componentes/tarjet-prod/tarjetsite';
import Empresas from './componentes/tarjet-prod/Empresas';
import BannerPrincipal from './componentes/tarjet-prod/BannerPrincipal';


import VistaSesion from './componentes/VistaSesion';
import Error from './componentes/404';
import AvisoPrivacidad from './componentes/AvisoPrivacidad';
import Perfilmxm from './componentes/tarjet-prod/Perfilmxm';


const App = () => {

  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>


      <div style={{overflow: 'hidden'}}>
        <Routes>
          <Route path='/login' element={<Login />}/>
          
          <Route path='*' element={<Error />}/>          
          <Route path='/' element={<BannerPrincipal />}/>

          <Route path='/:pageId' element={<VistaSesion />}/>   
          <Route path='/st/:pageId' element={<TarjetSiteProd />}/>
          <Route path='/st/bXhtdGFyamV0' element={<Perfilmxm />}/>
          
          <Route path='/empresas/001' element={<Empresas />}/>
          
          <Route path='/aviso-privacidad' element={<AvisoPrivacidad />}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;