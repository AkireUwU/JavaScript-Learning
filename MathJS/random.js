//regresar un valor sin decimal
console.log(Math.random());
//regresa un integer entre 0 y 9;
let valor = Math.random() * 10;
console.log(valor);
console.log(Math.floor(valor));
console.log(Math.trunc(valor));
console.log(Math.round(valor));

{
    //integer entre 0 y 10;
    let valor = Math.random() * 11;
    console.log(Math.floor(valor));
    {
        //regresa un random integer de 1 a 10;
        let valor = (Math.random() * 10) + 1;
        console.log(Math.trunc(valor));
    }
}





