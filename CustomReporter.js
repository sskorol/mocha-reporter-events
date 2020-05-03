// CustomReporter.js
var mocha = require('mocha');
module.exports = CustomReporter;

function CustomReporter(runner) {
    mocha.reporters.Base.call(this, runner);

    runner.on('test', function (test) {
        console.log('test start: %s', test.fullTitle());
    });

    runner.on('pass', function (test) {
        console.log('test pass: %s', test.fullTitle());
    });

    runner.on('hook', function (hook) {
        console.log('hook start: %s', hook.title);
    });

    runner.on('hook end', function (hook) {
        console.log('hook end: %s', hook.title);
    });
}
