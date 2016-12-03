'use strict'

// Dependencies
const express = require('express');
const middleware = require('./lib/middleware');

// Controllers
//const cardController = require('./controller/cardController');

// Create new express application
const app = express();

// Middleware
middleware.load(app);

// Route - sayfalar
const mainController = require('./controller/main');
app.get('/', mainController.home);


/**
 * Tüm CRUD işlemleri
 */
const crudController = require('./controller/crud');

app.get('/card', crudController.index);
app.post('/card', crudController.store);
app.get('/card/:card_id', crudController.show);
app.put('/card/:card_id', crudController.update);
app.delete('/card/:card_id', crudController.delete);

module.exports = app;

