let usuarios = [{
    "usuario":"admin",
    "contrasena": 1234
}]
let intentos = 3

let user = document.getElementById("usuario").value
let password = document.getElementById("contrasena").value

function ValidarUsuario (usuario, contrasena){
    for (let index = 1; index <= intentos; index++) {
        if (usuarios.usuario == usuario && usuarios.contrasena ==contrasena){
            window.location.href = "/pages/home.html"
        }
        
    }
}

