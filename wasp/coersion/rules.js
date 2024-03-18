/**
 * valueOf for array , object and function returns itself
 */

/**
 * toString of 
 * Object is [objectObject]
 * fn is string representations of fn
 * [1,2] is '1,2' 
 * [] is ''
 */

/**
 * for a given function we can overide valueOf and toString methods at prototype level if its a fn constructor and that 
 * change is applied only to all its instances/objects but not the fn itself.
 * 
 * for applying to fn constructor , override at Function () { } level or inside it provide valueOf property
 * 
 * for object also mostly same rule
 * 
 */

/**
 * Some tricky un-expected coercions
 */

String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'

/**
 * I thought String(true | false) & string(null || undefined) might behave differently
 */

Number(null)                   // 0

//I thought it would give NaN


/***
 * When applying == to null or undefined, numeric conversion does not happen. 
null equals only to null or undefined,
and does not equal to anything else.
 */

null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true


if (value !== value) { console.log("we're dealing with NaN here") }

/**
 * Type coercion is triggered only if types are different
 * and with == , irrespective of primitives or objects , js tries to convert to number
 */

['x'] == 'x'  
 'x' == 'x'
  true

// == operator triggers a numeric conversion for an array. Array’s valueOf() method returns the array itself, 
// and is ignored because it’s not a primitive. Array’s toString() converts ['x'] to just 'x' string.

[1,2,3] == [1,2,3]
 false

 /**
  * No coercion is needed because both operands have same type. Since == checks 
  * for object identity (and not for object equality) and the two arrays are two different instances, 
  * the result is false.
  */

 Number([]) = 0
 Number('') = 0