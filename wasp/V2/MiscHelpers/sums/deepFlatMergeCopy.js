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
  for (const key in obj) {
    if (obj[key] instanceof Array) {
      let iresult = obj[key].forEach(
        (value, index) => (result[prefix + obj[key] + "." + index] = value)
      );
      result = { ...result, ...iresult };
    } else if (typeof obj[key] === "object") {
      let iobj = deepFlat(obj[key], prefix + obj[key] + ".");
      result = { ...result, ...iobj };
    } else {
      result[prefix + key] = obj[key];
    }
  }
  return result;
}

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

// Deep Copy also follows similar pattern
// Deep copy function
function deepCopy(obj) {
  // Check if the value is a primitive (not an object or array)
  if (obj === null || typeof obj !== "object") {
    return obj; // Return the primitive value as it is
  }

  // Handle arrays separately (use Array.isArray)
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]); // Recursively copy array elements
    }
    return arrCopy;
  }

  // Handle objects (use a regular object copy)
  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key]); // Recursively copy object properties
    }
  }
  return objCopy;
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
