const fs = require('fs');


const crearArchivoSyn = (base = 7) => {

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

    const nombreArchivo = `tabla-${base}.txt`;

    fs.writeFileSync(nombreArchivo,salida);

    return nombreArchivo;

}

const crearArchivo = async(base = 7) => {
    try {
        const nombreArchivo = await crearArchivoSyn(base);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}