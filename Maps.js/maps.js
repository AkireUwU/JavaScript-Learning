//un mapa tiene key value pairs donde las keys pueden ser de cualquier tipo de dato
const fam = new Map([
    ["Erika", 20],
    ["Jordan", 8],
    ["Rosa", 42]
]);
console.log(fam);
//agregar elementos
fam.set("Erik",41);
console.log(fam);
//tener el valor de la key en el mapa
console.log(fam.get("Erika"));
//regresa el numero de elementos en el mapa
console.log(fam.size);
//remover un elemento del mapa
fam.delete("Erik");
console.log(fam);
//regresa true si el key existe en el mapa
console.log(fam.has("Jordan"));
//llama a una funcion por cada par en el mapa
let txt = "";
fam.forEach(function(value, key){
    txt += key + " = "+value + " | ";
});
console.log(" | " + txt);

//regresa un objeto iterador con el key y values en el mapa
let text = "";
for (const x of fam.entries()) {
    text += x + " | ";
}
console.log(text);