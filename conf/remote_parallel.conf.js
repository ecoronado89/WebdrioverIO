exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'eder16',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'oLDYJ5zzoQc7Mwyprxjs',

  updateJob: false,
  specs: [
    './tests/**/*.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'webdriver-browserstack'
  },

  capabilities: [{
   os: 'Windows',
   os_version: '7',
   browserName: 'Chrome',
   browser_version: '55.0',
   resolution: '1024x768',
   build: 'webdriver-browserstack'
},{
   os: 'Windows',
   os_version: '7',
   browser: 'Firefox',
   browser_version: '51.0',
   resolution: '1366x768'
},{
   os: 'Windows',
   os_version: '8',
   browser: 'IE',
   browser_version: '8.0',
   resolution: '1024x768'
},{
   os: 'OS X',
   os_version: 'Mountain Lion',
   browser: 'Safari',
   browser_version: '6.2',
   resolution: '1024x768'
}],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://webdriver.io',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  reporters: ['spec','allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 99999999
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

