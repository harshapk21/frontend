/**
 * 
 * what is enumerability , each property of an object has specific properties like value, writable, enumerable etc
 * Object.defineProperty
 * 
 * Only enumerable properties of an Object are available for iteration through for...in(Arrays as well), Object.keys() & JSON.stringify(). 
 * But if you use Object.getOwnPropertyNames() -> shows all own properties of object irrespective of enumerability.
 * 
 * When you're looping over an object (especially with for...in), you don’t just get the object’s own properties — you also get its prototype's enumerable properties. thats why the check in loops i.e Object.hasOwnProperty(obj,key)
 * we dont see Prototype methods like hasOwnProperty , toString , valueOf etc while we do for...in or Object.Keys() because they're non-enumerable.
 * 
 * for...in gives inherited , enumerable properties
 * Object.keys & entries gives only own enumerable properties
 * Object.getOwnPropertyNames gives all own properties
 * 
 * if (Object.prototype.hasOwnProperty.call(obj, key))
✅ Works even if obj has no prototype (e.g. Object.create(null))
 */

/**
 * 
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

