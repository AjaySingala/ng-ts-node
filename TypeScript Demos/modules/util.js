// // Step 1: no module.
// function timesTwo(n:number) {
//     return n * 2;
// }
// Step 2: change to module.
var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
// // Step 1: error. not found.
// console.log(timesTwo(9));
// Step 2: use module.
/// <reference path="timesTwo.ts" />
var use = new Utility.Useful();
console.log(use.timesTwo(9));
