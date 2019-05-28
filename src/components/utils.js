String.prototype.with = function (columns) {
	return this.replace('%columns%', columns.join(' '))
};