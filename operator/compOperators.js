x = 5;

console.log(Boolean(x == 8));
console.log(Boolean(x == 5));
console.log(Boolean(x == "5"));
console.log(Boolean(x == new Number("5")));
//equal type
console.log(Boolean(x === 8));
console.log(Boolean(x === "5"));
console.log(Boolean(x != 8));
//not equal value or not equal type
console.log(Boolean(x !== "5"));

//operadores logicos

y = 3; z = 6;
console.log(y < 10 && z > 3);
console.log(y < 1 || z > 3);
console.log(!(z == y));

//conditional (ternary) operator
let age  = 2;
let name = (age < 18) ? "Muy joven" : "Ya es Adulto";
console.log(name);

//returns the first argument if its not nullish (null or undefined) otherwise it returns the second argument
let mensaje = null;
let text = 'missing';
let result = mensaje ?? text;
console.log(result);

//regresa undefined si un objeto es undefined or null (sin tirar error)
const car = {
    type : "Fiat",
    model : "500",
    color : "Pink" 
};
console.log(car?.name);
console.log(car?.type);