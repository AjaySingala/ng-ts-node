// Step 1:
function printName(stark) {
    console.log(stark.name);
}
        
printName({name: "Ajay"});
printName({label: "Joe"});

// // Step 2:
// interface iStark {
//     name: string;
// }

// function printName(stark: Stark) {
//     console.log(stark.name);
// }
        
// printName({name: "Ajay"});
// printName({label: "Joe"});
// //printName({name: "Joe"});

// // Step 3:
// interface iStark {
//     name: string;
//     // age: number;
//     age?: number;
// }

// function printName(stark: Stark) {
//     console.log(stark.name, stark.age);
// }
        
// printName({name: "Ajay"});
// printName({name: "Joe"});
// printName({name: "Mary", age: 23});
