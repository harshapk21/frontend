/**
 * Everything in javascript is an object. literally everything including Array , Object , Function 
 * even primitives like number and string are wrapped with Number Object when 
 * required(ex: accessing methods like toString etc)
 * 
 * each data type has a parent function constructor
 * 
 * In JS , you can create an object from a function also.
 * If an object is created with new keyword and function name , the function is called as function constructor
 * and the object created is an instance of that function.
 * 
 * 
 * ex:  [] is instance/object of parent function constructor i.e Array
 *      {} is instance of parent function constructor i.e Object
 *      function x() is instance of parent function constructor parent i.e Function
 *  
 * whenever u write/declare any datatype , u are just creating an instance or object of its parent datatype
 * 
 * ex: let a = [1,2,3]
 * here a is an instance/object of Array
 */


//function constructor , attaching name and age properties to function using this keyword
function sample(name,age) {
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
}

let obj = new sample('hpk',20);
console.log(obj.getName());

//prototype - keyword property of fn const(maybe static property)
//as i said earlier we have function constructors for all data types
function Array1(){
/**
 *     there will be some properties(maybe static in nature) outside of prototype which can also be used , but not by instance.
 *      they will mostly be used as Array.propertyName
 *      ex: Array.isArray(somevariable)
 *      above method returns true if somevariable is an array else false
 */
    this.prototype = {
        map:()=>{},
        filter:()=>{},
        reduce:()=>{}
    }
}

/**
 * 
whenever u write '[]' , an instance of Array is created
all properties present in prototype of fn constructor(Array in this case) are available 
for use to all of its instances
that's how map and all methods are avialble for array instance to use...
now Read about prototypal inheritance
 */
//console.log([1,2,3].map());




Array.prototype.myMap = function(cb){
	let result = [];
  console.log(x,'this');
  for(i=0;i<this.length;i++)
  result.push(cb(this[i]));
  return result;
}

let x = [1,2,3,4];
console.log(x.myMap((digit)=>digit*2));
// console.log(Array.isArray({}));
// console.log(typeof []);
// console.log(typeof {});

let number = 12;
//Number - parent constructor of number
console.log(number.toString);