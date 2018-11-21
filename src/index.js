function areIntersected (rect1, rect2) {
	if (rect2.height && rect2.width) {
		return ((rect2.left < (rect1.left + rect1.width) && rect2.left < (rect1.left + rect2.width))
      && (rect2.top > (rect1.top - rect2.height)) && rect2.top < (rect1.top + rect1.height + rect2.height)
      || (rect2.top < (rect1.top + rect2.height)) && rect2.top < (rect1.top + rect1.height + rect2.height))
      && ((rect2.left < (rect1.left + rect1.width) && rect2.left > (rect1.left - rect2.width))
      && (rect2.top < (rect1.top + rect2.height)) && rect2.top < (rect1.top + rect1.height + rect2.height))
      && ((rect2.left < (rect1.left + rect1.width) && rect2.left > (rect1.left - rect2.width))
      && (rect2.top > (rect1.top - rect2.height)) && rect2.top < (rect1.top + rect1.height + rect2.height));
	}
}

function filterVisible (rect, arrayRects = []) {
	return arrayRects.filter(function (objectRect) {
		return areIntersected(rect, objectRect);
	});
}

export { areIntersected, filterVisible };