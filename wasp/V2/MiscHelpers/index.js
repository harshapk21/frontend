//slice works well even if upper limit exceeds array size
let x = [1, 2, 3, 4, 5];

console.log(x.slice(0, 10)); // prints full array

tr.slice(1, -1); // abcd -> bc i.e gives str by removing 1st & last index

NaN === NaN(false);

let y = {} instanceof Object;
// returns "Uncaught SyntaxError: Unexpected token 'instanceof'" bcos js consider {} as block of code instead of an object , wrap it like ({})
// similarly 10.valueOf() is syntax error but (10).valueOf() is right

// you can't change value of primitive. when you re-assign a variable with primitive ,  you are just creating a new primitive & storing the adress reference to that variable.
let str = "abc";
str[0] = d; // not possible

// you can add properties to array instance also just like you can do for fn & objs , helpful in factory pattern version of event listeners on array. observe factory SS

/**
 * 1) Map & Set are available in JS as well. JS Map is not similar to native JS Obj , in JS Map you can have any datatype as keys & values. The same is with sets as well. whereas native object take only string version of data types as keys.
 * 2) you have to use mp.get, mp.set,has,delete methods with map & with set you can use set.add(),has,clear,delete.
 *  you cannot directly assign/read a value with maps & sets like you do with native objects.
 * 3) since map & set are iterables , you can use for...of & spread by default , forEach is also available for both((key,value)=>{},(key)=>key)
 * ex: for(let [key,value] of map)/for(let value of set) works fine
 * You can iterate over all Map & Set values usinbg the above logics
 * 4) we also have weakMap(keys should be objects) & weakSet(objects) but these work exclusively with objects/instances & these are weak referenced i.e moment nothing is having a reference to these objects , they're garbage collected &
 * you cannot iterate over them all at once , get & set properties is same like maps & sets. Since cleanup happens automatically , these are bit memory efficient
 *
 *
 */

const map = new Map();
let obj = { id: 1 };
map.set("a", 10);
map.set("b", 20);
map.set(obj, 30);
console.log([...map]); // [['a',10],['b',20]] - similar to Object.entries();
//map.forEach((key,value,arr)=>console.log(key,value,arr))
//for(let [key,value] of map)

const set = new Set();
set.add(obj);
set.add(10);
console.log([...set]); // Array of set items [{},10]
console.log(set.has(obj)); // true

/*
Also spreading preserves references , even if you spread and convert maps & sets 
into Array or Map etc , shallow copy is done , references are preserved.
Spreading always gives out individual elements , its upto you , how you wrap them or use them
*/

let x1 = { id: 1 };
let map1 = new Map([
  ["a", x1],
  ["b", x1],
]);

let newMap = new Map([...map1]); // spread wrapped with array gives array of arrays which is the same format as initialisation

console.log(map1.get("a") === newMap.get("a")); // true bcos of shallow copy

// [object Object] is the string representation of object
// [object Array] = string representation on Array
// rep prolly means , toString is originally in Object fn constructor but we have use it on Array / Object respectively(not sure though)
