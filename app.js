const { crearArchivo, crearArchivoPromise, crearArchivoPromise2 } = require('./utils/multiplicar')
const argv = require('./config/yargs');

require('colors')

console.clear();

/*
Metodo manual obtener parametros
const [,,args = 'base=1'  ] = process.argv;
const [,base ] = args.split('=');
*/

const base = argv.base;
const print = argv.listar;
const limit = argv.hasta;



crearArchivo(base, limit,print);

crearArchivoPromise(base, limit, print)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado x promesa opt 1'.rainbow))
    .catch(err => console.log(err));



crearArchivoPromise2(base, limit ,print)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado x promesa opt 2'))
    .catch(err => console.log(err));




