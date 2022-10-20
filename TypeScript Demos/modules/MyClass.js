"use strict";
// // #1
// export class MyClass {
//     myFunction(x: string) {
//         return x;
//     }
// }
exports.__esModule = true;
exports.MainClass = void 0;
// // OR #2: 
// class MyClass {
//     myFunction(x: string) {
//         return x;
//     }
// }
// export{MyClass};
// #3: export as a different name.
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myFunction = function (x) {
        return x;
    };
    return MyClass;
}());
exports.MainClass = MyClass;
