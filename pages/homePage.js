var searchInputField  = 'input[id="search-string"]';

  module.exports.searchItem = function (){
    browser.setValue(searchInputField,'TA112644');
    browser.click('button.search-button');
  };
