function Player(url, name){
    this.name = name; 
 
    // public
    this.start = function(){
    };
    this.stop = function(){
        // calling private function
        foofuf();
    };
    // private
    function foofuf(){    
        document.write("private");
    };
 
    // TASK - rename static_int
    var static_int = 0;
    Player.prototype.getStatic = function(){ return static_int;};
    // TASK - rename setStatic
    Player.prototype.setStatic = function(v){ static_int = v; };
}

// TASK - rename Player
var p1 = new Player();
p1.setStatic(100);
// TASK - rename stop
p1.stop();




var a = {
    toString: function(){
        document.write("a");
    },
    name: "object literal notation",
    "this": "properties should be quoted but it's not necessary if their name doesn't match reserved keyword"
};


// TASK - rename this
a.this=1;//toString();