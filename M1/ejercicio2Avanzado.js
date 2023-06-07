const button = document.querySelector("button");
//form ingreso
var formFinanzas = document.getElementById('formFinanzas');

//div oculto de categorias
var divCategoria = document.getElementById('divCategoria');

//div donde se muestran las categorias, oculto tambien
var mostrar = document.getElementById('mostrar');

//array de categorias
let categorias = [];

//agrego el evento click al boton
const agregar = document.getElementById("agregar");


agregar.addEventListener("click", function (event) {
    event.preventDefault();
    //input para agregar categorias
    const inputCategoria = document.createElement("input");
    //input para agregar porcentaje
    const inputPorcentaje = document.createElement("input");
    //boton para enviar los datos
    const buttonEnviar = document.createElement("button");
    buttonEnviar.textContent = "Agregar";
    buttonEnviar.id = "enviar";

    //agrego los atributos a los inputs
    inputCategoria.type = "text";
    inputCategoria.placeholder = "Ingrese el nombre de la categoría: ";
    inputCategoria.required = true;
    inputPorcentaje.type = "number";
    inputPorcentaje.placeholder = "Ingrese el porcentaje de la categoría: ";
    inputPorcentaje.required = true;

    //agrego los inputs al div
    //agrego el boton al div
    divCategoria.appendChild(buttonEnviar);
    divCategoria.appendChild(inputCategoria);
    divCategoria.appendChild(inputPorcentaje);

    //evento click del boton enviar que guarda las categorias en el array
    buttonEnviar.addEventListener("click", function (event) {
        event.preventDefault();
        //rescato el valor de los inputs
        var nombreCategoria = inputCategoria.value;
        var porcentajeCategoria = inputPorcentaje.value;

        //creo el objeto categoria
        let categoria = {
            nombre: nombreCategoria,
            porcentaje: porcentajeCategoria
        }

        //agrego el objeto categoria al array
        categorias.push(categoria);
        console.log(categorias);

        // Limpio los inputs de categoría después de enviar los datos para que se puedan seguir ingresando mas categorías
        inputCategoria.value = "";
        inputPorcentaje.value = "";
    })
})

//agrego el evento submit al form
formFinanzas.addEventListener('submit', function (event) {
    event.preventDefault();
    var ingreso = document.getElementById('ingreso-total').value;
    let h2 = document.createElement("h2");

    //muestro el div con las categorias creadas y el gasto de cada una
    categorias.forEach(function (categoria) {
        let h2 = document.createElement("h2");
        let gastos = ingreso * categoria.porcentaje / 100;
        h2.textContent = "Categoría: " + categoria.nombre + "-  Gastos: " + gastos;
        mostrar.appendChild(h2);
    })
});