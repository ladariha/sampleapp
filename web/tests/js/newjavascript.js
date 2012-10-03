function Printer(name) {
    /**
     * A
    * @param {String} value String to be printed
    * @param {type} pretty
    * @return {Number|String}
    */
    this.test = function(value, pretty) {
        if (pretty)
            return "<h1>" + value + "</h1>";
        else
            return 0;
    };
}

var nic = new Printer(1);
var a = nic.test(1, 1);