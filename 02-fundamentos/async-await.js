const empleados = [
    {
        id:1,
        nombre:'Fernando'
    },
    {
        id:2,
        nombre:'Carlos'
    },
    {
        id:3,
        nombre:'Karen'
    }
];

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    }
]

const getEmpleado = (id) => {
    
    const promesa = new Promise((resolve, reject) => {
        
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id: ${id}`);
         
    });

    return promesa;
};

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) => {
        
        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id: ${id}`);
            
    });

    return promesa;
};

const getHola = async() => {
    return 'Hola Mundo';
}

getHola().then(msg => console.log(msg));

const id = 2;

const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error){
        throw error;
    }
}

getInfoUsuario(id).then(msg => 
    {
        console.log('TODO BIEN');
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL');
        console.log(err);
    })



