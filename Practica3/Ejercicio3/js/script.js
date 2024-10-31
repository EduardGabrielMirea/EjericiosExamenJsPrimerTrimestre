document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    contenedor.addEventListener("click", function (event) {
        //const botonera = document.getElementsByTagName("button");

        if (event.target.id === "verde") {
            contenedor.style.backgroundColor = "green";
        } else if (event.target.id === "azul") {
            contenedor.style.backgroundColor = "blue";
        }else if (event.target.id === "restaurar") {
            contenedor.style.backgroundColor = "white";
        }

        /*
          if (event.target.id === "verde") {
            contenedor.style.backgroundColor = "green";
        } else if (event.target.id === "azul") {
            contenedor.style.backgroundColor = "blue";
        }else if (event.target.id === "rojo") {
            contenedor.style.backgroundColor = "red";
        }else {
            contenedor.style.backgroundColor = "white";
        }*/
    });
});