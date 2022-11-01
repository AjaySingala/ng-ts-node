class Circle {
    static pi: number = 3.14;
    
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number { 
        return 2 * Circle.pi * radius;
    }
}
Circle.pi; // returns 3.14
console.log("Area of the circle is: " + Circle.calculateArea(5)); // returns 78.5

let circleObj = new Circle();
console.log("Circumference of the circle is: ", circleObj.calculateCircumference(5)); // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this
