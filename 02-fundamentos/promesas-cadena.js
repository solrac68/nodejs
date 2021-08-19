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

const id = 5;

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err));

