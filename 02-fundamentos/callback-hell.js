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
    const empleado = empleados.find((e) => {
        return e.id === id
    });

    if (empleado){
        return empleado;
    } else {
        return `Empleado con id: ${id} no existe`;
    }
}

console.log(getEmpleado(1))
console.log(getEmpleado(2))
console.log(getEmpleado(3))
console.log(getEmpleado(5))

const getEmpleado2 = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id
    });

    if(empleado){
        callback(null,empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }  
}

const getSalario = (id, callback) => {
    const salario = salarios.find((e) => {
        return e.id === id
    })?.salario;

    if(salario){
        callback(null,salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }  
};

const id = 4

getEmpleado2(id, (err, empleado) => {
    console.log('Consulta con callback');
    if (err){
        console.log('ERROR¡');
        return console.log(err);
    }
    console.log(`Empleado existe`);
    console.log('Empleado:', empleado);

    getSalario(id, (err, salario) => {
        // console.log('Consulta con callback');
        if (err){
            return console.log(err);
        }
        // console.log(`Salario existe`);
        console.log('El empleado tiene un salario: ',salario);
    });

});



