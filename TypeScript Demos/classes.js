// // Step 1:
// class Stark {
//     name: string;
// }
// var ned = new Stark();
// ned.saying = "Winter is coming";
// // Step 2: no optional vars.
// class Stark {
//     name: string;
//     saying: string;
// }
// var ned = new Stark();
// ned.saying = "Winter is coming";
// // Step 3: ctors.
// class Stark {
//     name: string = "Brandon";	// default value.
//     saying: string;
//     static castle: string = "Winterfell!";
//     constructor() {
//         this.saying = "Winterfell!";
//     }
// }
// console.log(Stark.castle);
// Step 4: add methods.
var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Brandon"; // default value.
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    Stark.castle = "Winterfell!";
    return Stark;
}());
//console.log(Stark.castle);
var ned = new Stark();
ned.hello("Robert");
