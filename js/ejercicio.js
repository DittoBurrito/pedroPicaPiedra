let respuestaPreguntaProducto = prompt("¿Desea ingresar un producto? 1. Sí 2. No");

while (respuestaPreguntaProducto == "1") {
    let valorProducto = parseFloat(prompt("Ingrese valor del producto"));
    let ganancia = valorProducto * 0.05;

    if (valorProducto < 10000) {
        alert("La ganancia es " + ganancia);
    } else if (valorProducto >= 10000 && valorProducto < 50000) {
        alert("El valor del producto supera los 10.000, la ganancia es " + (ganancia * 2));
    } else if (valorProducto >= 50000) {
        alert("El valor del producto supera los 50.000, la ganancia es " + (ganancia * 3));
    }

    // Pregunta si desea ingresar otro producto
    respuestaPreguntaProducto = prompt("¿Desea ingresar otro producto? 1. Sí 2. No");
}
