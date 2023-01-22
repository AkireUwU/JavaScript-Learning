function myFunction() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Ingrese un valor numerico";
    }
    else{
        voteable = (age < 18) ? "No puede votar" : "Puede votar";
    }
    if (age > 1000) {
        voteable = "Ingrese una edad correcta";
    }
    if (age < 0) {
        voteable = "Ingrese una edad correcta"
    }
    document.getElementById("demo").innerHTML = voteable;
}

function funcionName() {
    let texto;
    let nombre = document.getElementById("name").value;
    if (Number.isInteger(Number(nombre))) {
        texto = "Ingrese su nombre correctamente";
    }
    else{
        texto = "A ingresado su nombre de manera correcta";
    }
    if (Number.parseFloat(Number(nombre))) {
        texto = "Ingrese su nombre correctamente";
    }
    document.getElementById("nombre").innerHTML = texto;
}
