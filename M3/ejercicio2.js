let datos = [
    {
        "nombre": "Plan 001",
        "capital": 150000,
        "plazo": 30,
        "tasa": 0.15,
    },
    {
        "nombre": "Plan 002",
        "capital": 300000,
        "plazo": 180,
        "tasa": 0.1,
    },
    {
        "nombre": "Plan 003",
        "capital": 485000,
        "plazo": 60,
        "tasa": 0.3,
    }   
]

function agregarIntereses(datos){
    for (let i = 0; i < datos.length; i++) {
        datos[i].intereses = (datos[i].capital * datos[i].tasa * datos[i].plazo)/100;
    }
    return datos;
}

datos = agregarIntereses(datos);
console.log(datos);

