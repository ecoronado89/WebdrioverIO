var browserstack = require('browserstack-local');
var path = 'C:\Users\ecoronado\IdeaProjects\APP_Ecomm_CTQAAutomation\extra-files\resources\BrowserStackLocal.exe';
exports.config = {

    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //


    user: process.env.BROWSERSTACK_USERNAME || 'eder16',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'oLDYJ5zzoQc7Mwyprxjs',

    updateJob: false,

     //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './tests/CTTCM_296.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    commonCapabilities: {
    name: 'remote_test',
    build: 'webdriver-browserstack'
  },
    capabilities: [{
      'os': 'Windows',
 'os_version': '7',
 'browser': 'Chrome',
 'browser_version': '56.0',
 'resolution': '1024x768',
 'acceptSslCerts': true,
      'browserstack.local': true
    },{
  'os': 'Windows',
  'os_version': '7',
  'browser': 'Firefox',
  'browser_version': '52.0',
  'resolution': '1024x768',
  'browserstack.local': true
    },{
       'os': 'OS X',
       'os_version': 'El Capitan',
       'browser': 'Safari',
       'browser_version': '9.1',
       'resolution': '1024x768',
       'browserstack.local': true
 }
],
// Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.key, 'binarypath': 'C:/Users/ecoronado/browserstack-test/browserstack/BrowserStackLocal.exe', 'forcelocal':true, 'force':true }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(function() {});
  },
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error

    logLevel: 'verbose',
    //
    // Enables colors for log output.

    coloredLogs: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.

     screenshotPath: null,
     //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'https://ecwebq11.llbean.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 40000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response

    connectionRetryTimeout: 90000,
    //
    // Default request retries count

    connectionRetryCount: 3,

    services: ['browserstack'],
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['spec','allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/


    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 99999999
    }
    }
