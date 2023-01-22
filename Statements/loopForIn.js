//Js for in

//this statement loops through the properties of an object
//for (key in object)
const person = {
    name: "John",
    surname: "Juan",
    age: 25
};

let text = "";
for (let i in person) {
    text += person[i] + " | ";
}
console.log(text);

//it can also loop through an array
const array = [1, 3, 4, 5, 9];
let mensaje = "";
for (let x in array) {
    mensaje += array[x] + " | ";
}
console.log(mensaje);
//do not use it in arrays when the order is important, use a for loop or Arra.foreach()

//forEach() method calls a function once for each array element
const numbers = [34,12,45,23,16];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    txt += value + " | ";
}
console.log(txt);

