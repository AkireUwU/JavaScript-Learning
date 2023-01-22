"use strict";
x = 5; //the block of code is aware of the variable, but it cannot be used until it has been declared
document.getElementById("demo").innerHTML = x;
var x;

//eror cuando se define con let
try {
    carname = "saab";
    let carname = "Volvo";

}catch(err) {
    document.getElementById("demo1").innerHTML = err;
}
//error cuando se define con const
try{
    valor = 500;
    const valor = 500;
}catch(err) {
    document.getElementById("demo2").innerHTML = err;
}

//para evitar bugs siempre declara las variables at the beginning of every scope




