const express = require('express');

const app = express();

app.get("/x", (req, res) => {
	res.sendFile(__dirname + "/public/menuHomework.html");
});


app.get("/about", (req, res) => {
	res.send("<h1>Long</h1>");
});

// app.get("/style.css", (req, res) => {
// 	res.sendFile(__dirname + "/public/style.css");
// })

app.use(express.static(__dirname + "/public"));

app.listen(6969, () => {
	console.log("server is up");
});