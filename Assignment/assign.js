function additionAssignment(x,y) {
    console.log(x+=y);
}
additionAssignment(7,13);

function subtractionAssignment(x,y) {
    console.log(x-=y);
}
subtractionAssignment(15,10);

function multiplicationAssignment(x,y) {
    console.log(x*=y);
}
multiplicationAssignment(5,5);

function exponentiationAssignment(x,y) {
    console.log(x**=y);
}
exponentiationAssignment(7,6);

function divisionAssignment(x,y) {
    console.log(x/=y);
}
divisionAssignment(20,2);

function remainderAssignment(x) {
    console.log(x%=5);
}
remainderAssignment(6);

function leftShiftAssignOperator(x,y) {
    console.log(x<<=y);
}
leftShiftAssignOperator(1,2);

let x = myFunction(4,3);
function myFunction(a,b) {
    console.log(a*b);
    console.log(a-b);
}