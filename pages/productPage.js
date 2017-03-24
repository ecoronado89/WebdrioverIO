var monogrammingDetailsLInk = '.mono-detail-link';
var monogrammingPopUp = '.mono-pop-over-inner';
var itemSetList = 'div.item-set label';
var sizeGroupList = 'div.form-group fieldset label';
var colorGrouptList = 'div.item-color-group label';
var pasbTitle = 'div.ui-dialog-titlebar span';

function clickDetailsLink(){
  browser.click(monogrammingDetailsLInk);
  browser.waitForVisible(monogrammingPopUp,2000);
};

function closeDetalisPopUp(){
  browser.click('=Close');
};

function checkMonogramm(){
  browser.click('input.item-services-check');
};

function selectRandomItemSet(){
  var itemSet =  browser.elements(itemSetList);
  var ran =  Math.floor(Math.random() * itemSet.value.length);
  itemSet.value[ran].click();
};

function selectRandomSize(){
  var sizeSet =  browser.elements(sizeGroupList);
  var ran =  Math.floor(Math.random() * sizeSet.value.length);
  sizeSet.value[ran].click();
};

function selectRandomColor(){
  var colorSet =  browser.elements(colorGrouptList);
  var ran =  Math.floor(Math.random() * colorSet.value.length);
  colorSet.value[ran].click();
};

function clickAddToBag(){
 browser.click('div.form-inline button');
};

function getPASBTitle(){
  browser.waitForVisible(pasbTitle,10000);
  var x = browser.getValue(pasbTitle);
  console.log(x);
};

module.exports = {
  clickDetailsLink : clickDetailsLink,
  closeDetalisPopUp : closeDetalisPopUp,
  checkMonogramm : checkMonogramm,
  selectRandomItemSet : selectRandomItemSet,
  selectRandomSize : selectRandomSize,
  selectRandomSize : selectRandomSize,
  selectRandomColor : selectRandomColor,
  clickAddToBag : clickAddToBag,
  getPASBTitle : getPASBTitle
};
