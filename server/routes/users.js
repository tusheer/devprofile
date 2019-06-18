const express = require('express');
const app = express.Router();
const User = require('../models/users.js');

app.post('/signin', async (req, res) => {
	try {
		console.log(req.body.name);
		console.log(req.body.email);
		console.log(req.body.password);
		const user = await new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		await user.save();
		res.send(user);
	} catch (err) {
		res.send(err);
	}
});

module.exports = app;
