import React, { useState } from 'react';

const LoginPost = React.createContext();


const ProveedorLogin = ( { children } ) => {
    
    const [loginPost, setLoginPost] = useState();

    const enviarPostLogin = async(usuarioForm, passwordForm) => {

        const response = await fetch('http://192.168.0.9/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Cuenta": usuarioForm,
                    "Password": passwordForm,
                })
            });
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data);
            //     setLoginPost({data});
            //     console.log(loginPost);
            // })
            // .catch(error => console.error(error));
            const data = await response.json();

            return data;
    }

    return ( 
        <LoginPost.Provider value={{ enviarPostLogin }}>
            { children }
        </LoginPost.Provider>
    );
}

export { LoginPost, ProveedorLogin }