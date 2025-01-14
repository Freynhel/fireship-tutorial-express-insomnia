const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: '👕',
		size: 'large',
	});
});

app.post('/tshirt/:id', (req, res) => {

	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
		// 418 is "I'm a teapot" status code
		res.status(418).send({ message: 'We need a logo!' });
	}

	res.send({
		tshirt: `👕 with your ${logo} and ID of ${id}`,
	});
});