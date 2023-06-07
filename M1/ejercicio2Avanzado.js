const button = document.querySelector("button");

//form ingreso
var formFinanzas = document.getElementById('formFinanzas');

//div oculto de categorias
var divCategoria = document.getElementById('divCategoria');
var formEnviarCategorias = document.getElementById('formEnviarCategorias');

//div donde se muestran las categorias
var mostrar = document.getElementById('mostrar');

//array de categorias
let categorias = [];

//agrego el evento click a los botones
const agregar = document.getElementById("agregar");

agregar.addEventListener("click", function (event) {
    event.preventDefault();
    agregar.style.display = "none"; //oculto el div de categorias
    
    const inputCategoria = document.createElement("input");//input para agregar categorias
    const inputPorcentaje = document.createElement("input");//input para agregar porcentaje
    
    const buttonEnviar = document.createElement("button");//boton para enviar los datos
    buttonEnviar.textContent = "Agregar";
    buttonEnviar.id = "enviar";
    buttonEnviar.type = "submit";

    //agrego los atributos a los inputs
    inputCategoria.type = "text";
    inputCategoria.placeholder = "Ingrese el nombre de la categoría: ";
    inputCategoria.required = true;
    inputPorcentaje.type = "number";
    inputPorcentaje.placeholder = "Ingrese el porcentaje de la categoría: ";
    inputPorcentaje.required = true;

    //agrego los inputs y el boton al div
    divCategoria.appendChild(inputCategoria);
    divCategoria.appendChild(inputPorcentaje);
    divCategoria.appendChild(buttonEnviar);

    formEnviarCategorias.addEventListener("submit", function (event) { //evento click del boton enviar que guarda las categorias en el array
        event.preventDefault();
        //rescato el valor de los inputs
        var nombreCategoria = inputCategoria.value;
        var porcentajeCategoria = inputPorcentaje.value;

        //creo el objeto categoria
        let categoria = {
            nombre: nombreCategoria,
            porcentaje: porcentajeCategoria
        }

        categorias.push(categoria); //agrego el objeto categoria al array

        // Limpio los inputs de categoría después de enviar los datos para que se puedan seguir ingresando mas categorías
        inputCategoria.value = "";
        inputPorcentaje.value = "";

        //muestro las categorias creadas
        let h3 = document.createElement("h3");
        h3.textContent = categoria.nombre + " -> " + categoria.porcentaje + "%";
        divCategoria.appendChild(h3);
    })
});

//agrego el evento submit al form
formFinanzas.addEventListener('submit', function (event) {
    event.preventDefault();
    var ingreso = document.getElementById('ingreso-total').value;

    //muestro el div con las categorias creadas y el gasto de cada una
    categorias.forEach(categoria => {
        let h2 = document.createElement("h2");
        let gastos = ingreso * categoria.porcentaje / 100;
        h2.textContent = categoria.nombre + ": " + "$" + gastos;
        mostrar.appendChild(h2);
    })
});