let obj1 = {
  name: "test1",
  age: 30,
  contact: "test1",
};

let obj2 = {
  name: "test1",
  age: 30,
  contact: {
    mobile: "123",
    adress: "xyz",
  },
};

function isEqual(p1, p2) {
  if (Object.keys(p1).length !== Object.keys(p2).length) return false;

  for (const key in p1) {
    if (typeof p1[key] !== "object") {
      if (p1[key] !== p2[key]) return false;
    } else {
      return isEqual(p1[key], p2[key]);
    }
  }

  return true;
}

console.log(isEqual(obj1, obj2));
