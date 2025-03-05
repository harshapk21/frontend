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