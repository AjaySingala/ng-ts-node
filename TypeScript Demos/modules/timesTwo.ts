// // Step 1: no module.
// function timesTwo(n:number) {
//     return n * 2;
// }

// Step 2: change to module.
module Utility {
    export class Useful {
        timesTwo(n:number) {
            return n * 2;
        }
    }
}
