document.addEventListener("DOMContentLoaded", function () {
    var mostrar = document.getElementById("mostrar");

    var cadena = prompt("Introduce una cadena: ");

    var cadenaLongitud = cadena.length;
    var cadenaMayuscula = cadena.toUpperCase();
    var cadenaMinuscula = cadena.toLowerCase();

    function separar(cadena) {
        var cadenaSeparada = cadena.split(" ");
        var palabra = " ";
        for (let index = 0; index < cadenaSeparada.length; index++) {
            palabra += cadenaSeparada[index] + "<br/>";
        }
        return palabra;
    }
    var cadenaNormal = separar(cadena);

    function reversa(cadena) {
        var cadenaSeparadaReves = cadena.split(" ").reverse();
        var palabraReves = " ";
        for (let index = 0; index < cadenaSeparadaReves.length; index++) {
            palabraReves += cadenaSeparadaReves[index] + "<br/>";
        }
        return palabraReves;
    }
    var cadenaReves = reversa(cadena);

    mostrar.innerHTML = `
   La longitud de la cadena es ${cadenaLongitud} caracteres.
    La cadena en mayusculas es ${cadenaMayuscula}.
    La cadena en minúsculas es ${cadenaMinuscula}.
    La cadena separada por espacios es ${cadenaNormal}.
    La cadena al reves es ${cadenaReves}.
   `;
});