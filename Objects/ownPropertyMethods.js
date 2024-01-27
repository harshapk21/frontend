let obj = {
    id:1,
}

Object.defineProperty(obj,'name',{
    value:'hpk',
    enumerable:false
})
console.log(obj.hasOwnProperty('name'),Object.getOwnPropertyNames(obj));

let obj2 = Object.create(obj);
obj2.mobile = 123;

console.log(obj2.hasOwnProperty('name'),Object.getOwnPropertyNames(obj2));

/**
 * Observation: all properties added to it directly or present in an object during initialisation are considered own
 * properties irrespective of enumerability. All inherited properties(Object.create , prototype properties) are never 
 * considered own properties irrespective of their enumerability
 * 
 */