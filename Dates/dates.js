const a = new Date();
console.log(a);

//9 formas para crear un new date object:

//new Date(date string) creates a date object from a date string:
const b = new Date("October 13, 2014 11:13:00");
console.log(b);
const c = new Date("2022-03-25");
console.log(c);

//crea un date object con una fecha y hora especifica
// year - month - day - hour - minute - second - millisecond
/*

js counts months from 0 to 11;
enero = 0 
december = 11
*/

const d = new Date(2022, 2, 23, 9, 12, 34, 0);
console.log(d);

console.log(d.toString());

//this method converts a date to a more readable format
console.log(d.toDateString());

//this method converts a date to a string using the UTC standard
console.log(d.toUTCString());

//converts a date to a string using the ISO standard
console.log(d.toISOString());


