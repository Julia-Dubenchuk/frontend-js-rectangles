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

let array = [45, 67, 78, 7,89];
console.log(human.hands.length);

console.log(human.run.length);