//tenemos tres tipos de scope
//block scope
{
    let x = 2; //x no puede ser usado fuera del block scope
    var y = 2; //y si puede ser usado fuera del block scope
}

//local scope


//automatically global
myFunction();
function myFunction() {
    carName = "Volvo";
}
console.log(carName);

//in html global variables defined with car will become window variables
var chanchito = "Pedro Backyardigan";
document.getElementById("demo").innerHTML = "Nombre del Chanchito: " + window.chanchito;

//en html global variables defined with let, will not become window variables
let chanchito1 = "Pablo Backyardigan";
document.getElementById("demo1").innerHTML = "Nombre del Chanchito 1: " + window.chanchito1;
