"use strict";

/**
 * expects:
 * config (object) (required)
 * config.grid (required)
 * config.check (function) (required)
 * config.set (function) (required)
 * config.store_steps (bool) (optional)
 * config.count_steps (bool) (optional)
 *
 * returns:
 * (object)
 * (object.count (number))
 * (object.store (array))
 */

module.exports = function (config) {
	var count = 0,
		store = [];
	return function fl(x, y) {
		if (config.check(config.grid, x, y)) {
			config.set(config.grid, x, y);
			if (config.store_steps) {
				store.push({x: x, y: y});
			}
			if (config.count_steps) {
				count += 1;
			}
			fl(x + 1, y);
			fl(x - 1, y);
			fl(x, y + 1);
			fl(x, y - 1);
		}
		return {
			count: count,
			store: store
		}
	};
};
