class Person {
    public firstName: string;
    public lastName: string;
    private _fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

var obj = new Person('John', "Smith");
console.log(obj.fullName());
