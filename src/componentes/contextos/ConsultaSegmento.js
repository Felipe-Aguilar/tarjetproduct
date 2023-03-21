const ConsultaSegmento = async(datosUsuarioId) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaSegmentosXUsu/?Usutarjetid=${datosUsuarioId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ConsultaSegmento };