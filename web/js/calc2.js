


function CalculatorEvolution() {
/**
 * Sum of 2 numbers
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} a+b
 */
    this.sum = function(a, b) {
        return a + b;
    };
    
    this.inc = function(a){
        return a+1;
    };
    
    this.divide = function(a,b){
        return Math.round(a/b);
    };
    
}