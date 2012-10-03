function Player(url, name){
    this.name = name; // public 
    var m_url = url; // private
 
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
 
 
 
    // static
    var static_int = 0;
    Player.prototype.getStatic = function(){ return static_int;};
    Player.prototype.setStatic = function(v){ static_int = v; };
}
 
var p1 = new Player();
var p2 = new Player();
p1.setStatic(100);
p1.stop();
alert( p2.getStatic() ); //will print 100.​​​​​​​​​​​

var PlayerEvo = function(){
    this.name = "better player";
    this.b = new Bar();
    
    function Bar(){
      this.tp =1;  
    };
    
}

var p3 = new PlayerEvo({foo:1}); // anonymous object as parameter

document.write(p3.name);



// object literl

var a = {
    toString: function(){
        document.write("a");
    },
    name: "object literal notation",
    "this": "properties should be quoted but it's not necessary if their name doesn't match reserved keyword"
};

a.this=1;//toString();

