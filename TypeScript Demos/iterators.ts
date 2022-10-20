var listItems = [5, 6, 7];
// show indexes.
for (var x1 in listItems) {
    console.log(x1);		// output: "0", "1", "2"
}
// show values.
for (var x2 in listItems) {
    console.log(listItems[x2]);		// output: 5, 6, 7
}
