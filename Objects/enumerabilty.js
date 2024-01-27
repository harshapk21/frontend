/**
 * Only enumerable properties of an Object are available for iteration through for...in and Object.keys() as well.
 * All inherited properties are by default enumerable except properties inherited through 
 * function constructor prototype attribute.
 * 
 * Thats why we need see Prototype methods while we do for...in or Object.Keys() because they're non-enumerable
 */

let obj = {
    id:1,
    name:'hpk'
}

for(let ele in obj)
console.log(ele);

let obj2 = Object.create(obj); // creating an object through create inherits properties
obj2.mobile = 123;
Object.defineProperties(obj2,{
    'adress':{
        value:'bglr',
        enumerable:false
    },
    'random':{
        value:'random',
        enumerable:true
    }
})

for(let ele in obj2)
console.log(ele);

