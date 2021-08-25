const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false
                })
                .check((argv,options) => {
                    console.log('yargs', argv)
                    if(isNaN(argv.b)){
                        throw 'The base has to be a number'
                    }
                    return true;
                })
                .argv;

console.clear();

console.log(argv);

//console.log(`base: yargs: ${argv.base}`);


crearArchivo(argv.base,argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
