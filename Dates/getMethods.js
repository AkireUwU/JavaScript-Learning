//return year
const d = new Date("December 27 2022");
console.log(d.getFullYear());

console.log(d.getDay());
const days = ["Sunday", "Monday", "Tuesday"];
let day = days[d.getDay()];
console.log(day);

{
    //return month
    const d = new Date("March 23 2002");
    console.log(d.getMonth() + 1);
    {
        const months = ["January", "February", "March"];
        const d = new Date("January 12 2022");
        let month = months[d.getMonth()];
        console.log(month);
        //return day
        console.log(d.getDate());
        //return hour
        console.log(d.getHours());
    }
}

//comparar dates
const fecha = new Date("April 23 2022");
let someday = "March 23 2022";
msec = Date.parse(someday);
console.log(msec);
const f = new Date(msec);
console.log(f);

if (f < fecha) {
    console.log("Tu cumple ya paso");
}
else{
    console.log("aun no cumples jjj");
}