var monogrammingDetailsLInk = '.mono-detail-link';
var monogrammingPopUp = '.mono-pop-over-inner';
var itemSetList = 'div.item-set label';
var sizeGroupList = 'div.form-group label';
var colorGrouptList = 'div.item-color-group label';

module.exports.clickDetailsLink = function(){
  browser.click(monogrammingDetailsLInk);
  browser.waitForVisible(monogrammingPopUp,2000);
};

module.exports.closeDetalisPopUp = function(){
  browser.click('=Close');
};

module.exports.checkMonogramm = function(){
  browser.click('input.item-services-check');
};

module.exports.selectRandomItemSet = function(){
  var itemSet =  browser.elements(itemSetList);
  var ran =  Math.floor(Math.random() * itemSet.value.length);
  itemSet.value[ran].click();
};

module.exports.selectRandomSize = function(){
  var sizeSet =  browser.elements(sizeGroupList);
  var ran =  Math.floor(Math.random() * sizeSet.value.length);
  sizeSet.value[ran].click();
};

module.exports.selectRandomColor = function(){
  var colorSet =  browser.elements(colorGrouptList);
  var ran =  Math.floor(Math.random() * colorSet.value.length);
  colorSet.value[ran].click();
  browser.pause(6000);
};
