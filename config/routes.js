module.exports = function(app) {

	app.get('*', function(req, res, next) {
		res.render('views/coming-soon');
		console.log('catch');
	});

	app.get('/', function(req, res, next) {
		res.render('index', {});		
	});	
};