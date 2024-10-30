let usuarios = [
    { "usuario": "admin", "contrasena": "1234" }
];

let intentos = 3;

document.getElementById("login-button").addEventListener("click", function() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contrasena").value;


    let usuarioValido = usuarios.find(u => u.usuario === user && u.contrasena === password);

    if (usuarioValido) {
        alert("¡Bienvenido!");
        window.location.href = "/pages/home.html";
    } else {
        intentos--;
        alert(`Usuario o contraseña incorrectos. Te quedan ${intentos} intentos.`);

        if (intentos === 0) {
            alert("Has agotado todos los intentos.");
            window.location.href = "/pages/cerrado.html";
        }
    }
});

