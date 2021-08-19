const fs = require('fs');

const crearArchivo = (base = 7) => {

    console.clear();
    console.log('================================================');
    console.log(`                  Tabla del: ${base}`)
    console.log('================================================');

    let salida = '';
    for(let i = 1;i <= 10;i++){
        let vari =  `${base} X ${i} = ${base * i}\n`;

        salida += vari;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`,salida);

    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivo
}