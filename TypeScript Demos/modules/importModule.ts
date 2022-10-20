// for #1 and #2.
import { MyClass } from "./MyClass";	// relative path

let object = new MyClass();
console.log(object.myFunction("some value"));

// // for #3: exported as a different name.
// import { MainClass } from "./MyClass";	// relative path

// let object = new MainClass();
// console.log(object.myFunction("another value"));
