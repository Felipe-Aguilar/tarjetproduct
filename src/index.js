import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/generales.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { Proveedor } from './componentes/contextos/Sesion';
import { ProveedorUsuarios } from './componentes/contextos/Usuarios';
import { ProveedorLogin } from './componentes/contextos/LoginPost';
import { ProveedorMiTarjeteroGet } from './componentes/contextos/MiTarjeteroGet';
import { ProveedorDatosUsuarioSesion } from './componentes/contextos/DatosUsuarioSesion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ProveedorDatosUsuarioSesion>
        <ProveedorUsuarios>
          <ProveedorMiTarjeteroGet>
            <ProveedorLogin>
              <Proveedor>
                <App />
              </Proveedor>
            </ProveedorLogin>
          </ProveedorMiTarjeteroGet>
        </ProveedorUsuarios>
      </ProveedorDatosUsuarioSesion>
    </HashRouter>
  </React.StrictMode>
);
