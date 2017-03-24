var force = 'input[id="_spovr_browse"]';
var setBtn = 'button[id="acsSetValues"]';
module.exports.closeForce = function (){
  browser.url('/#acscommand=fstest');
  browser.url('/#acscommand=fstest');
  browser.url('/#acscommand=fstest');
  browser.waitForVisible(force,20000);
  browser.setValue(force,0);
  browser.click(setBtn);
};
