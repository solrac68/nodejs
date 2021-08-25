const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);

console.log(`base: yargs: ${argv.base}`);
console.log(`base: tipo: ${argv.tipo}`);
console.log(`otrabase: otrabase: ${argv.otrabase}`);



// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
//     .catch(err => console.log(err));
