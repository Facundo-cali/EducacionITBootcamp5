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

let informacion = [];

datos.forEach((oferta) => {
    let interes = (oferta.capital * oferta.plazo * oferta.tasa)/100;
    informacion.push({
        "nombre": oferta.nombre,
        "capital": oferta.capital,
        "plazo": oferta.plazo,
        "tasa": oferta.tasa,
        "interes": interes
    });
});

for(let i = 0; i < informacion.length; i++) {
    console.log(informacion[i]);
}
