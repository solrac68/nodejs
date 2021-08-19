console.log('Inicio de Programa')

const timeout = 3000

setTimeout(() => {
    console.log('Primer TimeOut');
}, timeout);

setTimeout(() => {
    console.log('segundo TimeOut');
}, 0);

setTimeout(() => {
    console.log('tercer TimeOut');
}, 0);

console.log('Fin de Programa')