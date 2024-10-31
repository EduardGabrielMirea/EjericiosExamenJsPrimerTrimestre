document.addEventListener("DOMContentLoaded",function () {
    const from = document.querySelector("form");
    const contador = document.getElementById("contador");

    contador.readOnly = true;

    from.addEventListener("click", function (event) {
        if (event.target.id === "sumar") {
            contador.value = parseInt(contador.value,10) + 10;
        } else if (event.target.id === "inicializar"){
            contador.value = 0;
        }        
    });
});