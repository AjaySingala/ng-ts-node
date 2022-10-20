class Person {
    name: string;
    
    constructor(name:string) {
        this.name = name;
    }
    
    dance() {
        console.log(this.name + " is dancing.");
    }
}

var person = new Person("Bryan");
person.dance();

class AwesomePerson extends Person {
    // override func.
    dance() {
        console.log("Sooo awesome!");
        // super.dance();	// invoke func in base class.
    }
}

var robb = new AwesomePerson("Robb");
robb.dance();
