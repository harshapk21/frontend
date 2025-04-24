let objx = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

/**
 * data(result here below) added to objects/array etc within a function stack/level in recursion are preserved between recursive calls respectively.
 * This is a known concept but keep in mind as it helps solve many problems
 */

function deepFlat(obj, prefix = "") {
  let result = {};

/*   if (obj === null || typeof obj !== "object") {
    return obj; // gracefully handle non-object input(null/primitive/undefined) at top level and also inside object/array
  } */
	
if (obj === null || typeof obj !== "object") {
	     if (prefix) result[prefix] = obj;
	     return result; // graceful, consistent return type
	   }
	
  for (const key in obj) {
    const keyValue = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

/* 		if(keyValue === null || typeof keyValue !== "object")
		result[newKey] = deepFlat(keyValue, newKey);
		else */
		Object.assign(result, deepFlat(keyValue, newKey))
  }
  return result;
}

function deepFlat2(obj, prefix = "") {
  let result = {};

  if (obj === null || typeof obj !== "object") {
    return result; // gracefully handle non-object input(null/primitive/undefined) at top level and also inside object/array
  }
  for (const key in obj) {
    const keyValue = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (keyValue instanceof Array) {
      keyValue.forEach((value, index) => {
        let arrayKey = `${newKey}.${index}`;
        if (typeof value !== "object" && value !== null)
          Object.assign(result, deepFlat(value, arrayKey));
        else result[arrayKey] = value;
      });
    } else if (typeof keyValue === "object" && value !== null) {
      Object.assign(result, deepFlat(keyValue, newKey));
    } else {
      result[newKey] = keyValue;
    }
  }
  return result;
}

/**
 * Object.assign & Spreading -> both does shallow copy
 * Object.assign mutates object , to prevent can use Object.assign({},a,b) while spreading doesn't mutate & creates a new object everytime which can be expensive in loops & recursive calls
 * Think & wisely make a choice
 */

console.log(deepFlat(objx));

// Deep Merge
// Again , above mentioned concept is very important here as well. even though below solution we didn't use but it's imp
// Original Objects
const obj1 = { a: 1, b: { c: 2, e: 4 }, f: 6 };
const obj2 = { b: { d: 3 }, f: 7, g: 8 };

// Deep Merge Function (recursive)
function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        typeof target[key] === "object" &&
        target[key] !== null
      ) {
        target[key] = deepMerge(target[key], source[key]); // Recursively merge nested objects
      } else {
        target[key] = source[key]; // Copy primitive values
      }
    }
  }
  return target;
}

// Perform deep merge
const mergedObj = deepMerge({ ...obj1 }, obj2); // Shallow copy first to avoid mutating the original object
console.log("Deep Merge Result:", mergedObj);
// Expected output: { a: 1, b: { c: 2, e: 4, d: 3 }, f: 7, g: 8 }
console.log("Original obj1:", obj1); // { a: 1, b: { c: 2, e: 4 }, f: 6 }
console.log("Original obj2:", obj2); // { b: { d: 3 }, f: 7, g: 8 }

// Deep copy polyfill
/**
 * typeof function x(){} === "function"
 * we cannot clone a function , we will just share references , closures and all are also shared
 */
function deepCopy(obj, seen = new WeakMap()) {
  // Check if the value is a primitive (not an object or array)
  if (obj === null || typeof obj !== "object") {
    return obj; // Return the primitive value as it is
  }

  // weakMap helps with avoiding circular references
  if (seen.has(obj)) return seen.get(obj);
  const result = Array.isArray(obj) ? [] : {};
  seen.set(obj, result);

  for (const key in obj) {
    if(Object.hasOwn(obj,key))
    result[key] = deepCopy(obj[key]);
  }
  return result;
}

// Test with an example object that includes arrays and nested objects
const originalObj = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [4, 5],
  f: { g: { h: 6 } },
};

// Perform a deep copy
const copiedObj = deepCopy(originalObj);

// Modify the copied object
copiedObj.b.c = 100;
copiedObj.e[0] = 10;
copiedObj.f.g.h = 200;

console.log("Original Object:", originalObj); // { a: 1, b: { c: 2, d: 3 }, e: [4, 5], f: { g: { h: 6 } } }
console.log("Copied Object:", copiedObj); // { a: 1, b: { c: 100, d: 3 }, e: [10, 5], f: { g: { h: 200 } } }

// Deep Check - This sum proves the importance of knowing basics , here they used Object.keys on Arrays & Objects and made the sum work generically
// for both Arrays & Objects. Arrays have enumerable properties i.e indices , so they can be used with Object.keys & for...in as well.

// Deep Check is checking beyond references , all that matters is if the content is matching
// Shallow check is just making sure references are same that too upto 1 level

const customTypeOf = (input) => {
  if (input === null) return "null";
  if (Array.isArray(input)) return "array";
  return typeof input;
};

const deepEqual = (a, b) => {
  const typeA = customTypeOf(a);
  const typeB = customTypeOf(b);

  if (typeA !== typeB) return false;

  // Primitive types or null
  if (typeA !== "object" && typeA !== "array") {
    return a === b;
  }

  // Arrays or Objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    // Must exist in both
    if (!Object.hasOwn(b, key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};
