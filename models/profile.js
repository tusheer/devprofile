const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const profileSchema = new userSchema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	companyWebsite: {
		type: String,
	},
	location: {
		type: String,
	},
	skill: {
		type: Array,
		required: true,
	},
	bio: {
		type: String,
	},
	experience: [
		{
			jobTitle: {
				type: String,
				required: true,
			},
			company: {
				type: String,
				required: true,
			},
			location: {
				type: String,
			},
			fromData: {
				type: Date,
				required: true,
			},
			toData: {
				type: Date,
			},
			isCurrent: {
				type: Boolean,
				default: false,
			},
			description: {
				type: String,
			},
		},
	],
	education: [
		{
			school: {
				type: String,
				required: true,
			},
			degree: {
				type: String,
				required: true,
			},
			fieldofstudy: {
				type: String,
				required: true,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false,
			},
			description: {
				type: String,
			},
		},
	],
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		linkedin: {
			type: String,
		},
		instagram: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;
