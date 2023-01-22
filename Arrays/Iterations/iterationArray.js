//calls a function once for each array element
const number = [3, 4, 2, 1, 92];
let txt = "";
function myFunction(value, index, array) { //la funcion ocupa tres argumentos
    console.log(txt += value + " ");
    console.log(number[0] + " ");
}
number.forEach(myFunction);

//este metodo crea un nuevo array llamando a la funcion para cada elemento del mismo

const number1 = [34, 43, 23, 12, 3];
const number2 = number1.map(myFunctionMap);

function myFunctionMap(value, index, array) {
    return value * 2;
}
//multiplica los valores del array por dos
console.log(number2);

//crea un nevo array con elementos del array anterior que pasan el test

const edades = [23, 24, 19, 20, 32, 18, 15, 19];
const min18 = edades.filter(miFunction);

function miFunction(value) { //no se usan los parametros index y array por lo cual pueden ser omitidos
    return value <= 20;
}
console.log(min18);

//runs a function on each array element to produce a single value
//tambien esta reduceRight()
const edades1 = [10, 10, 10, 10];
let sum = edades1.reduce(myFunction1, 100);

function myFunction1(total, value) {
    return total + value;
}
console.log(sum);

//checa si todos los valores del array pasan el test
const valores1 = [2, 4, 6, 8];
let dif10 = valores1.every(funcionChida);

function funcionChida(value, index, array) {
    return value != 10;
}
console.log(dif10);

//checa si algunos de los valores del array pasan el test
let menores6 = valores1.some(funcionChanchito);
function funcionChanchito(value) {
    return value < 6;
}
console.log(menores6);

//busca un elemento en un array y regresa su posicion

const frutillas = ["manzana", "uva", "banana", "sandia"];
let position = frutillas.indexOf("banana") + 1;
console.log(position);

/*

array.indexOf(item, start)

-start: opcional, donde comenzara la busqueda, los valores negativos hacen que nos de la 
posicion comenzando desde el final del array.

*/

//este regresa the position of the last occurrence of the specified element
const frutaz = ["apple", "banana", "apple"];
let posicion = frutaz.lastIndexOf("apple") + 1;
console.log(posicion);

//este metodo regresa el valor del primero elemento del array que pasa la test function
const numerillos = [18, 4, 5, 67, 25, 22, 100, 102];
let primero = numerillos.find(funcion);

function funcion(value) {
    return value > 100;
}

console.log(primero);
let indexprimero = numerillos.findIndex(funcion) + 1;
console.log(indexprimero);

//returns an array object from any object with a length property or any iterable object
const myArr = Array.from("Chanchito");
console.log(myArr);

//returns an array iterator object with the keys of the array
const misChanchitos = ["PabloBackyardigan", "Juan", "Maura", "lulu", "zzzz"];
const keys = misChanchitos.keys();
let text = " ";
for(let x of keys){
    text += x + " ";
}
console.log(text);

//checar si un elemento esta presente dentro de un array

const nombres = ["Pablo", "Juan", "Pepe", "Maikel"];
console.log(nombres.includes("Pablo"));
