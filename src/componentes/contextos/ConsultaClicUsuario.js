const ConsultaClicUsuario = async (IdTarjet) => {
    const response = await fetch(`http://192.168.0.9/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaMiTarjet/?Usutarjetid=${IdTarjet}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ConsultaClicUsuario };