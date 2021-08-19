const deadpool = {
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    //edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre())

const {nombre, apellido, poder, edad = 0} = deadpool;

console.log(nombre, apellido, poder, edad)

function imprimeHeroe(heroe) {
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad)
}

function imprimeHeroe2({nombre, apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool);
imprimeHeroe2(deadpool);

const heroes = ['Deadpool', 'Superman','Batman'];

const [dead,supe,bat] = heroes;

console.log(dead,supe,bat);
