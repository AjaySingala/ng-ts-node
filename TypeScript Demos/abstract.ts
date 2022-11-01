abstract class Person {
    name: string;
    abstract city: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name, this.city);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    city: string;

    constructor(name: string, code: number, city: string) { 
        super(name); // must call super()
        this.empCode = code;
        this.city = city;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1, "Reston");
    }
}

let emp: Person = new Employee("James", 100, "Dallas");
emp.display(); //James

let emp2: Person = emp.find('Steve');
emp2.display();
