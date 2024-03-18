/**
 * when invoked a fn normally or through IIFE
 * this refers to global i.e window in browser and global in node js runtime - editor with normal mode
 * and undefined in strict mode
 */

function example() {
  'use strict';
  // in strict mode this refers to undefined
  console.log(this === undefined);
}
example();

/**
 * setTimeout and setInterval invoke functions as normal funs...thats why this inside them
 * is window/global object
 */
const example1 = {
  blog: 'learnersbucket',
  displayBlog: function () {
    // this refers to the window object
    console.log(this === window);
    console.log(this.blog);
  },
};
/**
 * below code is similar to;
 * let fn = example.displayBlog;
 * setTimeout(fn,200)
 */
setTimeout(()=>example.displayBlog, 200);
    // true
    // undefined


    /**
     * Normally all let , const and var doesnt seem to go to this...only plain declaration
     * like x = 10 seem to go , but still not accessible by this...access directly no matter the scope.
     */
let obj = {
    id:1,
    name:'hpk',
    fn: ()=>{
        x=10;
        var y = 11;
        console.log(this.id,'id');//undefined
        console.log(obj.id,'id');//1
    }
}
obj.fn();

console.log(x,y,'plain'); // x is 10 but y is reference error

/**
 * not much with resting other thn when cloning
 */
const myFunction = function(arr) {
    console.log(arr,'bind');
  };
  
  const boundFunction = myFunction.bind(null,[1,2,3]);
  
  boundFunction(); // Output: [1, 2, 3, 4]

  //call
  const myFunction1 = function(a, b, c) {
    console.log(a, b, c);
  };
  
  myFunction1.call(null, 1, 2, 3);

  /**
   * no need to return a fn from fn for bind , onlky need to do it for polyfills
   * it returns a fn that can be called with params
   */
  const exampleObj = {
    name: 'prashant',
    };
    function example(test,blog) {
    console.log(`${this.name} runs ${blog} - ${test}`);
    };
    const bounded = example.bind(exampleObj,'test');
    bounded('learnersbucket');
    // "Prashant runs learnersbucket"
    bounded('MDN');
    // "Prashant runs MDN"


  
  