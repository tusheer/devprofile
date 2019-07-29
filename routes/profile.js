const express = require('express');
const auth = require('../middleware/auth.js');
const app = express.Router();
const Profile = require('../models/profile.js');

app.post('/', auth, async (req, res) => {
	const name = req.body.name;

	const position = req.body.position;
	const company = req.body.company;
	const companyWebsite = req.body.companyWebsite;
	const location = req.body.location;
	const skill = req.body.skill;
	const skillArray = skill.split(',').map((skill) => skill.trim());

	const bio = req.body.bio;
	try {
		const profile = new Profile({
			userId: req.body.user,
			name: name,
			company: company,
			position: position,
			companyWebsite: companyWebsite,
			location: location,
			skill: skillArray,
			bio: bio,
		});
		await profile.save();
		res.send(profile);
	} catch (err) {
		console.log(err);
	}
});

module.exports = app;
app.post('/post', (req, res) => {
	res.send({ ...req.body });
});
