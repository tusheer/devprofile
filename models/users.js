const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const usersSchema = new userSchema({
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
	avatar:{
		type:String,
	}
});
const User = mongoose.model('users', usersSchema);
module.exports = User;
