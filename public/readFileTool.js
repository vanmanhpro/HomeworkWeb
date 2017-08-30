const fileController = require("./fileController");

fileController.readFile("./test.txt", 
	(data) => {
		console.log(data);
		//document.getElementById("respond").innerHTML = data;
	});