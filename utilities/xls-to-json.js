var csv = require('csv-to-json');
var path = require('path');

var Buz = function () {};

Buz.prototype.ns = function () {
	return {
		get: function(cb) {
			var obj = {
				filename: path.join(__dirname, '../data/data.csv')
			};

			csv.parse(obj, cb);
		},
		write: function(result, cb) {
			var obj = {
				filename: path.join(__dirname, '../data/jsondata.json'),
				json: result
			}
			csv.writeJsonToFile(obj, cb);	
		}
	}
}

module.exports = new Buz();