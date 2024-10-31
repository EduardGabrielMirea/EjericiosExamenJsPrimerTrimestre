document.addEventListener("DOMContentLoaded",function () {
   var mostIva = document.getElementById("most-iva");
   var mostTotal = document.getElementById("most-total");

   
    var precio = prompt("Introduce un precio.");
   var precioFloat = parseFloat(precio);
    
   function calcularIva(precioFloat) {
        return (precioFloat * 21) / 100;
    }
    var iva = calcularIva(precioFloat);
    var total = precioFloat + iva;

    mostIva.textContent = `El iva es ${iva.toFixed(2)}`;
    mostTotal.textContent = `El total con iva es ${total}`;

});