const ComprobarUsuario = async (tokenURL) => {
    const response = await fetch('https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaUsuXToken', {
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
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaMiTarjet?Usutarjetid=${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const dataUsuario = await response.json();

    return dataUsuario;
}

const DatosUsuarioTarjetSite = async (idUsuario) => {
    const response = await fetch(`https://systemweb.ddns.net/WebTarjet/APIUsuDtos/ConsultaMiSite?Siteusuid=${idUsuario}`, {
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