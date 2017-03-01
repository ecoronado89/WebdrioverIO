var assert = require('assert');
var expect = require('chai').expect;

describe('WebdriverIO - API page',function(){
	it('Click API link & Verify page title',function(){
		browser.url('/');
		browser.click('=API');

		var apiTitle = browser.getTitle();
		assert.equal(apiTitle,'WebdriverIO - API Docs');
	})
});