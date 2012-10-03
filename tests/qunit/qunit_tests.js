TestCase("Test Of Calculator using QUnit", {
    "testSimpleSum": function() {
        var calc = new Calculator();
        assertEquals("Simple sum failed", calc.sum(1, 2), 1);
    },
    "testSimpleInc": function() {
        var calc = new Calculator();
        assertEquals("Simple inc failed", calc.inc(0), 0);
    }
});
