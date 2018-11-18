function areIntersected (rect1, rect2) {
	// rect1;
	// if (rect2.left <= rect1.left && rect2.left >= rect1.left) {

	// }
	return rect2.left >= 0 && rect2.left >= rect1.left;
}

export { areIntersected };

console.log(
	areIntersected({
		left: 0,
		top: 0,
		width: 20,
		height: 20
	},
	{
		left: 10,
		top: 10,
		width: 25,
		height: 25
	})
);
let numbers = [546, 67];
numbers[100] = 6876;
numbers.length