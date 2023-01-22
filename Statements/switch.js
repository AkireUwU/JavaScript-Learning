//js switch 
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
}
console.log(day);

let key = 2;
let text;
switch (key) {
    case 1:
        text = "Caso 1";
        break;
    case 2:
        text = "Caso 2";
        break;
    default:
        text = "Nothing";
        break;
}
console.log(text);


