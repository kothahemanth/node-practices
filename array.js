// Requiring the fs module
const fs = require("fs")

// Creating a function which takes a file as input
const readFileLines = filename =>
fs
	.readFileSync(filename)
	.toString('UTF8')
	.split('\n');


// Driver code
let arr = readFileLines('gfg.txt');

// Print the array
console.log(arr);
