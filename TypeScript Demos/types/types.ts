var isWinter : Boolean = false;
// isWinter = 123;

var count: number = 5;
var fname: string = "Neo";

// Arrays.
var names : string[] = ["Ajay", "Neo"];
// ERROR:
// var names: string[] = ["Ajay", "Neo", 5];
// Change to "any" type.
// var names: any[] = ["Ajay", "Neo", 5];

// Enum.
enum Starks { Jon, Bran, Heather, Catlyn };
var cat : Starks = Starks.Catlyn;

// void.
function getName() : string {
    return "Ajay";	// return 1 will throw an error.
}

// // use "void" when not returning anything:
// function getName() : void {
//     console.log("some message");
// }
