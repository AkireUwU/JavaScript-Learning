let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;

//extraer una porcion de un string
let texto = "Apple, Banana, Kiwi";
let part = texto.slice(7,13);
document.getElementById("texto").innerHTML = part;

//replace
let mensaje = document.getElementById("mensaje").innerHTML;
document.getElementById("mensaje").innerHTML = mensaje.replace("Feliz","Triste");

//replace case insensitive and all matches
let oracion = "please visit microsoft";
let neworacion = oracion.replace(/MICROSOFT/i,"W3Schools");
document.getElementById("oracion").innerHTML = neworacion;

let texto1 = "Please visit microsoft, microsoft";
let newTexto = texto1.replace(/microsoft/g,"W3Schools");
document.getElementById("texto1").innerHTML = newTexto;

let mensaje1 = "Me gustan los mishis, los Mishis son muy lindos";
mensaje1 = mensaje1.replaceAll("mishis","chanchitos");
mensaje1 = mensaje1.replaceAll("Mishis","Chanchitos");
document.getElementById("mensaje1").innerHTML = mensaje1;

//mayusculas y minusculas
let text1 = "Hello Chanchito!";
text1 = text1.toLowerCase();
document.getElementById("text1").innerHTML = text1;

//concatenacion de strings: we can use this instead of the plus operator
let text2 = "Hola";
let text3 = "Chanchito!";
let text4 = text2.concat(" ",text3);
document.getElementById("text4").innerHTML = text4;

//this method remove whitespaces
let text5 = "   Buenos dias!   ";
let text6 = text5.trim();
document.getElementById("text6").innerHTML = text6;

//extraer string characters
let caracter = "Chanchito";
caracter = caracter.charAt(1);
document.getElementById("caracter").innerHTML = caracter;

let caracterz = "osito";
let caracter1 = caracterz.charCodeAt(0);
document.getElementById("caracter1").innerHTML = caracter1;

//convertir un string a un array
let texto7 = "a,b,c,d,e,f";
const myArray = texto7.split(",");
document.getElementById("array").innerHTML = myArray[0];

