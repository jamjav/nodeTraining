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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id);

        (empleado)
            ? resolve(empleado)
            : reject(`Èmpleado con id ${id} no existe`);
    });
};

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id);

        (salario)
            ? resolve(salario)
            : reject(`Salario con id ${id} no existe`);
    });
};

const id = 10;
// getEmpleado(id)
//     .then((empleado) => console.log(empleado))
//     .catch((err) => console.log(err));


// getSalario(id)
//     .then((salario) => console.log(salario))
//     .catch((err) => console.log(err));

// getEmpleado(id)
//     .then(empleado =>{
//         getSalario(id)
//         .then(salario => {
//             console.log('El Empleado:', empleado, 'tiene el salario', salario)
//         })
//     })
//     .catch(err => console.log(err));

let VarEmpleado;

getEmpleado(id)
    .then(empleado => {
        VarEmpleado = empleado;
        return getSalario(id);
    })
    .then(salario => console.log('El Emplado ', VarEmpleado, 'Tiene salario ', salario) )
    .catch(err => console.log(err));