//use a regular expression to do a case-insesitive search for "Erika"
let text = "Hi, my name is Erika";
let n = text.search(/erika/i);
console.log(n);
//replace a specified value with another value in a string
let mensaje = "Hi, are you happy?, yes I am Happy"
let z = mensaje.replace(/Happy/i, "Sad");
console.log(z);
//modifiers can be used to perform case-insensitive more global searches:
let txt = "My name is erika, erika is my full name";
let k = txt.search(/erika/i);
console.log(k);
let m = txt.search(/erika/g);
console.log(m);
//using test method
const pattern = /e/;
let string = "How beautiful is outside";
console.log(pattern.test(string));
console.log(/a/.test(string));
//exec method
const patron = /b/;
let cadena = "Que bonito eres";
console.log(patron.exec(cadena));