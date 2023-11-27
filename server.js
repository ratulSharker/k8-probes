const express = require('express')
const app = express()
const port = 3000

const livelinessResponseStatusCode = process.env.LIVELINESS_RESPONSE_STATUS_CODE || 200;
const readinessResponseStatusCode = process.env.READINESS_RESPONSE_STATUS_CODE || 200;
const startupResponseStatusCode = process.env.START_RESPONSE_STATUS_CODE || 200;


app.get('/liveliness', (req, res) => {
	console.log(`${new Date()} : Readiness probe fired at`);
	res.status(livelinessResponseStatusCode);
	res.send("");
});

app.get('/readiness', (req, res) => {
	console.log(`${new Date()} : Liveliness probe fired at`);
	res.status(readinessResponseStatusCode);
	res.send("");
});

app.get('/startup', (req, res) => {
	console.log(`${new Date()} : Startup probe fired at`);
	res.status(startupResponseStatusCode);
	res.send("");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})