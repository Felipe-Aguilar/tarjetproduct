import { HashRouter, Route, Link } from "react-router-dom";

import TarjetProd from './tarjet';
import TarjetSiteProd from './tarjetsite';


const Navegacion = () => {

    const usuarios = [
        {
            id: '001', 
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
            id: '003', 
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
            id: '004', 
            nombre: 'Brenda Gracida', 
            telefono: '5564782691', 
            email: 'brenda.design@tekrobot.com.mx',
            direccion: 'Izcalli del Valle',
            redes: {
                facebook: 'facebook.com',
                twitter: 'twitter.com',
                telegram: 'telegram.com',
                instagram: 'instagram.com'
            }
        },
    ]


    return ( 
        
        <HashRouter>
            <Link to='/tarjet/1400/:pageId' element={<TarjetProd usuarios={usuarios}/>}/>   
            <Link to='/tarjetsite/:pageId' element={<TarjetSiteProd usuarios={usuarios}/>}/>
        </HashRouter>
        
    );
}

export default Navegacion;