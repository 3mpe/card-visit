// Modules
const bodyParser = require('body-parser');

// Init
const middleware = {};

middleware.load = function (app) {

  // Post yapılan formlardan gelen değerleri kullanabilmemiz için
  app.use(function (request, response, next) {
    response.set('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};

module.exports = middleware;

