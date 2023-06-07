let datos = [
    {
        "mes": "Enero",
        "ingreso": 1500,
        "egreso": 1500,
    },
    {
        "mes": "Febrero",
        "ingreso": 2500,
        "egreso": 2500,
    },
    {
        "mes": "Marzo",
        "ingreso": 84683,
        "egreso": 1155,
    },
    {
        "mes": "Abril",
        "ingreso": 135353,
        "egreso": 1533,
    },
    {
        "mes": "Mayo",
        "ingreso": 1535,
        "egreso": 5434,
    },
    {
        "mes": "Junio",
        "ingreso": 4343354,
        "egreso": 5434543,
    },
    {
        "mes": "Julio",
        "ingreso": 435453,
        "egreso": 4543,
    },
    {
        "mes": "Agosto",
        "ingreso": 78351,
        "egreso": 7816,
    },
    {
        "mes": "Septiembre",
        "ingreso": 1878,
        "egreso": 95634,
    },
    {
        "mes": "Octubre",
        "ingreso": 48483,
        "egreso": 9433,
    },
    {
        "mes": "Noviembre",
        "ingreso": 35483,
        "egreso": 53133,
    },
    {
        "mes": "Diciembre",
        "ingreso": 3843,
        "egreso": 348133,
    },
]

function flujoDeCaja(datos) {
    let perdida = 0;
    let ganancia = 0;

    for (let i = 0; i < datos.length; i++) {
        perdida += datos[i].egreso;
        ganancia += datos[i].ingreso;
    }

    if (ganancia > perdida) {
        return 1;
    } else if (ganancia == perdida) {
        return 0;
    }else{
        return -1;
    }
}

console.log(flujoDeCaja(datos));