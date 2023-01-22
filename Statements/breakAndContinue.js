//break
let text = "";
for (let index = 0; index < 10; index++) {
    if (index == 3) {break; }
    text += "The number is " + index + " | ";
}
console.log(text);

//continue
//breaks one iteration. if a specified condition occurs, and continues with the next iteration in the loop
let texto = "";
for (let k = 0; k < 10; k++) {
    if (k == 3) {continue; }
    texto += "The number is " + k + " | ";
}
console.log(texto);
