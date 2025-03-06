// const weakMap = new WeakMap();

// let x = {id: 1};
// let y = x;

// weakMap.set(x,10);
// x = null;
// console.log(weakMap.get(y));

const weakMap = new WeakMap();
const mapForDebugging = new Map();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, 'Value 1');
weakMap.set(obj2, 'Value 2');

// For debugging purposes, you can also store the data in a Map (not recommended for production)
mapForDebugging.set(obj1, weakMap.get(obj1));
mapForDebugging.set(obj2, weakMap.get(obj2));

console.log('WeakMap Data via Debug Map:');
mapForDebugging.forEach((value, key) => {
  console.log(key, value); // Displays the data
});

obj1 = null;
obj2 = null;
mapForDebugging.forEach((value, key) => {
    console.log(key, value); // Displays the data
  });


  const map = new Map();
map.set('a',10);

map.forEach((key,value,arr)=>console.log(key,value,arr))