let array = [546, 78, 8, 9, 89, 9, 90, 90, 90];
let index;
let element;

for(index = 0; index < array.length; index +=1) {
	console.log(array[index]);
}

index = 0;
while (index < array.length) {
	console.log(array[index]);
		index +=1;
}

index = array.length;
while (index--) {
	console.log(array[index]);
}

// let element;
// index = 0;
// while (element = array[index++]) {
// 	console.log(element);
// }

index = -1;
while (++index in array) {
	console.log(array[index]);
}

let human = {age: 343, name: 'Jack'};

for ( index in human ) {
	console.log(human[index]);
}

// NEVER DO THIS !!!!!!!!!!!!!!!!!!!
for (index in array) {
	console.log(array[index]);
}

console.log('name' in array);