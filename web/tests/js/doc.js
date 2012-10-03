/**
 * Construct a new Shape object.
 * @class This is the basic Shape class.
 * @constructor
 * @throws MemoryException if there is no more memory
 * @throws GeneralShapeException rarely (if ever)
 * @return {Shape} A new shape.
 */
function Shape() {



    /**
    * This is an example of a function that is not given as a property
    * of a prototype, but instead it is assigned within a constructor.
    * For inner functions like this to be picked up by the parser, the
    * function that acts as a constructor <b>must</b> be denoted with
    * the <b>&#64;constructor</b> tag in its comment.
    * @type CustomString
    */
    this.getClassName = function() {
        return "CustomShape";
    };

    this.getNumber = function(param1) {
        return 1;
    }

    /**
    * This should be visible
    */
    function addReference() {
        // Do nothing...

    }

    addR

}

// TASK - check help window, it should contain initial description from line 2 and information from @returns
// var a = new Sha|pe();

/**
 * Create a new Hexagon instance.
 * @extends Shape
 * @class Hexagon is a class that is a <i>logical</i> sublcass of
 * {@link Shape} (thanks to the <code>&#64;extends</code> tag), but in
 * reality it is completely unrelated to Shape.
 * @param {int} sideLength The length of one side for the new Hexagon
 * @example
 * var h = new Hexagon(2);
 * @return {Hexagon} description
 */
function Hexagon(sideLength) {

}

/**
 * This is an unattached (static) function that adds two integers together.
 * @param {int} One The first number to add
 * @param {int} Two The second number to add
 * @author Gabriel Reid
 * @deprecated So you shouldn't use it anymore! Use {@link Shape#getClassName} instead.
 */
function Add(One, Two) {
    return One + Two;
}


/**
 * The color of this shape
 * @type Color
 */
Shape.prototype.color = null;

/**
 * The border of this shape.
 * @field
 * @type int
 */
Shape.prototype.border = function() {
    return border;
};

/*
 * These are all the instance method implementations for Shape
 */

/**
 * Get the coordinates of this shape. It is assumed that we're always talking
 * about shapes in a 2D location here.
 * @requires The {@link Shape} class
 * @returns A Coordinate object representing the location of this Shape
 * @type Coordinate[]
 */
Shape.prototype.getCoords = function() {
    return this.coords;
}

/**
 * Get the color of this shape.
 * @see #setColor
 * @see The <a href="http://example.com">Color</a> library.
 * @link Shape
 * @type Color
 */
Shape.prototype.getColor = function() {
    return this.color;
}

/**
 * Set the color for this Shape
 * @param {Color} color The color to set for this Shape
 * @param other There is no other param, but it can still be documented if
 *              optional parameters are used
 * @throws NonExistantColorException (no, not really!)
 * @see #getColor
 */
Shape.prototype.setColor = function(color) {
    this.color = color;
}

Shape.prototype.setDescription = function(desc) {

}



/**
 * Hey there...
 * @param {String} value String to be printed
 * @param {Boolean} pretty
 * @return {Foo|Bar|String} Some random object
 */
function print(value, pretty) {
        if (pretty)
            return "<h1>" + value + "</h1>";
        else
            return 0;
    };

