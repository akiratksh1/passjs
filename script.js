function generatePassword() {
    const tamanhoSenha = document.getElementById("slider").value;
    const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
    let senhaGerada = "";

    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senhaGerada += caracteresPermitidos.charAt(indiceAleatorio);
    }

    document.getElementById("password").textContent = senhaGerada;
}
