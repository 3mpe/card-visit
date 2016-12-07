// Modul
const _ = require('lodash');
const mongoose = require('mongoose');
var validate = require('mongoose-validator');

const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

// Mongodaki veritabanimiza baglandik
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cardVisit');


var extend = validate.extend;

/**
	validationlaron hepsi 
*/
var nameValidator = [
	validate({
		validator: 'isLength',
		arguments: [2, 80],
		message: 'İsim {ARGS[0]} ve {ARGS[1]} karakter aralıgında olmalıdır.'
	}),
	validate({
		validator: 'isAlphanumeric',
		passIfEmpty: true,
		message: 'İsim alanı sadece harflerden oluşmalıdır.'
	}),
	validate({
		validator: function (val) {
			return val.length > 1;
		},
		message: 'isim alanı boş bırakılmamalıdır.'
	})
];
var surnameValidator = [
	validate({
		validator: 'isLength',
		arguments: [2, 80],
		message: 'Soyisim {ARGS[0]} ve {ARGS[1]} karakter aralıgında olmalıdır.'
	}),
	validate({
		validator: 'isAlphanumeric',
		passIfEmpty: true,
		message: 'Soyisim alanı sadece harflerden oluşmalıdır.'
	}),
	validate({
		validator: function (val) {
			return val.length > 1;
		},
		message: 'Soyisim alanı boş bırakılmamalıdır.'
	})
];
var phoneValidator = [
	validate({
		validator: 'matches',
		arguments: /^\(?[\d]{3}\)?[\s\-]?[\d]{3}[\s\-]?[\d]{4}$/ig,
		message: 'Telefon numarası 10 hane ve sadece rakamlardan oluşmalıdır'

	}),
	validate({
		validator: function (val) {
			return val.length > 1;
		},
		message: 'Telefon numarası alanı boş bırakılmamalıdır.'
	})
];
var companyValidator = [
	validate({
		validator: 'isLength',
		arguments: [2, 80],
		message: 'Şirket İsimi {ARGS[0]} ve {ARGS[1]} karakter aralıgında olmalıdır.'
	}),
	validate({
		validator: function (val) {
			return val.length > 1;
		},
		message: 'Şirket isimi alanı boş bırakılmamalıdır.'
	})
];
var positionValidator = [
	validate({
		validator: 'isLength',
		arguments: [2, 80],
		message: 'Şirket İsimi {ARGS[0]} ve {ARGS[1]} karakter aralıgında olmalıdır.'
	}),
	validate({
		validator: function (val) {
			return val.length > 1;
		},
		message: 'Şirket isimi alanı boş bırakılmamalıdır.'
	})
];

/**
 * Tüm modellerde kullancağımız ortak özellikler/alanlar
 */
const modelInfo = {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
};


const CardsSchema = {
	name: {
		type: String,
		required: true,
		// validate: nameValidator
	},
	surname: {
		type: String,
		required: true,
		validate: surnameValidator
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: String,
		required: true,
		unique: true,
		validate: phoneValidator
	},
	company: {
		type: String,
		required: true,
		validate: companyValidator
	},
	company_position: {
		type: String,
		required: true,
		validate: positionValidator
	},
	status: {
		type: String
	}
};

const UserSchema = {
	email: {
		type: String,
		required: true,
		unique: true
	},
	pass: {
		type: String,
		required: true,
	},	
	status: {
		type: String
	}
};





module.exports = {
	Cards: mongoose.model('Cards', new Schema(CardsSchema, modelInfo)),
	User: mongoose.model('User', new Schema(UserSchema, modelInfo))
};

