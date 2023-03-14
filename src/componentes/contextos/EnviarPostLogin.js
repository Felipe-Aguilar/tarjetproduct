const enviarPostLogin = async (usuarioForm, passwordForm) => {
    const response = await fetch('http://192.168.0.4/Tarjet_v1.NETFrameworkEnvironment/APIUsuDtos/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Cuenta": usuarioForm,
            "Password": passwordForm,
        })
    });
    const data = await response.json();

    return data;
}

export { enviarPostLogin };