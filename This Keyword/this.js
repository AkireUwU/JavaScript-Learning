const chanchito = {
    nombre: "Pablito",
    apellido: "Backyardigan",
    id: 4433,
    fullname: /*funcion*/() => { //expresar funciones
        return this.nombre + " " + this.apellido; 
        //en este ejemplo this refers to the chanchito object
        //porque fullname es un metodo del chanchito object
    }
}
console.log(chanchito.fullname());


//Explicit function binding
const x = {
    nombreCom: function() {
        return this.name + " " + this.surname;
    }
}
const y = {
    name: "Erika",
    surname: "Gomez",
}
let oracion = x.nombreCom.call(y)
console.log(oracion);

//function borrowing
const persona = {
    a: "Jordan",
    b: "Gomez",
    cadena: function() {
        return this.a + " " + this.b;
    }
}

const member = {
    a: "Rosa",
    b: "Allende",
}
let mensaje = persona.cadena.bind(member);
console.log(mensaje());