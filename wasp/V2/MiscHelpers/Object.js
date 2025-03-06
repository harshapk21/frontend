// typeof & instanceOf

// typeof only returns primitive types & object as an output
// instanceof works well with refernece types & object like [],{}, instance of Number , String function constructors

// even for instances of other function constructors(Number, String etc) , typeof new Number(10) gives object
// where as [] instanceof Array returns true , null instanecof Object returns false
// [],({}),new Number(10), new String() instanceof Object // gives true

// doing new Number(10), new Object(10), Object(10) returns instance of same fn const i.e Number
// Object constructor wraps all primitive types into resp function constructors
// output of above will be Number {10} in browser & [Number: 42] in node.js env
// You can see the value directly , need to use .valueOf()

// while new Object(),Object() does same thing but new Number() & Number() is not same things.
// Number() converts string,Number Obj to a primitive number

// methods like valueOf,toString,replaceAll work with numbers(ex: (42).valueOf() works) & string even though they're primitives is because
// JS internally converts them(boxes/auto-boxes) to Number & converts back to primitives again after the method action is performed
// Number proto inherits all methods from Object fn Const bcos proto is an object. valueOf,toString are originally defined on Object fn & the chain stops here at Obj fn constructor.

// You can use below code to uniquely check an object
function isPlainObject(value) {
  // instanceof Object returns false for null
  // [] instanceof Object bcomes true so we also have !Array.isArray check
  return value instanceof Object && !Array.isArray(value);
}

const List = function (val) {
  this.next = null;
  this.val = val;
};
const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);
item1.next = item2;
item2.next = item3;
item3.next = item1;
console.log(item1);
