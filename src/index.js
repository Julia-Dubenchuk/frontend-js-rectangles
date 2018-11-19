function areIntersected (rect1, rect2) {
	if (rect2.left > 0) {
		return rect2.width > (rect2.left - rect1.left);
	} if (rect2.left <= 0) {
		return rect2.width > (rect1.left - rect2.left);
	} if (rect2.left === rect1.left) {
		return (rect2.height > rect1.height) && (rect2.width > rect1.width);
	}
}

function filterVisible (rect, arrayRects) {
	return arrayRects.filter(function (objectRect) {
		return areIntersected(rect, objectRect);
	});
}

// const mainRect = freeze({
// 	left: 0, top: 0,
// 	width: 20, height: 20
// });

console.log(areIntersected(
	{
		left: -10, top: -100,
		width: 15, height: 25
	},
	{
		left: 0, top: 0,
		width: 20, height: 20
	}
));

const intersectedRects = [
	{
		left: 0, top: 0,
		width: 20, height: 20
	}
	// {
	// 	left: 5, top: 5,
	// 	width: 10, height: 10
	// },
	// {
	// 	left: -5, top: -5,
	// 	width: 30, height: 30
	// },
	// {
	// 	left: -10, top: -10,
	// 	width: 40, height: 20
	// },
	// {
	// 	left: 10, top: -10,
	// 	width: 25, height: 25
	// },
	// {
	// 	left: 10, top: -10,
	// 	width: 20, height: 40
	// },
	// {
	// 	left: 10, top: 10,
	// 	width: 25, height: 25
	// },
	// {
	// 	left: -10, top: 10,
	// 	width: 40, height: 25
	// },
	// {
	// 	left: -10, top: 10,
	// 	width: 20, height: 25
	// },
	// {
	// 	left: -10, top: -10,
	// 	width: 25, height: 40
	// },
	// {
	// 	left: -10, top: -10,
	// 	width: 25, height: 25
	// },
	// {
	// 	left: 0, top: -10,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: 10, top: -10,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: 10, top: 0,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: 10, top: 10,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: 0, top: 10,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: -10, top: 10,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: -10, top: 0,
	// 	width: 20, height: 20
	// },
	// {
	// 	left: -10, top: -10,
	// 	width: 25, height: 25
	// }
];

export { areIntersected, filterVisible };