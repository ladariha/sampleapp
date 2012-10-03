// test suite
describe("test of super cool calculator", function() {

    // optional
    beforeEach(function() {
        jstestdriver.console.log("\n =============", " START TEST");
    });
    afterEach(function() {
        jstestdriver.console.log("\n =============", " STOP TEST");
    });

    var calc = new Calculator();

    // for debugging only - start
    try {
        var request = new XMLHttpRequest();
        request.open("GET", 'data/dummy1.json', true);
        var pointer = this;

        request.send();
    } catch (e) {
        window.console.log(e);
    }
    var pes = 1;
    pes = pes + 1;

// for debugging only - end

    // it() is a test specification
    it("should equal 3", function() {
        jstestdriver.console.log("", " oops");
        expect(calc.sum(1, 2)).toBe(3);
    });

    // full list of matchers at http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html

    it("should equal -1", function() {
        expect(calc.inc(-2)).toBe(-1);
    });
    it("should NOT equal 0", function() {
        expect(calc.inc(0 + 1)).not.toBe(0);
    });

    it("should fail somehow :)", function() {
        expect(calc.divide(0, 0)).not.toBe(0);
    });
});
