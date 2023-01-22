//la propiedad constructor regresa the constructor function for all js variables

console.log("John".constructor);
console.log((3.14).constructor);
console.log(false.constructor);
console.log([1, 2, 3, 4].constructor);

//encontrar si un objeto es un array
const fruits = ["Pineapple","Apple","Watermelon"];
function myFunction(myArray) {
    console.log(myArray.constructor === Array);
}
myFunction(fruits);