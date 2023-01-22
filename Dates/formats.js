//iso format
const a = new Date("2022-03-23");
console.log(a);
{
    //iso dates pueden ser escritos sin especificar el dia (YYYY-MM)
    const a = new Date("2015-03");
    console.log(a);
    {
        //iso dates puedden ser escritos sin especificar mes y dia (YYYY)
        const a = new Date("2015");
        console.log(a);
    }
}

//iso dates pueden ser escritos agegando hora, minutos y segundos (YYYY-MM-DDTHH:MM:SSZ)
const b = new Date("2022-12-27T08:55:00Z");
console.log(b);

//javascript short dates (MM/DD/YYYY)
const d = new Date("12/27/2022");
console.log(d);

//js long dates (MMM DD YYYY)
const e = new Date("Apr 23 2022");
console.log(e);
{
    const e = new Date("25 Mar 2020");
    console.log(e);
    {
        const e = new Date("January 6 2014");
        console.log(e);
    }
}

//parsing dates: regresa el numero de miliseconds entre la fecha (string) y january 1,1970
let msec = Date.parse("January 6 2014");
console.log(msec);
//podemos usarlo para cambiarlo a un date object
const f = new Date(msec);
console.log(f);
{
    //tenemos un string que lo queremos cambiar a un date object
    let msec = "January 6 2014";
    msec = Date.parse("January 6 2014");
    console.log(msec);
    const f = new Date(msec);
    console.log(f);
}