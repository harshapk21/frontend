// In JS , function is also an object , so you can have , set & read properties from it like you do with objects

function x(){
}
x.id = 10;
x.getId = ()=>x.id; 
x.getId = function(){return this.id}; // this here is function
// Both of the above are valid
//console.log(x.id,x.getId()); // 20 20

let xi = new x();
// console.log(xi.id,xi.getId()); // error - you cannot access non instance properties by instance directly
//console.log(xi.constructor.id,xi.constructor.getId()) // 10 10 , you need to use instance.constructor to get static values


function y(){
    let id = 20;
}
// you cannot access id directly now , it is limited to function & you need to use getter fn to get its value

// Each function can have a prototype property & you can use it to have some helper function across instances of custom function, it is memorry efficient

// function customFn(animal,sound){
//     this.animal = animal;
//     this.sound = sound;
//     let x = 10;
// }
// customFn.prototype.genericMethod = function (){
//     return `${this.constructor.x} says ${this.animal} - ${this.sound}`;
// }

// let dog = new customFn('dog','bark')
// console.log(dog.genericMethod(),new customFn('cat','meow').genericMethod());
// // In above case , nothing will work to render x property


function customFn(animal,sound){
    let x = 10;
    this.animal = animal;
    this.sound = sound;
    this.genericMethod = function (){
        return `${x} says ${this.animal} - ${this.sound}`;
    }
}
console.log(new customFn('cat','meow').genericMethod()); 

/**
 * In above case , if i don't add this before generic Method , it won't work.
 * And also , instanece.constructor is working only when i am attching properties directly to function
 * like customFn.x = 10, customFn.geenricMethod etc
 * Also if i attach something ton protorype , that is direclt being accessible to instance
 */

/**
 * Main Rules:
 * 1) as said before , functions are objects in JS , but defining var/let/const inside function doesn't make them function properties , they are
 *    only available to be used within the function. You can't access them using function name & they're not static properties as well.
 * 2) To have function properties , attach them to function either in function body or outside the function like customFn.x , customFn.methods.
 *    These become static properties of a function by default & can be accessed by using function name.
 * 3) Since these are static , they are shared between/across instances of a function. if one instanceThese function/static properties are not 
 *    directly accessible by instances. instance can access them using instance.constructor.static_property or just className.property , both can be used anywhere
 * 4) To make instance specific properties , add all properties/methods in function using this keyword , else they won't be accessible for 
 *     instance. 
 * 5) You can actually change(inc/dec) static properties using instances also both inside and outside fn body using methods told above.
 * 6) A static method(method attached to fn itself & not declared using this) cannot access this.name etc inside it. Instance can still call this method using 
 *    constructor.
 * 7) You cannot call instance specifc methods/properties using fn name but can access function specific properties using instances.
 * 8) These are the main rules w.r.t to functions , didn't knew them before at all. Below example will practically cover all the rules.
 *
 * Applied above rules and found something
 * [1,2,3].constructor.isArray([1,2,3]
 * Array.isArray([1,2,3])
 * Both work as expected
 */

function customFn(animal, sound) {
    // Static-like `x` (shared across instances but reinitialized if the constructor is redefined)
    if (!customFn.x) customFn.x = 10; // ❌ Attached to the function (violates your requirement)
    this.animal = animal;
    this.sound = sound;
    this.genericMethodInstance = function () {
        customFn.x++;
      return `${customFn.x} says ${this.animal} - ${this.sound}`;
    };
       customFn.genericMethod = function () {
        customFn.x++;
      return `${customFn.x} says ${this.animal} - ${this.sound}`;
    };
  }
  
  const dog = new customFn('dog','bow');
  const cat = new customFn('cat','meow');
  //dog.constructor.x++; // works as expected
  //console.log(dog.genericMethod()); // doesn;t work
  console.log(dog.constructor.genericMethod()); // works but prints undefined whever it encounter this inside method becuase the method is a non-instance and static method
  console.log(dog.genericMethodInstance()); // works clean
  console.log(customFn.genericMethod()); // works but undefined when this is used , same reason as above
  //console.log(customFn.genericMethodInstance()); // doesn't work

