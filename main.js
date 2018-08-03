"use strict";
// create mocha instance
const Mocha = require("mocha");
let mochaMain = new Mocha({
    reporter: 'mocha-rp-reporter',
    reporterOptions: {
        configOptions: {
            endpoint: "http://localhost:8080/api/v1",
            username: "default",
            password: "1q2w3e",
            launch: "Mocha Test",
            project: "RP POC",
            tags: [
                ""
            ]
        },
        configFile: "config.json"
    }
});


// run tests
try{
    mochaMain.files = ["./tests/apipage.js"];
    mochaMain.run((failures) => process.on('exit', () => process.exit(failures))); // exit with non-zero exit code, other wise fails will not fail mocha run
} catch (err) {
    console.error(`Test suite doesn't exists or set. Error: ${err}`);
}