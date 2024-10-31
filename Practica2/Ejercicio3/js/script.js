document.addEventListener("DOMContentLoaded",function () {
    var title = document.getElementById("title");
    var mensaje = "Bienvenido a mi página";
    title.textContent = `${mensaje}`;

    var navegador = document.getElementById("navegador");
    navegador.textContent = navigator.userAgent;

    if (confirm("¿Quieres continuar?")) {
        alert("Continuamos...");
    }else{
        alert("No continuamos.");
    }
});