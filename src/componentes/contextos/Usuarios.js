import React from 'react';

const Usuarios = React.createContext();

const ProveedorUsuarios = ( {children} ) => {

    const usuarios = [
        {
            id: '00001',
            token: '7997Wz120',
            usuarioNombre: 'alberto',
            usuarioPassword: '123456',
            fondoTarjeta: 'TarjetaAlberto.png',
            encabezadoImagen: 'EncabezadoAlberto.jpg',
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
            token: '6069Lg944',
            usuarioNombre: 'paco',
            usuarioPassword: '123456',
            fondoTarjeta: 'TarjetaPaco.jpg',
            encabezadoImagen: 'EncabezadoPaco.jpg',
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
            token: '8218Dh975',
            usuarioNombre: 'felipe',
            usuarioPassword: '123456',
            fondoTarjeta: 'TarjetaFelipe.jpg',
            encabezadoImagen: 'EncabezadoFelipe.jpg',
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
            token: '2691Fi247',
            usuarioNombre: 'brenda',
            usuarioPassword: '123456',
            fondoTarjeta: 'TarjetaBrenda.jpg',
            encabezadoImagen: 'EncabezadoBrenda2.jpg',
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
            <Usuarios.Provider value={{usuarios}}>
                {children}
            </Usuarios.Provider>
        </>
    );
}

export {Usuarios, ProveedorUsuarios};