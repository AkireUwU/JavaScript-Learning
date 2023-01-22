function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = 
"The temperature is " + toCelsius(77) + " Celsius";
//de fahrenheit a celisus
