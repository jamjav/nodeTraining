const empleados = [
    {
        id: 1,
        nombre: "James",
    },
    {
        id: 2,
        nombre: "Javier",
    },
    {
        id: 3,
        nombre: "Daniel",
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Èmpleado con id ${id} no existe`);
    }
};

const getSalario = (id, callback) => {
    const salario = salarios.find((e) => e.id === id);

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
};

const id = 1;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            console.log("ERROR");
            return console.log(err);
        }

        console.log("El Empleado Existe:", empleado, 'tiene un salario de:', salario);

    });

});


