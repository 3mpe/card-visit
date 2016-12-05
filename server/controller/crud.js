// Modelleri alıyoruz
const { Cards } = require('../lib/db');

// CRUD controller ı tanımlıyoruz
const controller = {};

/**
 * Listeleme işlemi
 */
controller.index = function (request, response) {
	var data = [];

	Cards.find(function (err, cards) {
		if (err) {
			return response.json(err.errors);
		}
		cards.map(function (item) {
			data.push({
				id: item.id,
				name: item.name,
				surname: item.surname,
				phone: item.phone,
				company: item.company,
				company_position: item.company_position,
				email: item.email,
				createdAt: item.createdAt,
				updatedAt: item.updatedAt
			});
		});


		return response.status(200).json({ data: data });
	});

};

controller.store = function (request, response, next) {
	
	let data = {
		name: request.body.name.trim(),
		surname: request.body.surname.trim(),
		email: request.body.email.trim(),
		phone: request.body.phone.trim(),
		company: request.body.company.trim(),
		company_position: request.body.company_position.trim()
	};

	Cards.find({ email: request.body.email, phone: request.body.phone }, function (err, card) {
		if (card.length > 0) {
			return response.json({ message: 'Bu kartvizit zaten kayıtlı!', data: card });
		}
		var newcard = new Cards(data);
		var error = newcard.validateSync();
		newcard.save(function (err, card) {
			if (err) {
				var errobj = {}
				if (err.errors.company_position) { errobj.company_position = err.errors.company_position.message; }
				if (err.errors.company) { errobj.company = err.errors.company.message; }
				if (err.errors.phone) { errobj.phone = err.errors.phone.message; }
				if (err.errors.email) { errobj.email = err.errors.email.message; }
				if (err.errors.surname) { errobj.surname = err.errors.surname.message; }
				if (err.errors.name) { errobj.name = err.errors.name.message; }

				return response.status(422).json(errobj);
			}
			return response.json({ message: 'Yeni kartvizit eklendi!', data: card });
		});
	});
};


controller.show = function (request, response) {
	Cards.find({ _id: request.params.card_id }, function (err, cards) {
		if (err) {
			return response.json(err.errors);
		}
		return response.json(cards);
	});
};

controller.update = function (request, response) {
	let ddata = {
		name: request.body.name,
		email: request.body.email,
		phone: request.body.phone,
		company: request.body.company,
		company_position: request.body.company_position
	};

	Cards.findByIdAndUpdate({ _id: request.params.card_id }, ddata, function (err, tank) {
		if (err) return response.status(500).json(err);
		return response.json({ message: 'kartvizit güncellendi!', data: tank });
	});
};

controller.delete = function (request, response) {
	Cards.find({ _id: request.params.card_id }).remove(function (err, removed) {
		if (err) return response.json(err);

		return response.json({ message: 'kartvizit silindi!' });
	});
};

module.exports = controller;

