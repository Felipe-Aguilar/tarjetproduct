const ComprobarUsuario = async (tokenURL) => {
    const response = await fetch('http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaUsuXToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "Token": tokenURL
        })
    });
    
    const data = await response.json();

    return data;
}

const DatosUsuario = async (idUsuario) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaMiTarjet?Usutarjetid=${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

const DatosUsuarioTarjetSite = async (idUsuario) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaMiSite?Siteusuid=${idUsuario}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ComprobarUsuario, DatosUsuario, DatosUsuarioTarjetSite };