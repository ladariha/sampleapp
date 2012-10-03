/*
 * Better condition
 * This hint sugges to use === or !== insteed == or != in the conditions
 */
 
 if (a == b) {
     a = 0;
 }
 
 
/*
 * Missing semicolon
 * One of the convention in JavaScript is that semicolon should be used after
 * every statement. The using semicolon is not mandatory in JavaScript code, if you
 * don't have more statements on one line. But is recommanded to use semicolon
 * because it improves readability of the code
 */
 
 var X = {
     first: 10,
     second: 'text'
 }

/*
 * Unvonted ',' in object literal definition
 * This hints warns when there is ',' after the last property in a object literal 
 * definition. Some browsers can have problems with it
 */
 
 var y = {
     first: 20,
     second: function () {
         return "text";
     },
     third: 30,
 };
 
 /*
  * Weird assignment
  * It warns before using assignment in a condition
  */

while (a = b) {
    a++;
}

/*
 * Duplicate name of a property
 * Warns when in an object literal definition is used the same name of a property
 * twice.
 */
 
 var z = {
    first: "10",
    second: "text",
    first: 10
 };


/**
 * Incorrect Documentation due to parameter called foo
 * @param {type} param1
 * @param {type} foo
 * @returns {undefined}
 */
function test(param1){
    
}
/**
 * Parameter param2 not documented
 * @param {type} param1
 * @returns {undefined}
 */
function test2(param1, param2){
    
}