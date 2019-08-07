const validator = require('validator');

const isEmpty = (value) =>
	value === undefined ||
	value === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0);

module.exports = function postValid(data) {
	console.log(data);
	let errors = {};

	data = !isEmpty(data) ? data : '';

	if (!validator.isLength(data, { min: 10, max: 300 })) {
		errors.text = 'Post must be between 10 and 300 characters';
	}

	if (validator.isEmpty(data)) {
		errors.text = 'Text field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
