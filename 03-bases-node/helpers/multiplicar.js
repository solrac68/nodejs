const fs = require('fs');


const crearArchivoSyn = (base = 7, listar=true) => {

    let salida = '';
    for(let i = 1;i <= 10;i++){
        let vari =  `${base} X ${i} = ${base * i}\n`;

        salida += vari;
    }

    if (listar) {
        console.log('================================================');
        console.log(`                  Tabla del: ${base}`)
        console.log('================================================');
        console.log(salida);
    }

    const nombreArchivo = `tabla-${base}.txt`;

    fs.writeFileSync(nombreArchivo,salida);

    return nombreArchivo;

}

const crearArchivo = async(base = 7, listar) => {
    try {
        const nombreArchivo = await crearArchivoSyn(base, listar);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}