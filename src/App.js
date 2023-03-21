import React, { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Login from './componentes/Login';

import TarjetProd from './componentes/tarjet-prod/tarjet';
import TarjetSiteProd from './componentes/tarjet-prod/tarjetsite';
import BannerPrincipal from './componentes/tarjet-prod/BannerPrincipal';
import MiTarjetero from './componentes/tarjet-prod/MiTarjetero';

import VistaSesion from './componentes/VistaSesion';


const App = () => {

  // const Token = async() => {
  //   const response2 = await fetch('http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/oauth/access_token', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: 
  //           "client_id=956336b456664f94a1153c6ecbe1fb5a&grand_type=password&scope=FullControl&username=admin&password=admin123"
  //       });
  //       const data2 = await response2.json();
  //       console.log(data2.access_token);
  // }

  // Token();

  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>


      <div style={{overflow: 'hidden'}}>
        <Routes>
          <Route path='/login' element={<Login />}/>
          
          <Route path='*' element={<BannerPrincipal />}/>          
          <Route path='/' element={<BannerPrincipal />}/>

          <Route path='/:pageId' element={<VistaSesion />}/>   
          <Route path='/st/:pageId' element={<TarjetSiteProd />}/>
          
          <Route path='/:pageId/qr' element={<MiTarjetero />}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;