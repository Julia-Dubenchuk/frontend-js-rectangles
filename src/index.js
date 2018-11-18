function areIntersected (rect1, rect2) {
	if (rect2.left > 0) {
		return rect2.width > (rect2.left - rect1.left);
	} if (rect2.left < 0) {
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

export { areIntersected, filterVisible };