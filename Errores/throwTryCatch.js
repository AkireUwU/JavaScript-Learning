class ErrorChanchito extends Error {
    message = 'Te has Equivocado'
}

let a = [];

a = null;

try {
    throw new ErrorChanchito();
    let b = a[0];
} catch(err) {
    if (err instanceof TypeError) {
        console.error("CUSTOM ERROR: ", err);
    }
    else {
        console.log("Adios");
        throw err;
    }
}
console.log("Hola");


