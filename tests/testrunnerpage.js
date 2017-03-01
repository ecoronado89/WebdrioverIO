var expect = require('chai').expect;
var request = require('request');

describe('WebdriverIO - Testrunner page',function(){
	it('Verify image has loaded',function(){
		browser.url('/guide/testrunner/jenkins.html');

		var divContainer = browser.getAttribute('article.guide p img', 'src');
		for(var urlImg = 0; urlImg < divContainer.length; urlImg++){
			console.log(divContainer[urlImg]);
			request(divContainer[urlImg]),function(error, response, body){
				expect(response.statusCode).to.be.equal(200);
			}
		}
	})
})