var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name, this.city);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code, city) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        _this.city = city;
        return _this;
    }
    Employee.prototype.find = function (name) {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1, "Reston");
    };
    return Employee;
}(Person));
var emp = new Employee("James", 100, "Dallas");
emp.display(); //James
var emp2 = emp.find('Steve');
emp2.display();
