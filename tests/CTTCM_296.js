var assert = require('assert');
var expect = require('chai').expect;
var homePage = require('../pages/homePage');
var productPage = require('../pages/productPage');
var monogrammingPage = require('../pages/monogrammingPage');
var forceModal = require('../pages/closeForce');
var monogrammLink = 'a.mono-detail-link';
var monogramHelperText = 'div.service-helper-text';

describe('CTTCM-296',function(){

  before(function(){
    browser.url('/');
    forceModal.closeForce();
  browser.url('/?mmcore.gm=2');

 });

 it('Step #1 - Select monogramming product',function(){
   homePage.searchItem();

    var monogrammLink = browser.isExisting('=details');
    assert(monogrammLink);
    var checkB = browser.isSelected('input.item-services-check');
    assert.equal(checkB,false);
 });

 it('Step #2 - Click on details link',function(){
   productPage.clickDetailsLink();
   var popUpTitle = browser.isVisible('div.mono-pop-over h3');
   assert(popUpTitle);
 });

 it('Step #3 - Check monogramming checkbox', function(){
   productPage.closeDetalisPopUp();
   productPage.checkMonogramm();

   var helperText = browser.isVisible(monogramHelperText);
   assert(helperText);

   var checkB = browser.isSelected('input.item-services-check');
   assert.equal(checkB,true);
 });

 it('Step #4 - Select Item set',function(){
   productPage.selectRandomItemSet();
   productPage.selectRandomSize();
   productPage.selectRandomColor();
   productPage.clickAddToBag();
  // var pageTitle = browser.getTitle();
   expect(pageTitle).to.be.equal('L.L.Bean: Monogramming');
 });

 it('Step #5 - Save Monogramm',function(){
   monogrammingPage.selectMonogramType();
   assert(productPage.isPASBModalVisible());
   //browser.pause(3000);
 });
})
