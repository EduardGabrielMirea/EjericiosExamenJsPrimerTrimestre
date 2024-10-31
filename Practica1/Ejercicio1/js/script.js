document.addEventListener("DOMContentLoaded", function () {
    var mostSuma = document.getElementById("most-suma");
    var mostMayores = document.getElementById("most-mayores");

    var numeros = [1, 2, 100, 200, 300];
    var suma = 0;
    var mayores = 0;

    for (let index = 0; index < numeros.length; index++) {
        var numero = numeros[index];
        suma += numero;
        if (numero > 100) {
            mayores++;
        }
    }

    mostSuma.textContent = `La suma de los numeros es: ${suma}`;
    mostMayores.textContent = `Hay ${mayores} numeros mayores a 100`;
});