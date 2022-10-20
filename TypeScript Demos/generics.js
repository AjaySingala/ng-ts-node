function value(myval) {
    return myval;
}
function value2(myval2) {
    return myval2;
}
var val0 = value(6); // works
var val1 = value("test"); // compile error
var val2 = value2("test"); // works
var val3 = value2(24); // works
function type(parameter) {
    return parameter;
}
function identity(arg) {
    //console.log(arg.length);    // Error. T doesn't have length.
    return arg;
}
var output = identity("Ajay");
console.log(output);
var output2 = identity("Ajay Singala");
console.log(output2);
// Array Generic
function identityLog(arg) {
    console.log(arg.length); // Array has length. No error.
    return arg;
}
var id = identityLog(["ajay", "neo", "trinity"]);
console.log(id[0]);
console.log(id[1]);
console.log(id[2]);
