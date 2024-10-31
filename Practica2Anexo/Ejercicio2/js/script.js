document.addEventListener("DOMContentLoaded",function () {
    const form = document.querySelector("form");

    form.addEventListener("submit",(event)=> {
        var dniInput = document.getElementById("dni").value;

        if (dniInput.trim() === "") {
            event.preventDefault();
            alert("El campo dni tiene que estar completo");
        }
    });
});