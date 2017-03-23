var monogramType = 'div.group-type label';
var monogrammStyleName = 'div.group-style fieldset.type-name label';
var monogrammStyleInitial = 'div.group-style fieldset.type-initials label';
var monogrammStyleSingleLetter = 'div.group-style fieldset.type-single-letter label';
var monogrammName = 'input[id="monoText"]';
var monogrammFirstInitial = 'input[id="firstInitial"]';
var monogrammMiddleInitial = 'input[id="midInitial"]';
var monogrammLastInitial = 'input[id="lastInitial"]';
var monogrammSingleLetter = 'input[id="singleLetter"]';
var monogrammColorsSwatches = 'fieldset.group-swatches ul li label';
var saveMonogramBtn = 'button[id="saveMonogram"]';

function selectMonogramType(){
  var mType =  browser.elements(monogramType);
  var ran =  Math.floor(Math.random() * mType.value.length);
  console.log(mType.value[ran]);
  mType.value[ran].click();

  addText(ran);

  clickSaveMBtn();
};

function selectMonogramStyleName(){
  browser.waitForVisible(monogrammStyleName,1000);
  var mStyleName =  browser.elements(monogrammStyleName);
  var ran =  Math.floor(Math.random() * mStyleName.value.length);
  mStyleName.value[ran].click();
};

function selectMonogramStyleInitial(){
  var mStyleInitial =  browser.elements(monogrammStyleInitial);
  var ran =  Math.floor(Math.random() * mStyleInitial.value.length);
  mStyleInitial.value[ran].click();
};

function selectMonogramStyleSingleL(){
  var mStyleSingleL =  browser.elements(monogrammStyleSingleLetter);
  var ran =  Math.floor(Math.random() * mStyleSingleL.value.length);
  mStyleSingleL.value[ran].click();
};

function selectMonogramColor(){
  var mColor =  browser.elements(monogrammColorsSwatches);
  var ran =  Math.floor(Math.random() * mColor.value.length);
  mColor.value[ran].click();
};

function clickSaveMBtn(){
  browser.click(saveMonogramBtn);
};

function addText(index){
  if(index == 0){
    selectMonogramStyleName();
    browser.waitForVisible(monogrammName,500);
    browser.setValue(monogrammName,'Test');
  }
  else if(index == 1){
    selectMonogramStyleInitial();
    browser.waitForVisible(monogrammFirstInitial,500);
    browser.setValue(monogrammFirstInitial,'L');
    browser.setValue(monogrammMiddleInitial,'L');
    browser.setValue(monogrammLastInitial,'B');
  }
  else if(index == 2){
    selectMonogramStyleSingleL();
    browser.waitForVisible(monogrammSingleLetter,500);
    browser.setValue(monogrammSingleLetter,'T');
  }
}

module.exports = {
  selectMonogramType : selectMonogramType
};
