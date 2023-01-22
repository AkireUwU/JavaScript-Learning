//const tiene block scope
const cars = ["Saab","Toyota","Audi","Ferrari"];
{
    const cars = ["Ferrari","Audi","Subaru","Saab"];
    console.log(cars[0]);
    {
        const names = ["Erika","Valeria","Gustavo"];
        console.log(names[0]);
    }
}
console.log(cars[0]);

//a comparacion de var
var gatos = ["Pablo","Maura","JuanitoBackyardigan"];
console.log(gatos[0]);
{
    var gatos = ["Naranja","Cafe","Negro"];
    console.log(gatos[0]);
}
console.log(gatos[0]);