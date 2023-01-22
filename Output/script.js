//visualizar data con js por diferentes metodos
document.getElementById("demo").innerHTML = 7 + 7;
document.write(5+6);

function funcion() {
    document.write("se elimina todo");
    //document.write lo elimina.
    //this method should only be used 4 testing.
}

function alerta() {
    alert("Una alerta usando un metodo");
    //es opcional usar windows.alert o simplemente alert
}

function imprimir() {
    window.print();
}