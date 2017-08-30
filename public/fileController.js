const fs = require('fs');



const saveFile = (filename, data) => {
	fs.writeFileSync(filename, data);
}

const readFileSync = (filename) => 			{
	return fs.readFileSync(filename, {encoding: "utf-8"} );
}

const readFile = (filename, callback) => {
	fs.readFile(filename, { encoding : 'utf-8'},
		(error, data) => {
			callback(data);
		});
}

module.exports = {
	saveFile : saveFile,
	readFile : readFile,
	readFileSync : readFileSync
}