const person = {
    firstName:"Erika",
    lastName:"Gomez",
    age:20,
    eyeColor:"Brown"
};

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old. ";

const persona = {
    firstName:"Erika",
    lastName:"Gomez",
    id:5566,
    //una funcion stored as a property
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("texto").innerHTML = persona.fullName();

//events

function displayDate() {
    document.getElementById("text").innerHTML=Date();
}

