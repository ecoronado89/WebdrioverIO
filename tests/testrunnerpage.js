var expect = require('chai').expect;
var request = require('request');
var Browser = require('zombie');
var browser = new Browser();

describe('WebdriverIO - Testrunner page',function(){
	it.only('Verify image has loaded',function(){
		browser.visit('/guide/testrunner/jenkins.html');

		var divContainer = browser.getAttribute('article.guide p img', 'src');
		for(var urlImg = 0; urlImg < divContainer.length; urlImg++){
			console.log(divContainer[urlImg]);
			request(divContainer[urlImg]),function(error, response, body){
				expect(response.statusCode).to.be.equal(200);
			}
		}
	})
	it('Verify non-available image',function(){
		browser.visit('/guide/testrunner/jenkins.html');

		request('http://webdriver.io/images/jenkins-non-available.png', function (error, response, body) {
  			expect(response.statusCode).to.be.equal(200);
		})
	})
})