const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base del valor a multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'imprime la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde multiplicar'
    })
    .check((argv, options) => {
        if ( isNaN(argv.b)) throw 'base must be a Number'
        if ( isNaN(argv.h)) throw 'limit must be a Number'

        return true;
    })
    .argv;

    module.exports = argv;