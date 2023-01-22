//sorts an array alphabetically
const chanchitos = ["Tyron","Pablo","Juan","PolaBackyardigan","Ahehe"];
chanchitos.sort();
chanchitos.reverse();
console.log(chanchitos);

//numeric sort trick: compare function
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {return a - b;})
console.log(points);

const valores = [10, 30, 20, 50, 40];
valores.sort(function(a, b) {return a - b;})
console.log(valores);

//sort the array in random order
valores.sort(function(){return 0.5 - Math.random()});
console.log(valores);

//find the highest number in an array
const point = [40,100, 1, 5, 25, 10,0.5];

//encontrar el maximo valor dentro de un array
function myArrayMax() {
    return Math.max.apply(null, point);
}
console.log(myArrayMax());

//encontrar el minimo valor dentro de un array
function myArrayMin(){
    return Math.min.apply(null, point);
}
console.log(myArrayMin());

//sort chanchito objects by age
const chanchito = [
    {Name:"JuanaBackyardigan",year:2016},
    {Name:"Pablito",year:2013},
    {Name:"Cerdito",year:2018}
];

chanchito.sort(function(a, b){return a.year - b.year});
displayChanchitos();
function displayChanchitos(){
    console.log(chanchito[0].Name + " " + chanchito[0].year);
    console.log(chanchito[1].Name + " " + chanchito[1].year);
    console.log(chanchito[2].Name + " " + chanchito[2].year);
}
