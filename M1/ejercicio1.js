const button = document.querySelector("button");
var form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    var costosFijos = document.getElementById('costos-fijos').value;
    var precioVenta = document.getElementById('precio-venta').value;
    var costosVariables = document.getElementById('costos-variables').value;   
    var resultado = costosFijos / (precioVenta - costosVariables);
    document.getElementById('resultado').textContent = "El punto de equilibrio es: " + resultado;
});









