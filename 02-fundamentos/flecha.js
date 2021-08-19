function sumar(a,b=5){
    return a + b
}

console.log(sumar(1,2)); // 3
console.log(sumar(1)); // 6

const sumarf = (a,b=5) => {
    return a + b;
}

console.log(sumarf(1,2)); // 3
console.log(sumarf(1)); // 6

const sumarff = (a,b=5) => a + b;

console.log(sumarff(1,2)); // 3
console.log(sumarff(1)); // 6
