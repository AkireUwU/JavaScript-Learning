let x = 123;
x.toString();
console.log((200+23).toString());

let y = 9.656;
console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

console.log(y.toFixed(5));
console.log(y.toPrecision(9));

console.log(Number("10.33"));
console.log(Number(new Date("1970-01-01")));
//returns the number of milliseconds

console.log(parseInt("10 years, 20"));

valor = 10;
console.log(Number.isInteger(valor));

let numero = 40.5
console.log(Number.parseFloat(numero));