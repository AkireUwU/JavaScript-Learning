function funcionChida() {
    const message = document.getElementById("errores"); 
    //el mensaje de errores ingresado en la variable message
    message.innerHTML = '';
    let x = document.getElementById("demo").value; //el valor del input ingresado en esta variable
    try{
        if(x.trim() == "") throw "Empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "Too low";
        if (x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}

function otraFuncion() {
    const mensaje = document.getElementById("error");
    mensaje.innerHTML = '';
    let y = document.getElementById("ingreso").value;
    var hasNumber = /\d/;
    let x = hasNumber.test(y);
    try {
        if(Number(y)) throw "Ingresa tu nombre correctamente";
        if(y.trim() == '') throw "Esta Vacio";
        if(x === true) throw "Cualquier numero no es valido";
        if(y[0] != y[0].toUpperCase()) throw "Ingresa la primera letra con mayuscula";
        
    }
    catch(err) {
        mensaje.innerHTML = err;
    }
    finally {
        document.getElementById("ingreso").value = "";
    }
}