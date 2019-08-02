const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
	let errors = {};

	data.jobTitle = !isEmpty(data.jobTitle) ? data.jobTitle : '';
	data.company = !isEmpty(data.company) ? data.company : '';
	data.fromDate = !isEmpty(data.fromDate) ? data.fromDate : '';

	if (Validator.isEmpty(data.jobTitle)) {
		errors.jobTitleError = 'Job title field is required';
	}

	if (Validator.isEmpty(data.company)) {
		errors.companyError = 'Company field is required';
	}

	if (Validator.isEmpty(data.fromDate)) {
		errors.fromDateError = 'From date field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
