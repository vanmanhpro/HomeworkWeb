const fileController = require("./fileController");

fileController.readFile("test.txt", 
	(number) => {
		var x = Number(number);
		console.log(1 + x);
	});