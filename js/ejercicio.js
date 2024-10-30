let respuestaEncuesta = prompt("¿Desea ingresar un producto? 1. Sí 2. No");

while (respuestaEncuesta == "1") {
    let valorProducto = parseFloat(prompt("Ingrese valor del producto"));
    let ganancia = valorProducto * 0.05;

    if (valorProducto < 10000) {
        alert("La ganancia es " + ganancia);

    respuestaEncuesta = prompt("¿Desea ingresar otro producto? 1. Sí 2. No");
}



