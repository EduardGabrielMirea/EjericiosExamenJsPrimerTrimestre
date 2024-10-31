document.addEventListener("DOMContentLoaded",function () {
    var body = document.querySelector("body");
    var botonera = document.getElementById("botonera");

    botonera.addEventListener("click", function (event) {
        if (event.target.id === "azul") {
            body.style.backgroundColor = "blue";
        } else if(event.target.id === "verde") {
            body.style.backgroundColor = "green";
        } else if (event.target.id === "rojo"){
            body.style.backgroundColor = "red";
        }
    });

});