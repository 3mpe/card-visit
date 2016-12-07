// Modules
const bodyParser = require('body-parser');

// Init
const middleware = {};

middleware.load = function (app) {

	// Post yapılan formlardan gelen değerleri kullanabilmemiz için
	app.use(function (request, response, next) {
		//response.setHeader("Access-Control-Allow-Origin", "*");
		//response.setHeader("Access-Control-Allow-Credentials", "true");
		//response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		//response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

		response.header("Access-Control-Allow-Origin", "http://localhost:3000");
		response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

		next();
	});

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

};

module.exports = middleware;

