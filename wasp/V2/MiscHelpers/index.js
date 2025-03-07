//slice works well even if upper limit exceeds array size
let x = [1, 2, 3, 4, 5];

console.log(x.slice(0, 10)); // prints full array

tr.slice(1, -1); // abcd -> bc i.e gives str by removing 1st & last index
// can do slice on array & strings

NaN === NaN(false);

let y = {} instanceof Object;
// returns "Uncaught SyntaxError: Unexpected token 'instanceof'" bcos js consider {} as block of code instead of an object , wrap it like ({})
// similarly 10.valueOf() is syntax error but (10).valueOf() is right

// you can't change value of primitive. when you re-assign a variable with primitive ,  you are just creating a new primitive & storing the adress reference to that variable.
let str = "abc";
str[0] = d; // not possible

// you can add properties to array instance also just like you can do for fn & objs , helpful in factory pattern version of event listeners on array. observe factory SS

//EOF

/**
 * 1) Map & Set are available in JS as well. JS Map is not similar to native JS Obj , in JS Map you can have any datatype as keys & values. The same is with sets as well. whereas native object take only string version of data types as keys.
 * 2) you have to use mp.get, mp.set,has,delete methods with map & with set you can use set.add(),has,clear,delete.
 *  you cannot directly assign/read a value with maps & sets like you do with native objects.
 * 3) since map & set are iterables , you can use for...of & spread by default , forEach is also available for both((key,value)=>{},(key)=>key)
 * ex: for(let [key,value] of map)/for(let value of set) works fine
 * You can iterate over all Map & Set values usinbg the above logics
 * 4) we also have weakMap(keys should be objects) & weakSet(objects) but these work exclusively with objects/instances & these are weak referenced i.e moment nothing is having a reference to these objects , they're garbage collected &
 * you cannot iterate over them all at once , get & set properties is same like maps & sets. Since cleanup happens automatically , these are bit memory efficient
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
Spreading always gives out individual elements , its upto you , how you wrap them or use them , in this case we wrapped to be used as Array[].
*/

let x1 = { id: 1 };
let map1 = new Map([
  ["a", x1],
  ["b", x1],
]);

let newMap = new Map([...map1]); // spread wrapped with array gives array of arrays which is the same format as initialisation

console.log(map1.get("a") === newMap.get("a")); // true bcos of shallow copy

/**
 * spreading does shallow copy , that means only primitives are copied but all the references(objects & Arrays)(except 0th level i.e the base reference itself) are not copied to new object.
 * nested objects/arrays are copied by reference. Any nested references from 1st level are not copied. If new obj/array makes chnages to that reference , it is reflected to old object also.
 * To prevent this , you need to do deep copy either by our own polyfill / JSON.parse(JSON.stringify()) etc
 * 
 * Similar is case with deep merge & shallow merge , spreading does shallow merge.
 * 
 * code & examples for the same(above 2 cases) available in sums folder.
 * 
 * Also while doing sums , consider if you have to take a copy of original object/array
 * Objects - spreading({...s1,...s2,...s3}) & Object.assign(target,s1,s2 etc) - both do shallow copy/merge
 * Arrays - spread & [].concat() also does shallow copy/merge
 * if target is empty then copy else merge
 */

// EOF

let xa = [11,12,13];
console.log({...xa}); //{0:11,1:12,2:13}
// Arrays can be wrapped inside object bcos they have enumerable properties as 0,1,2 which are indices , you can also do for...in & Object.keys on Arrays as long as they have enumerable properties

// console.log([...x]); error: objects can't be spread bcos they're not iterables

// a collects spreaded properties , a will be 1 while arguments represents array-like object i.e complete passed params
function test(a){
	console.log(a,{...arguments},[...arguments]); // All work as expected , arguments have enumerable properties & hence work with // {...} , they also extend symbol.iterator & hence [...]
  
  const iterator = arguments[Symbol.iterator]();
  console.log(iterator.next().value); // 11 (first argument)
  console.log(iterator.next().value); // 12 (second argument)
}

// spread
test(...xa);

function rest(...rested){
console.log(rested,arguments); // rested will be Array of params while arguments rep usually
}
rest(1,2,3);

const mp = new Map();
mp.set('a',1);
console.log({...mp}); // maps can be spread bcos they're iterables but they do not 
// have enumerable properties , so output will be empty object.

// Object.entries - takes Array of Arrays as input
// It can take [...map] also bcos , map iterator returns the format as [key,value] , so spreading map & wrapping with 
// Array gives output as [[key,value]];

Object.entries([...mp]) // {a:1};
// EOF

// [object Object] is the string representation of object
// [object Array] = string representation on Array
// rep prolly means , toString is originally in Object fn constructor but we have use it on Array / Object respectively(not sure though)
