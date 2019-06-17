const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.send('HI every one i am jane alam tusehr and shorna');
});
mongoose.connect('mongodb://localhost:27017').then(app.listen(4000, () => console.log('game on')));
