const names = ["Erika"];
names[1] = "Jordan";
names[2] = "Rosa";
console.log(names);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(list = fruits[i]);
}

//adding array elements
fruits.push("lemon");
console.log(fruits);

fruits[fruits.length] = "manzana";
console.log(fruits);

/*
you should use objects when you want 
the element names to be strings (txt).

you should use arrays when you want
the elements names to be numbers.
*/

//create an array with one element
const points = [40];
//create an array with 40 undefined elements
const points1 = new Array(40);

//saber si una variable es un array
const colores = ["red","blue","green"];
//diferentes formas
console.log(Array.isArray(colores));
console.log(colores instanceof Array);