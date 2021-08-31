const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

console.log(argv);


crearArchivo(argv.base,argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'.bgGreen))
    .catch(err => console.log(err));
