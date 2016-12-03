'use strict'
process.on('uncaughtException', function (err) {
	console.error(err.stack || err)
});

const app = require('./server/app');

const http = require('http');

const server = http.createServer(app);

const port = 3000;

server.listen(port, function () {
	console.log(`localhost:${port} portunda uygulama hazir.`)
});

