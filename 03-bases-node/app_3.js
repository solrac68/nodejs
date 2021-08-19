const {crearArchivo} = require('./helpers/multiplicar');

//const base = 17;

//console.log(process.argv);

const [,,arg3='base=7'] = process.argv;
const [,base=5] = arg3.split('=')

console.log(base);

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
