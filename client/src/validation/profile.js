const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.position = !isEmpty(data.position) ? data.position : '';
	data.skill = !isEmpty(data.skill) ? data.skill : '';

	if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
		errors.name = 'Handle needs to between 2 and 40 characters';
	}

	if (Validator.isEmpty(data.name)) {
		errors.nameError = 'Profile handle is required';
	}

	if (Validator.isEmpty(data.position)) {
		errors.statusError = 'Status field is required';
	}

	if (Validator.isEmpty(data.skill)) {
		errors.skillError = 'Skills field is required';
	}

	if (!isEmpty(data.website)) {
		if (!Validator.isURL(data.website)) {
			errors.website = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.youtube)) {
		if (!Validator.isURL(data.youtube)) {
			errors.youtube = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.twitter)) {
		if (!Validator.isURL(data.twitter)) {
			errors.twitter = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.facebook)) {
		if (!Validator.isURL(data.facebook)) {
			errors.facebook = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.linkedin)) {
		if (!Validator.isURL(data.linkedin)) {
			errors.linkedin = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.instagram)) {
		if (!Validator.isURL(data.instagram)) {
			errors.instagram = 'Not a valid URL';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
