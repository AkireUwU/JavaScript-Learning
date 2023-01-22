//looping over an array
const cars = ["BMW","Volvo","Mini"];
let txt = "";

for (const x of cars) {
    txt += x + " | ";
}
console.log(txt);

//looping over a string
let name = "Erika";
let text = "";
for (const i of name) {
    text += i + " | ";
}
console.log(text);