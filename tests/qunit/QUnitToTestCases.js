/*

Converts qunit tests into TestCases for running with JS Test Driver.

	Author: Karl O'Keeffe

Each module is a new TestCase.
Each test is a new test method.

This requires a patched testrunner.js, which exposes
	QUnit.validTest
	QUnit.config
	QUnit.runTest


*/

// Because JS Test Driver using query string parameters,
// it causes all tests to be invalid by default
// so we override validTest to make them all valid
QUnit.validTest = function() {
	return true;
}

// Default QUnit module
QUnitTest = TestCase("Default");

module = function(name) {
	QUnitTest = TestCase(name);
}

// Save the old test method, before defining a new one
QUnit.test = test;
test = function(name, callback) {

	// Create a new test method for this test
	QUnitTest.prototype['test ' + name] = function() {
	
		// Reset the qunit stats before running
		QUnit.config.stats.bad = 0;
		QUnit.config.stats.all = 0;
		
		// Required for runTest()
		$('<div id="main"></div>').appendTo('body');
	
		// Assert that there were no failures
		QUnit.done = function(failed, total){
			assertEquals(0, failed);
		};

		// Add the test and run it!
		QUnit.test(name, callback);
		QUnit.runTest();
	};
	
};