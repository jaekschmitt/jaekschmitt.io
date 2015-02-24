var express = require('express'),
		path = require('path');

var app = express();
var port = process.env.PORT || 8080;

global.appRoot = path.dirname(require.main.filename);

require('./config/express')(app);
require('./config/routes')(app);

app.listen(port);

module.exports = app;