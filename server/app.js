const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const post = require('./routes/post.js');
const profile = require('./routes/profile.js');
const users = require('./routes/users.js');

app.use(bodyParser.json());
app.use('/post', post);
app.use('/profile', profile);
app.use('/users', users);

app.get('/', (req, res) => {
	res.send('HI every one i am jane alam tusehr and shorna');
});
mongoose.connect('mongodb://localhost:27017').then(app.listen(4000, () => console.log('game on')));
