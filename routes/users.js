const express = require('express');
const app = express.Router();
const auth = require('../middleware/auth');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

const signUp = require('../validation/signup.js');

const sharp = require('sharp');
app.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.body.user).select('-password');
		res.send(user);
	} catch (error) {
		res.send('dsfjdfkdf');
	}
});

app.get('/image/:id', async (req, res) => {
	const id = req.params.id;

	const user = await User.findById(id);
	res.set('Content-Type', 'image/jpg');
	res.send(user.avatar);
});

app.get('/image', auth, async (req, res) => {
	const user = await User.findById(req.body.user);
	res.set('Content-Type', 'image/jpg');
	res.send(user.avatar);
});

app.post('/image/upload', auth, async (req, res) => {
	const file = req.file;
	if (!file) {
		res.send('File select');
	}

	const resize = await sharp(file.buffer).resize({ width: 320, height: 400 }).png().toBuffer();

	try {
		const user = await User.findById(req.body.user);
		user.avatar = resize;
		await user.save();

		res.send(user.avatar);
	} catch (err) {
		res.send(err);
	}
});

app.post('/signup', async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	try {
		const { errors, isValid } = signUp(req.body);
		if (!isValid) {
			res.status(400).send(errors);
		} else {
			const user = await User.findOne({ email: email });

			if (!user) {
				const hashpassword = await bcrypt.hash(password, 12);
				const user = new User({
					name: name,
					email: email,
					password: hashpassword,
				});
				await user.save();
				const token = await jwt.sign(
					{
						email: user.email,
						userId: user._id.toString(),
					},
					'developedbytusher',
					{ expiresIn: '4h' },
				);
				res.status(200).json({
					token: token,
				});
			} else {
				res.status(400).json({ err: 'Acoount already created by this email' });
			}
		}
	} catch (err) {
		console.log(err);
	}
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
				{ expiresIn: '30d' },
			);
			res.status(201).send({
				token: token,
				id: isReg._id,
			});
		}
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = app;
