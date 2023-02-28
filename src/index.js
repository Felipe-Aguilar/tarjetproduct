import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/generales.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { Proveedor } from './componentes/contextos/Sesion';
import { ProveedorUsuarios } from './componentes/contextos/Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ProveedorUsuarios>
        <Proveedor>
          <App />
        </Proveedor>
      </ProveedorUsuarios>
    </HashRouter>
  </React.StrictMode>
);
