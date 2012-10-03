
describe("test of super cool calculatorEvolution - should failed because calc2.js is not loaded", function() {
    var calc = new CalculatorEvolution();
    
    it("should equal 3", function() {
        expect(calc.sum(1, 2)).toBe(3);
    });
    it("should equal -1", function() {
        expect(calc.inc(-2)).toBe(-1);
    });
    it("should NOT equal 0", function() {
        expect(calc.inc(0+1)).not.toBe(0);
    });
    
    it("should fail somehow :)", function() {
        expect(calc.divide(0,0)).not.toBe(0);
    });
});