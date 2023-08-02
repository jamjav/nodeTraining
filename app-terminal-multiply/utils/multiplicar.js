const fs = require("fs");

const crearArchivo = (base = 5, limit, listar) => {


    let salida = "";

    for (let index = 1; index <= limit; index++) {
        salida += `${base} ${ '*'.red} ${index} = ${base * index}\n`;
    }

    if (listar) {
        console.log("====================");
        console.log(`    Tabla del ${base}:    `);
        console.log("====================");
        console.log(salida);
    }

    fs.writeFileSync(`out/tabla-${base}.txt`, salida);
    console.log("Archivo Creado Correctamente");
};

const crearArchivoPromise = (base = 5, limit ,listar) => {
    return new Promise((resolve, reject) => {

        let salida = "";

        for (let index = 1; index <= limit; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFileSync(`out/tabla-${base}.txt`, salida);

        if (listar) {
            console.log("====================");
            console.log(`    Table del ${base}:    `);
            console.log("====================");
            console.log(salida);

        }
        resolve(`out/tabla-${base}.txt`);
    });
};

const crearArchivoPromise2 = async (base = 5, limit, listar) => {

    try {


        let salida = "";

        for (let index = 1; index <= limit; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFileSync(`out/tabla-${base}.txt`, salida);

        if (listar) {
            console.log("====================");
            console.log(`    Table del ${base}:    `);
            console.log("====================");
            console.log(salida);

        }
        return `out/tabla-${base}.txt`;

    } catch (error) {
        throw error;

    }

};

module.exports = {
    crearArchivo,
    crearArchivoPromise,
    crearArchivoPromise2
};
