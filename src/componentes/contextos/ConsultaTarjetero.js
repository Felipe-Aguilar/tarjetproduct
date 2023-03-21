
const ConsultaTarjetero = async( datosUsuarioId ) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ConsultaTarjeteroFiltro = async(datosUsuarioId, segmentoId) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}&Segmentoid=${segmentoId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ConsultaTarjeteroNombre = async (datosUsuarioId, nombre) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}&Nombre=${nombre}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export  { ConsultaTarjetero, ConsultaTarjeteroFiltro, ConsultaTarjeteroNombre };