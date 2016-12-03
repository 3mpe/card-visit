const path = require('path');

module.exports = {
	home: function(request, response) {
		return response.sendFile('index.html');
	}
};