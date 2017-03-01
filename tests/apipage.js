var assert = require('assert');
var expect = require('chai').expect;

describe('WebdriverIO - API page',function(){
	it('Search & Filter',function(){
		browser.url('/api.html');
		browser.setValue('input[name="search"]','getT');

		var results = $$('.commands.property a').filter(function (link) {
            return link.isVisible();
        });

        expect(results.length).to.be.equal(3);

        results[1].click();
        expect($('.doc h1').getText()).to.be.equal('GETs');
	})
	it('Random select & Title validation',function(){
		browser.url('/api.html');

		var leftElement = browser.getAttribute('nav.apinav div a', 'href');
		var leftElementsName = browser.getText('nav.apinav div a')
		var ran = Math.floor(Math.random() * leftElement.length);
		console.log(leftElement[ran]);
		console.log(leftElementsName[ran])
		console.log(ran)
		browser.click('='+leftElementsName[ran]);
		
		 expect($('.doc h1').getText()).to.be.equal(leftElementsName[ran].toUpperCase());
	})
});