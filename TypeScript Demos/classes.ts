// Step 1:
class Stark {
    name: string;
}

var ned = new Stark();
ned.saying = "Winter is coming";

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

// // Step 4: add methods.
// class Stark {
//     name: string = "Brandon";	// default value.
//     saying: string;
//     static castle: string = "Winterfell!";

//     constructor() {
//         this.saying = "Winterfell!";
//     }
    
//     hello(person: string) {
//         console.log("Hello " + person);
//     }
// }
// //console.log(Stark.castle);
// var ned = new Stark();
// ned.hello("Robert");
