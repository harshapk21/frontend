

/**
 * property added to prototype of an element is something that is made available to child but not the element itself
 * ex:
 * 1) Adding property to Function.prototype , that property is available to all childs like function x() {}....
 * 2) Adding property to fn x. i.e x.protottype , that is available to all child instances of fn x
 * 3) In functions case __proto__ of child instance is equal to prototype of parent function constructor
 * 4) .prototype is only available on function constructors like Array , Function etc or fn x from which new x(); from whom instnaces 
 * are created. For others like instances or primitives its just undefined.
 * 5) __proto__ is something that forms a protypal inheritance or link between parent and child
 * 6) __proto__ of newly created object from Object.create(parent) points to parent forming link...
 * 7) you can go __proto__.__proto__ till original object as its a inheritence link but getPrototypeOf is only at that level.
 * 8) getPrototypeOf(__proto__) and prototype are not same at all
 * 9) Instances created from function constructors have their __proto__ equal to function constructor's prototype and 
 * all following creations have entire 
 * 10) If a property is not available in an item , the way it checks its inheritence for that missing property is not by 
 * checking in prototype object , but by checking in __proto__
 * 11) All function constructors __proto__ matches with the Original function constructors prototype property ,  further 
 * proofing all above points are right.
 * 12) Function constructors never give its entirity to child/instance's __proto__ but only its prototype...thats why an instance 
 * can inherit all prototype properties to it as __proto__ which helps for inherital property checking
 * 
 */

/**
 * Below sample has proof of all above points  */

function sum(...args){
	let results = [...args];
  function curry(...args2){
  	results = [...results,...args2];
    return curry;
  }
  curry.value = ()=>{	
  	return results.reduce((prev,curr)=>prev+curr)
	}
  curry.prototype.valueOf = curry.value;
  
  return curry;
}

let x = sum(1)(2)(3,4,5) + 1;

function test(){
	id:1;
}
test.prototype.valueOf = ()=>1;
test.prototype.toString = ()=>'1';
console.log(test + 1);
let obj = new test();
console.log(obj + 1);
let xy = {id:1};
let xy1 = Object.create(xy);
xy1.name='test';
let xy2 = Object.create(xy1);

console.log(xy2.__proto__ == xy1);
console.log(test.prototype == obj.__proto__);
console.log(test.__proto__ == Function.prototype,'dark');
function test(){
	id:1;
}
test.__proto__.valueOf = ()=>1;
test.__proto__.toString = ()=>'1';

console.log(test + 1);



