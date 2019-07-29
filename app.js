const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

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
app.use('/api/users', users);
app.use('/post', post);
app.use('/profile', profile);

app.get('/', (req, res) => {
	res.send('HI every one i am jane alam tusehr and shorna');
});
mongoose
	.connect('mongodb://localhost:27017/users', { useNewUrlParser: true })
	.then(app.listen(4000, () => console.log('game on')));
