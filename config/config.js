var path = require('path'),
	extend = require('util')._extend;

var dev = require('./env/development'),
	test = require('./env/test'),
	prod = require('./env/production');

module.exports = {
	development: extend(dev, defaults),
	test: extend(test, defaults),
	production: extend(prod, defaults)
}[process.env.NODE_ENV || 'development'];