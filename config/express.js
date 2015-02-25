var express = require('express'),
morgan = require('morgan'),
winston = require('winston'),
path = require('path');

var env = process.env.NODE_ENV || 'development';

module.exports = function(app) {

	var log;
	if(env !== 'development') {
		log = {
			stream: {
				write: function(message, encoding) {
					winston.info(message);
				}
			}
		}
	} else {
		log = 'dev';
	}

	if(env !== 'test') app.use(morgan(log));


	var clientRoot = path.join(global.appRoot, 'client');
	
	app.set('views', clientRoot);
	app.set('view engine', 'vash');

	app.use(express.static(path.join(clientRoot, 'app')));
	app.use(express.static(path.join(clientRoot, 'public')));
};