const express = require('express');
const auth = require('../middleware/auth.js');
const app = express.Router();
const Profile = require('../models/profile.js');
app.get('/', auth, async (req, res) => {
	const id = req.params.id;
	console.log(id);
	try {
		const profile = await Profile.findOne({ userId: req.body.user });
		res.send(profile);
	} catch (error) {}
});

app.get('/profile/:id', async (req, res) => {
	try {
		const id = req.params.id;
		console.log(id);
		const profile = await Profile.findById(id);
		res.send(profile);
	} catch (error) {}
});

//experience deleted

app.delete('/exp/:id', auth, async (req, res) => {
	const id = req.params.id;
	try {
		const foundProfile = await Profile.findOne({ user: req.user.id });
		const expIds = foundProfile.experience.map((exp) => exp._id.toString());
		// if i dont add .toString() it returns this weird mongoose coreArray and the ids are somehow objects and it still deletes anyway even if you put /experience/5
		const removeIndex = expIds.indexOf(id);
		if (removeIndex === -1) {
			return res.status(500).json({ msg: 'Server error' });
		} else {
			// theses console logs helped me figure it out

			foundProfile.experience.splice(removeIndex, 1);
			await foundProfile.save();
			return res.status(200).json(foundProfile);
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: 'Server error' });
	}
});

app.get('/dev', async (req, res) => {
	try {
		const profiles = await Profile.find({}, [ 'skill', 'name', 'position' ]);
		console.log(profiles);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

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
		const isSure = await Profile.findOne({ userId: req.body.user });
		if (isSure) {
			await Profile.updateOne({
				userId: req.body.user,
				name: name,
				company: company,
				position: position,
				companyWebsite: companyWebsite,
				location: location,
				skill: skillArray,
				bio: bio,
			});

			const pro = await Profile.find({});
			res.send(...pro);
		} else {
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
			res.json(profile);
		}
	} catch (err) {
		console.log(err);
	}
});

app.post('/addedu', auth, async (req, res) => {
	const { school, degree, fieldofstudy, from, to, current, description } = req.body;

	const newEdu = {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description,
	};

	try {
		const profile = await Profile.findOne({ userId: req.body.user });

		profile.education.unshift(newEdu);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

app.post('/addexp', auth, async (req, res) => {
	const { company, jobTitle, location, fromDate, toDate, isCurrent, description } = req.body;
	const newExp = {
		company,
		jobTitle,
		location,
		fromDate,
		toDate,
		isCurrent,
		description,
	};

	try {
		const profile = await Profile.findOne({ userId: req.body.user });

		profile.experience.unshift(newExp);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = app;
app.post('/post', (req, res) => {
	res.send({ ...req.body });
});
