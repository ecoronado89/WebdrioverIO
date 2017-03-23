var monogrammingDetailsLInk = '.mono-detail-link';
var monogrammingPopUp = '.mono-pop-over-inner';
var itemSetList = 'div.item-set label';

module.exports.clickDetailsLink = function(){
  browser.click(monogrammingDetailsLInk);
  browser.waitForVisible(monogrammingPopUp,2000);
};

module.exports.closeDetalisPopUp = function(){
  browser.click('=Close');
}

module.exports.checkMonogramm = function(){
  browser.click('input.item-services-check');
}

module.exports.selectRandomItemSet = function(){
  var elems =  browser.elements(itemSetList);
  var ran =  Math.floor(Math.random() * elems.value.length);
  console.log(elems.value);
  console.log(ran);
  elems.value[ran].click();
  browser.pause(6000);
}
