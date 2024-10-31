document.addEventListener("DOMContentLoaded",function () {
    const link = document.getElementById("hipervinculo");
    
    link.addEventListener("mouseover", (event)=>{
        event.preventDefault();
        alert("Estas encima del link.");
    })
});