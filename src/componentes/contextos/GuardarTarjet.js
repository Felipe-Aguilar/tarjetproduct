const GuardarTarjet = (IdSesion, IdTarjet) => {
    fetch('http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/GuardaTarjet', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "TarjetGIdUsuario": IdSesion,
            "TarjetGIdTarjet": IdTarjet,
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export { GuardarTarjet };