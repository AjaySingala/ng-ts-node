var isWinter = false;
// isWinter = 123;
var count = 5;
var fname = "Neo";
// Arrays.
var names = ["Ajay", "Neo"];
// ERROR:
// var names: string[] = ["Ajay", "Neo", 5];
// Change to "any" type.
// var names: any[] = ["Ajay", "Neo", 5];
// Enum.
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Heather"] = 2] = "Heather";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
// void.
// function getName() : string {
//     return "Ajay";	// return 1 will throw an error.
// }
// use "void" when not returning anything:
function getName() {
    console.log("some message");
}
