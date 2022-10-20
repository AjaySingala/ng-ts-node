"use strict";
// // for #1 and #2.
// import { MyClass } from "./MyClass";	// relative path
exports.__esModule = true;
// let object = new MyClass();
// console.log(object.myFunction("some value"));
// for #3: exported as a different name.
var MyClass_1 = require("./MyClass"); // relative path
var object = new MyClass_1.MainClass();
console.log(object.myFunction("another value"));
