const express = require('express');
const app = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

const signUp = require('../validation/signup.js');

app.post('/signup', async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	try {
		const { errors, isValid } = signUp(req.body);
		if (!isValid) {
			res.status(400).send(errors);
		}
		const user = await User.findOne({ email: email });

		if (!user) {
			const hashpassword = await bcrypt.hash(password, 12);
			const user = await new User({
				name: name,
				email: email,
				password: hashpassword,
			});
			await user.save();
			console.log(user);
			res.status(200).json(user._id);
		} else {
			res.status(300).send({ errr: 'Acoount already created by this email' });
		}
	} catch (err) {}
});

app.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		const isReg = await User.findOne({ email: email });
		console.log(isReg);
		if (!isReg) {
			res.status(400).json({ err: 'not found your account' });
		}

		const isEqual = await bcrypt.compare(password, isReg.password);
		console.log(isEqual);
		if (!isEqual) {
			res.status(400).json({ err: 'Password is incorrect' });
		} else {
			const token = await jwt.sign(
				{
					email: isReg.email,
					userId: isReg._id.toString(),
				},
				'developedbytusher',
				{ expiresIn: '4h' },
			);
			res.status(201).send({
				token: token,
				id: isReg._id,
			});
		}
	} catch (error) {
		res.send(error);
	}
});

module.exports = app;
