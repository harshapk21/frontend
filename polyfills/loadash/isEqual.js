function compare(a, b) {
  if (typeof a !== typeof b) {
    return false;
  } else {
    /**
     * Checking null , undefined and primitives
     */
    if (a == null || typeof a != 'object') {
      if (a === b) return true;
      else return false;
    } else if (typeof a == 'object') {
      let keys1 = Object.keys(a);
      let keys2 = Object.keys(b);
      if (keys1.length != keys2.length) return false;
      else {
        for (let i = 0; i < keys1.length; i++) {
          result = compare(a[keys1[i]], b[keys2[i]]);
          if (!result) return false;
        }
        return true;
      }
    } else {
      //checking for array case.

      let len1 = a.length;
      let len2 = b.length;
      if (len1 != len2) return false;
      else {
        for (let i = len1 - 2; i < len1; i++) {
          result = compare(a[i], b[i]);
          if (!result) return false;
        }
        return true;
      }
    }
  }
}
let a = {
  object: [
    1,
    2,
    3,
    4,
    5,
    {
      inside: [1, 2, 3, 4, 5],
    },
    '23234',
    '23423',
    null,
  ],
  string: 'stringe',
  [123.67]: [[], [], [undefined]],
};
let b = {
  object: [
    1,
    2,
    3,
    4,
    5,
    {
      inside: [1, 2, 3, 4, 5],
    },
    '23234',
    '23423',
    null,
  ],
  string: 'stringe',
  [123.67]: [[], [], [undefined]],
};
console.log(compare(a, b));
