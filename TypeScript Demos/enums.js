var Values;
(function (Values) {
    Values[Values["First"] = 1] = "First";
    Values[Values["Second"] = 2] = "Second";
    Values[Values["Third"] = 3] = "Third";
    Values[Values["Fourth"] = 4] = "Fourth";
})(Values || (Values = {}));
var first = Values.First; // 1
var nameOfFirst = Values[Values.First]; // "First"
console.log(first);
console.log(nameOfFirst);
