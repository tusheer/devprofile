const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const user = new userSchema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});
const User = mongoose.model('Users', user);
module.exports = User;
