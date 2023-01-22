//convertir array a string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits);

//metodo donde especificas el separador (tambien lo cambia a string)
console.log(fruits.join(" | "));

//remueve el ultimo elemento del array
console.log(fruits.pop());
//agrega un nuevo elemento al final (regresa el tamaño del array)
console.log(fruits.push("kiwi"));
//remueve el primer elemento del array y recorre los elementos a un index menor
console.log(fruits.shift());

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//unshift agrega un nuevo elemento al array en el inicio y recorre los demas elementos
console.log(fruits1.unshift("Lemon")); //nos da el size del array
console.log(fruits1);
//alternativa para push()
fruits1[fruits1.length]="Kiwi";
console.log(fruits1);
//concatena arrays
const myGirls = ["Amanda", "Cristine"];
const myBoys = ["Jordan", "Adam", "Chris"];
const myParents = ["Erik", "Rosa"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren, myParents);

//add new items to an array
const frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.splice(1,0,"Manzana", "Uva");
console.log(frutas);
//se puede usar para remover elementos sin dejar huecos en el array
frutas.splice(0,1);
console.log(frutas);
//slices out a piece of an array into a new array.
//este metodo crea un nuevo array
const citrus = frutas.slice(1);
console.log(citrus);
//tambien puede tomar dos argumentos
const frutilla = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citruz = frutilla.slice(0,3); // 0 = posicion, 3 = cantidad que quita (sin contar esa posicion)
console.log(citruz);

