function value(myval: number): number {
    return myval;
}

function value2(myval2: any): any {
    return myval2;
}

let val0 = value(6);		// works
let val1 = value("test");	// compile error
let val2 = value2("test");	// works
let val3 = value2(24);		// works

function type<T>(parameter: T): T {
    return parameter;
}

function identity<T>(arg: T): T {
    //console.log(arg.length);    // Error. T doesn't have length.
    return arg;
}

var output = identity<string>("Ajay");
console.log(output);

var output2 = identity("Ajay Singala");
console.log(output2);

// Array Generic
function identityLog<T>(arg: T[]): T[] {
    console.log(arg.length);    // Array has length. No error.
    return arg;
}

var id = identityLog(["ajay", "neo", "trinity"]);
console.log(id[0]);
console.log(id[1]);
console.log(id[2]);
