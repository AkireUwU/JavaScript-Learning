/* 
este metodo regresa la posicion
donde aparece por primera vez
el string buscado dentro del string
*/

let str = "Los mishis son muy esponjosos";
document.getElementById("str").innerHTML = str.indexOf("esponjosos");

let text = "el oso es cafe, y tambien PEREZOSO";
document.getElementById("text").innerHTML = text.match(/oso/gi);

let text1 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text1.matchAll(/Cats/g);
document.getElementById("text1").innerHTML = Array.from(iterator);

//regresa true si el string contiene el valor especificado
let text2 = "Los chanchitos son muy lindos";
document.getElementById("text2").innerHTML = text2.includes("chanchitos");

