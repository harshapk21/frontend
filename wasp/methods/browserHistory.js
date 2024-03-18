/**
 * using this for declaration vs normal declaration
 */
function BrowserHistory() {
    this.history = [];
    this.current = 0;
}
const bh = new BrowserHistory();
bh.history.push(1);
bh.history.push(2);
const bh2 = new BrowserHistory();
bh2.history.push(10);
bh2.history.push(12);

// console.log(bh.history,bh2.history,'stack');

//Can we make history a private property ??? and make it accessible only by methods of class

// class BrowserHistoryClass {
// /**
//  *  No point of using a constructor if its a static property.
//  */
//     constructor() {
//     //     history = []; 
//     //     current = 0;
//     }
//     history = []; 
//     current = 0;
// }
// BrowserHistoryClass.history.push(1); /**
//  history = []; 
// SyntaxError: Unexpected token =
//  */

class BrowserHistoryClassA {
  /**
   *  No point of using a constructor if its a static property.
   */
  static history = [];
}
BrowserHistoryClassA.history.push(1); //This works
const obj = new BrowserHistoryClassA();
console.log(BrowserHistoryClassA.history, 'klm'); // [1]
console.log(obj.history, 'klm-obj'); // undefined

//Take Away 
/**
 * 
 * You Prefer to go traditional way during assignments...
 * Variables either have to be declared inside constructor like this.id = id etc... and they r accessible to objs or
 * they have to be explicitly named static , like static count = 0 and can be used only by class and not by obj...
 * 
 * on the other hand , functions by default are object specific , 
 * ex: add(){} is not a static fn and belongs to that obj.
 * but static add(){} is not available to objs but only constructor;
 * 
 * Incase of functions constructors also , we can do both static and normal
 * all properties and fns need to be declared with this.property , this.method
 * 
 * Refer below for static in function constructors
 */

function BrowserHistoryClass() {
    // Static property
    BrowserHistoryClass.history = [];

    // Static method
    BrowserHistoryClass.getCurrent = function() {
        return BrowserHistoryClass.history[BrowserHistoryClass.history.length - 1];
    };
}

// Example usage
BrowserHistoryClass(); // Initialize static property and method

console.log(BrowserHistoryClass.history); // Output: []
console.log(BrowserHistoryClass.getCurrent()); // Output: undefined (as the history is empty)
