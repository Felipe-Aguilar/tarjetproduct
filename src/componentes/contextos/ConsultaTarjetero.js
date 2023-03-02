
const ConsultaTarjetero = async( datosUsuarioId ) => {
    const response = await fetch(`http://192.168.0.9/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

const ConsultaTarjeteroFiltro = async(datosUsuarioId, segmentoId) => {
    const response = await fetch(`http://192.168.0.9/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaTarjetero/?Usutarjetid=${datosUsuarioId}&Segmentoid=${segmentoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const dataUsuario = await response.json();

    console.log(dataUsuario);

    return dataUsuario;
}

export  { ConsultaTarjetero, ConsultaTarjeteroFiltro };