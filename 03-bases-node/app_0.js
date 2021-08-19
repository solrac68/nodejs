const fs = require('fs');

console.clear();
console.log('================================================');
console.log('                  Tabla del: 5')
console.log('================================================');
// 5 x 1 = 5
// 5 x 2 = 10
const base = 27;
let salida = '';
for(let i = 1;i <= 10;i++){
    let vari =  `${base} X ${i} = ${base * i}\n`;
    //console.log(vari);
    salida += vari;
}
console.log(salida);

fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
    if(err) throw err;
    console.log(`tabla-${base}.txt Creado`);
})