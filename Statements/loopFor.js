//loops

const names = ["Amanda", "Erika", "Rosa", "Jordan", "Pablito"];

let text = "";
for (let i = 0; i < names.length; i++) {
    text += names[i] + " ";
    console.log(text);
}
console.log(text);


let mensaje = "";
for (let i = 1; i <= 5; i++) {
    mensaje += "El numero es " + i + " | ";
}
console.log(mensaje + " ");

//se pueden omitir algunas expresiones
const colors = ["Blue", "Pink"];
let i = 0;
let len = colors.length;
let print = "";

for (; i < len; i++) {
    print += colors[i] + " | ";
}
console.log(print);

