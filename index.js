"use strict";

module.exports = function fl (x, y, check, set) {
	if (check(x, y)) {
		fl(x + 1, y);
		fl(x - 1, y);
		fl(x, y + 1);
		fl(x, y - 1);
	}
};