const ConsultaSegmento = async(datosUsuarioId) => {
    const response = await fetch(`http://192.168.0.9/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaSegmentosXUsu/?Usutarjetid=${datosUsuarioId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ConsultaSegmento };