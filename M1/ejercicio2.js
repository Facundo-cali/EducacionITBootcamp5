const button = document.querySelector("button");
var formFinanzas = document.getElementById('formFinanzas');


formFinanzas.addEventListener('submit', function(event) {
    event.preventDefault();
    var ingreso = document.getElementById('ingreso-total').value;  
    var gastosNece = ingreso * 0.5;
    var gastosDese = ingreso * 0.3;
    var ahorro = ingreso * 0.2;
    document.getElementById('resultado').textContent = "Gastos necesarios: " + gastosNece;
    document.getElementById('resultado2').textContent = "Gastos deseados: " + gastosDese;
    document.getElementById('resultado3').textContent = "Ahorro: " + ahorro;

});