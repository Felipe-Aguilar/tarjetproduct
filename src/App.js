import React from 'react';
import Header from './componentes/Header';
import VistaInicio from './componentes/VistaInicio';
import TarjetSite from './componentes/TarjetSite';
import Footer from './componentes/Footer';
import { Route, Routes } from 'react-router-dom';

import QueEsTarjet from './componentes/QueEsTarjet';
import HaztePremium from './componentes/HaztePremium';
import Canvas from './componentes/Canvas';

import TarjetProd from './componentes/tarjet-prod/tarjet';
import TarjetSiteProd from './componentes/tarjet-prod/tarjetsite';
import BannerPrincipal from './componentes/tarjet-prod/BannerPrincipal';
import MiTarjetero from './componentes/tarjet-prod/MiTarjetero';

const App = () => {

  const usuarios = [
    {
      id: '00001',
      empresaId: '1400',
      nombre: 'Alberto Mérida', 
      telefono: '5621287997', 
      email: 'alberto.merida@tekrobot.com.mx',
      direccion: 'Izcalli del Valle',
      redes: {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        telegram: 'telegram.com',
        instagram: 'instagram.com'
      }
    },
    {
      id: '00002', 
      empresaId: '1400',
      nombre: 'Francisco López', 
      telefono: '5574936069', 
      email: 'paco@tekrobot.com.mx',
      direccion: 'Izcalli del Valle',
      redes: {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        telegram: 'telegram.com',
        instagram: 'instagram.com'
      }
    },
    {
      id: '00003', 
      empresaId: '1400',
      nombre: 'Felipe Aguilar', 
      telefono: '5560078218', 
      email: 'felipe.aguilar0g@gmail.com',
      direccion: 'Izcalli del Valle',
      encabezado: 'AlbertoEncabezado.jpg',
      redes: {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        telegram: 'telegram.com',
        instagram: 'instagram.com'
      }
    },
    {
      id: '00004', 
      empresaId: '1400',
      nombre: 'Brenda Gracida', 
      telefono: '5564782691', 
      email: 'brenda.design@tekrobot.com.mx',
      direccion: 'Izcalli del Valle',
      fondo: '#86d1f7',
      redes: {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        telegram: 'telegram.com',
        instagram: 'instagram.com'
      }
    },
  ]

  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>


      <div style={{overflow: 'hidden'}}>
        <Routes>
          {/* <Route path='*' element={<VistaInicio />}/>          
          <Route path='/' element={<VistaInicio />}/>    */}
          
          <Route path='*' element={<BannerPrincipal />}/>          
          <Route path='/' element={<BannerPrincipal />}/>
          
          
          <Route path='/:empresaId/:pageId' element={<TarjetProd usuarios={usuarios}/>}/>   
          {/* <Route path='/tarjet/1400/:pageId' element={<TarjetProd usuarios={usuarios}/>}/>    */}
          {/* <Route path='/tarjetsite/001' element={<TarjetSiteProd />}/> */}
          {/* <Route path='/tarjetsite/:pageId' element={<TarjetSiteProd usuarios={usuarios}/>}/> */}
          <Route path='/:pageId' element={<TarjetSiteProd usuarios={usuarios}/>}/>
          <Route path='/mi-tarjetero/:pageId' element={<MiTarjetero usuarios={usuarios}/>}/>
          

          <Route path='/tarjetSite' element={<TarjetSite />}/>
          <Route path='/que-es-tarjet' element={<QueEsTarjet />}/>
          <Route path='/hazte-premium' element={<HaztePremium />}/>
          <Route path='/canvas/*' element={<Canvas />}/>

        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;