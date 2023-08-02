

const deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre(){
        return `${ this.nombre } ${this.apellido }`
    }

}


function imprimeHeroe({ nombre, apellido, poder, edad = 0 }){

    //const { nombre, apellido, poder, edad = 0 } = heroe

    console.log(nombre, apellido, poder, edad);

}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//const { nombre, apellido, poder, edad = 0 } = deadpool
//console.log(nombre, apellido, poder, edad);
//console.log(deadpool);

imprimeHeroe(deadpool);

