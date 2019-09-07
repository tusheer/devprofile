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
	avatar: {
		type: Buffer,
		default: 'https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg',
	},
});
const User = mongoose.model('users', usersSchema);
module.exports = User;
