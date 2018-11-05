let human = {
	'name': 'Jack',
	'age': 25,
	'hands': [
		{side: 'left'},
		{side: 'right'}
	],
	'2345': 'dfsdf',
	run (speed) {

	},
	sit () {},
	head: true
};

let property = 'hands';

let object = new Object();
human[property] = 'John';

let array = [0, 0, 5];
console.log(human.hands.length);

console.log(human.run.length);

for (let element of array) {
	element;
}

array.forEach(function(elem) {
	console.log(elem);
});

function logItem (elem) {
	console.log(elem);
}

function double (elem) {
	return elem * 2;
}

function isEven (elem) {
	return (elem % 2) === 0
}

function equalsZero(elem){
	return elem === 0;
}

let doubleArray = array.map(double);

let evenArray = array.filter(isEven);

let doubleEvenArray = array
	.filter(isEven)
	.map(double);

	let hasElem0 = array.some(equalsZero);
	let everyEqualsZero = array.every(equalsZero);
let deepArray = [
	[46, 67, 788, 78], 
	[56, 5667, 7878, 88], 
	[545, 242, 2, 5],
	[545, 242, 2, 5, 8],
	[545, 242, 2, 5, 2]
];
	let flatArray = deepArray.reduceRight(function(accumulator, elem){
		return accumulator.concat(elem);
	}, ['kjkljljk']);

	console.log([5657, 6778].concat([656, 78, 798]));

	hasElem0;
	everyEqualsZero;

	flatArray

doubleEvenArray


console.log(array.sort(function(){

}));