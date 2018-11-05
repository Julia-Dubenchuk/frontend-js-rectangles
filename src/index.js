let arrayA = [1, 2, 3, 4];
let arrayB = arrayA.concat();

arrayA.push(5);
console.log(arrayB);
arrayA.length = 0;
console.log(arrayA);


function sum (...args) {
	console.log(args);
}

function sum () {
	console.log(Array.from(arguments));
}

function sum () {
	console.log(Array.prototype.slice.call(arguments));
}

arguments //array like object

sum(35, 64, 57);