console.log(Math.PI);

//number to integer
let n = 1.49;
console.log(Math.round(n)); //redondea a su int cercano
console.log(Math.ceil(n)); //redondea hacia arriba
console.log(Math.floor(n)); //redondea hacia abajo
console.log(Math.trunc(n)); //regresa the integer part

{
    let n = -24;
    //si el valor es positivo o negativo
    console.log(Math.sign(n));
}

console.log(Math.pow(3,3));
console.log(Math.sqrt(4));
//valor absoluto
console.log(Math.abs(-11212));
//regesa sin del valor (en radianes)
console.log(Math.sin(90));
//a degrees
console.log(Math.sin(90 * Math.PI / 180));
//coseno en radianes
console.log(Math.cos(0));
console.log(Math.cos(0 * Math.PI / 180));
//encontrar el valor maximo o minimo en una lista de argumentos;
console.log(Math.min(0, 150, 45, 465, -200, 199));
console.log(Math.max(34, 56, 13, 575, 45, 1000));
//returns a random number
console.log(Math.random());
//logaritmo natural de x
console.log(Math.log(1));
//base 2 logarithm of x
console.log(Math.log2(1));
//returns the base 10 logarithm of x
console.log(Math.log10(1000));