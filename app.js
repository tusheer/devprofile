const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const multer = require('multer');
const post = require('./routes/post.js');
const profile = require('./routes/profile.js');
const users = require('./routes/users.js');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept,Authorization,x-auth-token',
	);
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		const ts = new Date().getTime().toString();
		cb(null, ts + '-' + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/gif'
	) {
		return cb(null, true);
	}
	cb(null, false);
};

app.use(
	multer({
		storage: fileStorage,
		fileFilter,
	}).single('avatar'),
);

// Set static folder

app.use('/api/users', users);
app.use('/post', post);
app.use('/profile', profile);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

const port = process.env.PORT || 4000;
mongoose
	.connect('mongodb+srv://jaantusher:JAgvUQ7cQ7CFU8Gm@cluster0-m7c3z.mongodb.net/test?retryWrites=true&w=majority', {
		useNewUrlParser: true,
	})
	.then(app.listen(port, () => console.log('game on')))
	.catch((err) => {
		console.log(err);
	});

// mongodb+srv://jaantusher:GHpiWSlRqHHjdUCG@cluster0-m7c3z.mongodb.net/test?retryWrites=true&w=majority
