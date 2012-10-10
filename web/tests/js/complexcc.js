function Person(n) {
    this.constructor.population++;
    this.clothing = "nothing";
    this.dirtFactor = 0;

    var age = 1;
    
    // TASK - check the function and properties of Math are offered
    // Math.|
    
    var maxAge = 70 + Math.round(Math.random() * 15) + Math.round(Math.random() * 15);
    function makeOlder() {
        
        // TASK - check that age is offered
        // a|
        
        return alive = (++age <= maxAge)
    }

    var myName = n ? n : "John Doe";
    var weight = 1;

    this.toString = this.getName = function() {
        
        return myName;
    };

    this.eat = function() {
        // TASK - check makeOlder is offered
        // m|
        
        if (makeOlder()) {
            
            // TASK - check dirtFactor, clothing, weight() and eat() are offered
            // this.|
            
            this.dirtFactor++;
            return weight *= 3;
        } else
            formatter.println(myName + " can't eat, he's dead!");
    };


    this.weigh = function() {
        return weight;
    };
    this.getAge = function() {
        return age;
    };

}

// TASK - check prototype is offered
// Person.pr|

Person.prototype.beCool = function() {
    // TASK - check dirtFactor, clothing, weight() and eat() are offered
    // this.|
    
    this.clothing = "khakis and black shirt";
};
Person.prototype.shower = function() {
    this.dirtFactor = 2;
};

Person.population = 0;


function RunGavinsLife() {
    // TASK - check Person if offered
    // var a = new P|
    var gk = new Person("Gavin");

    // TASK - check eat(), beCool(), clothing are offered
    // gk.|
    gk.eat();
    gk.beCool();
    gk.clothing = "Pimp Outfit";


    // TASK - check eat(), beCool(), clothing are offered
    // Person.prototype.|
    Person.prototype.shower = function() {
        this.dirtFactor = 0;
        
    };
    gk.beCool = function() {
        // TASK - check clothing and dirtFactor are offered
        // this.|
        this.clothing = "tinfoil";
    };

    gk.beCool();
    gk.shower();

    formatter.println("Fashionable " + gk + " at "
            + gk.getAge() + " years old is now wearing "
            + gk.clothing + " with dirt factor "
            + gk.dirtFactor);


}

var ET = {
    velocity: "warp 1",
    origin: "Proxima Centaury",
    attack: function() {
        console.log("attack")
    }
};

// TASK - check attack(), velocity and origin are offered
// ET.|
ET.attack();

var HUMAN = function(name) {
    this.name = name;
    this.msg = function(msg) {
        // TASK - check name is offered
        // this.|
        console.log(this.name + ": " + msg);
    }
};

var john = new HUMAN("john");

// TASK - check msg is offered
// john.|
john.msg("Hi");


/**
 * 
 * @type HUMAN
 */
var dd;

// TASK - check msg and name are offered
// dd.


function Allien(){
    /**
     * 
     * @type Date
     */
    var dob;
    
    this.sendCV = function(){
        
        // TASK - check Date properties 
        // dob.
    };
}