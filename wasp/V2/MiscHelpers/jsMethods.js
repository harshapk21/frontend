//slice works well even if upper limit exceeds array size
let x = [1,2,3,4,5];

console.log(x.slice(0,10)); // prints full array

tr.slice(1,-1) // abcd -> bc i.e gives str by removing 1st & last index

NaN === NaN (false)

let y = {} instanceof Object;
// returns "Uncaught SyntaxError: Unexpected token 'instanceof'" bcos js consider {} as block of code instead of an object , wrap it like ({})
// similarly 10.valueOf() is syntax error but (10).valueOf() is right

// you can't change value of primitive. when you re-assign a variable with primitive ,  you are just creating a new primitive & storing the adress reference to that variable.
let str = 'abc';
str[0] = d // not possible

// Prototype properties are shared across all the instances , there is no instance specific prootype data that you can set direclty 
// You can access prototype properties through instances only , you cannot access them using function constructor name , becuase when you add these prototype properties 
// they are added to prototype object of function constructor.
// That makes them non-static properties and hence cannot be accessed by Array,Object etc directly , you need an instance to access the shared properties

// [object Array] = string representation on Array ,