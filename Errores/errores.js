
//el try statement define un bloque de codigo que correra (to try)
//the catch statement define un bloque de codigo para que maneje el error
//the finally statement define un codigo de bloque para correr a pesar de lo que sea el resultado
//the throw statement define un error custom

/*
el try statement te deja definir un bloque de codigo para que sea testeado para errores
mientras es ejecutado

el catch statement te deja definir un bloque de codigo para ser ejecutado sin un error ocurre
en el try block

try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}

*/
try {
    console.leg("Chanchito");
} catch(error) {
    console.log(error.message);
}

//el throw statement te deja crear un error customeable
//throw 'oka';

//the error object
/*
name: sets or returns an error name
message: sets or return an error message (a string)

en la propiedad de error existen 5 diferentes values que son regresados
*/

//Range Error
//error que sale si usas un numero que esta fuera del rango de valores
let num = 1;
try {
    console.log(num.toPrecision(500));
}
catch(err) {
    console.log(err.name);
}

//Reference Error
//error que sale si usas una variable que no ha sido declarada
let x = 5;
try {
    x = y + 1; //y no puede ser usada
} catch(err) {
    console.log(err.name);
}

//Syntax Error
//error que sale cuando tratas de evaluar codigo con un sintax error

try {
    eval("alert('Hello)"); //falta otra '
} catch(err) {
    console.log(err.name);
}

//Type Error
//un type error es thrown si usas un valor que esta fuera del rango de expected types

let valor = 1;
try {
    valor.toUpperCase(); //no puedes convertir un numero a upper case
}
catch(err) {
    console.log(err.name);
}

//URI (Uniform Resource Identifier) Error
//este error sale si usas caracteres ilegales en una funcion URI

try {
    decodeURI("%%%") //no puedes uri decode percent signs
} catch(err) {
    console.log(err.name);
}