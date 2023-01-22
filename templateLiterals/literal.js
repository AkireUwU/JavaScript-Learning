let firstName = "Erika";
let lastName = "Gomez";
//formas de concatenar strings
let text = `Welcome ${firstName}, ${lastName}`;
document.getElementById("demo").innerHTML = text;

//template literals allows variables in strings
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1+VAT)).toFixed(2)}`;
document.getElementById("text").innerHTML = total;

//numeros gigantes
let x = BigInt(9007199254740995);
let y = BigInt(9007199254740995);
let z = x * y;
document.getElementById("text1").innerHTML = z;
//no pueden tener decimales

//usar explicit conversions para cambiar el valor
let a = 5n;
let b = Number(a) / 2;
document.getElementById("text2").innerHTML = b; 

//precision
let c = 9007199254740992;
c = Number.MAX_SAFE_INTEGER;
document.getElementById('text3').innerHTML = c;

let d = 9007199254740992;
d = Number.MIN_SAFE_INTEGER;
document.getElementById('text4').innerHTML = d;