//convertir string a numero
console.log(Number("3.12"));
console.log(parseFloat("323.01"));

let y = "5";
let x = + y;
console.log(typeof(x));

//numeros a strings
let z = 3434.3434;
let e = String(z);
console.log(typeof(z));
console.log(e);
console.log(typeof(z.toString()));
console.log(z.toExponential());
console.log(z.toFixed(1));

//convertir dates a numeros
d = new Date();
console.log(Number(d));

//convertir dates a strings
console.log(typeof(String(Date())));
console.log(Date().toString());

//converti booleanos a numeros
console.log(Number(false));