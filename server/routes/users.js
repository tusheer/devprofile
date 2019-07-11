const express = require('express');
const app = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

app.post('/signin', async (req, res) => {
	try {
		const isReg = await User.findOne({ email: req.body.email });
		if (isReg) {
			res.send({ message: 'user was signup' });
		} else {
			const password = await bcrypt.hash(req.body.password, 12);
			const user = await new User({
				name: req.body.name,
				email: req.body.email,
				password: password,
			});
			await user.save();
			res.send(user);
		}
	} catch (err) {
		res.send(err);
	}
});

module.exports = app;
