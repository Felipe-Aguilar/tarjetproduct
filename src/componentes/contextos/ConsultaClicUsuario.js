const ConsultaClicUsuario = async (IdTarjet) => {
    const response = await fetch(`http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/ConsultaMiTarjet/?Usutarjetid=${IdTarjet}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    const dataUsuario = await response.json();

    return dataUsuario;
}

export { ConsultaClicUsuario };