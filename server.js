const express = require('express')
const app = express()
const port = 3000

const livelinessResponseStatusCode = parseInt(process.env.LIVELINESS_RESPONSE_STATUS_CODE || "200");
const readinessResponseStatusCode = parseInt(process.env.READINESS_RESPONSE_STATUS_CODE || "200");
const startupResponseStatusCode = parseInt(process.env.START_RESPONSE_STATUS_CODE || "200");

app.get('/liveliness', (req, res) => {
	console.log(`${new Date()} : Liveliness probe fired & returned : ${livelinessResponseStatusCode}` );
	res.status(livelinessResponseStatusCode);
	res.send("");
});

app.get('/readiness', (req, res) => {
	console.log(`${new Date()} : Readiness probe fired & returned : ${readinessResponseStatusCode}`);
	res.status(readinessResponseStatusCode);
	res.send("");
});

app.get('/startup', (req, res) => {
	console.log(`${new Date()} : Startup probe fired & returned : ${startupResponseStatusCode}`);
	res.status(startupResponseStatusCode);
	res.send("");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})