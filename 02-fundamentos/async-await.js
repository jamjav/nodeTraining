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

const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado: ${empleado.nombre} tiene un salario: ${salario.salario}`;
        
    } catch (error) {
        throw error;        
    } 

}

const id = 3;
getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



