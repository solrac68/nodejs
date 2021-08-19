


// setTimeout(() => {
//     console.log('Hola Mundo')
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre:'Fernando'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioByID('71701882', (usu) => {
    console.log(usu.id);
    console.log(usu.nombre);
})
//getUsuarioByID(5)