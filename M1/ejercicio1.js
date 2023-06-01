const button = document.querySelector("button");
var formulario = document.getElementById('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    var costosFijos = document.getElementById('costos-fijos').value;
    var precioVenta = document.getElementById('precio-venta').value;
    var costosVariables = document.getElementById('costos-variables').value;   
    alert("El punto de equilibrio es: " + (costosFijos / (precioVenta - costosVariables)));
});










