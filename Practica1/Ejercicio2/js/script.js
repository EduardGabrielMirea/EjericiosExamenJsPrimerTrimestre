document.addEventListener("DOMContentLoaded", function () {
    var numeros = [7, 8, 2, 9, 10];
    var suma = 0;

    for (let index = 0; index < numeros.length; index++) {
        var numero = numeros[index];
        if (numero > 8) {
            suma += numero;
        }
    }

    var mostrarSuma = document.getElementById("mostrar-suma");

    mostrarSuma.textContent = `La suma es : ${suma}`;
});