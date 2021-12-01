const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello Rec.me :)");
});

app.post("/register", (req, res) => {
	res.status(200).send("User registered!");
});

app.listen(5000, () => {
	console.log("Server has been started on port 5000");
});

//localhost5000/register
