const express = require('express');
const app = express.Router();

app.get('/post', (req, res) => {
	res.status(222).json({
		name: 'jane alam ',
		age: 34,
	});
});

module.exports = app;
