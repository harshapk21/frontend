// str.split('') is similar to [...str] cause str is an iterator & iterators can be spread i.e iterated over

// Array(3).fill() will fill with undefined & the array is no more filled with empty slots & you can now map on it else map genrally skips empty slots

// Array(3) will fill with empty slots while Array.from() will fill with undefined

function log(output) {
  console.log(output);
}

/* Array.from takes iterables or array like objects as input and returns an array. It has optional 2nd param fn which is used to change index value before output to array
 */
log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
log(Array.from({ 0: "a", length: 4 })); // ["a", undefined, undefined, undefined]
log(Array.from(new Set([1, 2, 4]))); // [1,2,4]

/* Array like object is an object with numberic keys which acts like array indices & also has a length property. 
Array methods like map , filter etc do not work on them are they're still object but Array like :)
    Ex: arguments in functions, HTMLCollection but nodeList returned by methods of document object implements iterator & hence it can be used by for...of loop & can be spread as well.
    you can do normal for loop but for doing for...of & spread , you need to implement iterator &
    for doing map,forEach etc , you need to convert it to an Array.
    // const htmlCollection = document.getElementsByTagName('div');
*/

function test() {
  log(arguments);
  log(arguments.length);
  log(arguments.map((arg) => console.log(arg, "*")));
  log(Array.from(arguments).map((arg) => console.log(arg, "*")));
  /*
   1. {
      0: 1,
      1: 2,
      2: 3
    }
   2. 3
   3. error
   4. logs all elements
  */
}

test(1, 2, 3);

// Iterables -> Anything that can be spread(...) and used by for...of loop can be termed as iterables. 
// They internally implement iterator & hence they can be used by for...of & spreading. one point to note here is , 
// all iterables can be converted to array just by doing [...iterable] ex: of iterators: strings, maps&sets, arrays, modern NodeList
log([...new Set([1, 2, 3])]);
log([..."hello"]);


// Also easy to create a custom iteration , just nned to implement [symbol.iterator] which is a function that returns an iterator,
// which is just an object which has next function , and the next function should return an object with {value: currValue,done: true/false}
// refer image , & then you can do spread , for...of on this object as it has implemented iterator

Array.of(1,2,3) === Array(1,2,3) // creates array of 3 elements. Diff lies in handling single parameter

// Prototype properties are shared across all the instances , there is no instance specific prootype data that you can set direclty is what i thought.
// But once you make a change/assign a value to prototype through instance , the changed value is specific to that instance only .
// You can access prototype properties through instances only , you cannot access them using function constructor name , becuase when you add these prototype properties , they are added to prototype object of function constructor.
// That makes them non-static properties and hence cannot be accessed by Array,Object etc directly , you need an instance to access the shared properties or you can do Array.prototype.value to get the value
Array.prototype.listeners = [10,11];

Array.prototype.fn = function(){
this.listeners = this;
//this.listeners = [10];
}

let x = [1,2];
let y = [3,4];

x.fn();
y.fn();

console.log(Array.prototype.listeners,x.listeners,y.listeners); // logs respective values for default,x,y with [Circular *1]for x & y
// [Circular *1] - representation for circular reference as we have attached this to listeners which is basically the same array/reference
// assigining something else instead of this should fix the issue
// You would see similar indication when logging circular refernce object ref: remove circular reference from an object.

// It's recommended to use a factory pattern for instance specific properties instead of going via a prototype
// Lot of good info added as 2 images with FactoryPatternInstancePrototype titles & also functionsOG


