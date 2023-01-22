//coleccion de valores unicos, cada valor solo ocurre una vez en un set
//crear un set
const letters = new Set(["a", "b", "c"]);
console.log(letters);
letters.add("d");
console.log(letters);
//agregar variables
const e = "e";
letters.add(e);
console.log(letters);
//este metodo llama a una funcion por cada elemento del set
let txt = " ";
letters.forEach(function(value){
    txt += value + " | ";
})
console.log("|" + txt);

console.log(letters.values());
let text = " ";
for (const x of letters.values()) {
    text += x + " | ";
}
console.log("|" + text);
