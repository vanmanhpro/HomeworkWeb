const fileController = require("./fileController");

fileController.readFile("test.txt", 
	(data) => {
		console.log(data);
	});