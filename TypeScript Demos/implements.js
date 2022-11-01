var B = /** @class */ (function () {
    function B() {
        // Throws error: Class 'B' incorrectly implements interface 'A'.
        // Property 'propB' is missing in type 'B' but required in type 'A'.
        this.propA = 10;
    }
    B.prototype.display = function () {
        console.log("B");
    };
    return B;
}());
var C = /** @class */ (function () {
    function C() {
    }
    //  Throws error:  Class 'C' incorrectly implements interface 'A'.
    //  Property 'display' is missing in type 'C' but required in type 'A'.
    C.prototype.display = function () {
        console.log("C");
    };
    return C;
}());
var objB = new B();
//objB.propB = 3;
objB.display();
var objC = new C();
objC.display();
