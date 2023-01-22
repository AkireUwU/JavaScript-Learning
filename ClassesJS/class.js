//usa el keyword class para crear una clase
//siempre añade un metodo llamado constructor();

class Chanchito { //una clase js no es un objeto, si no un template para objetos en js 
    /*exact name =>*/constructor(nombre, edad) { //propiedades iniciales
        //la propiedad constructor automaticamente es ejecutada cuando un objeto es creado
        //es usado para inicializar object properties
        this.nombre = nombre;
        this.edad = edad;
    }
}

//las clases las podemos usar para crear objetos
const num1 = new Chanchito("Pablito", 10);
console.log(num1.nombre + " " + num1.edad);

//class methods
class Datos {
    constructor(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    nombreCompleto(x)/*tambien podemos agregar parametros aqui*/ {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2 + 
        " | Con edad de: " + x;
    }
}
let nac = 20;
let misDatos = new Datos("Erika", "Gomez", "Allende");
console.log(misDatos.nombreCompleto(nac));