var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.prototype.calculateCircumference = function (radius) {
        return 2 * Circle.pi * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
Circle.pi; // returns 3.14
console.log("Area of the circle is: " + Circle.calculateArea(5)); // returns 78.5
var circleObj = new Circle();
console.log("Circumference of the circle is: ", circleObj.calculateCircumference(5)); // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this
