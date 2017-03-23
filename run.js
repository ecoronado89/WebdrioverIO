var test = require('./utilities/xls-to-json.js');
var run = test.ns();
var path = require('path');
var fs = require('fs');

var file = path.join(__dirname, './data/jsondata.json');

function printJson(err, json) {
	if (err) {
		console.log('Error');
		return;
	}
	run.write(json, fileReady);
}

function fileReady(err) {

	var json = JSON.parse(fs.readFileSync(file, 'utf8'));
	console.log(json[0].WEB_PAGE_ID);
}

run.get(printJson);
