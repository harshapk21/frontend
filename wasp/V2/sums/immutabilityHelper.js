// The solution in LB is better as it avoids 2 time traversal of data & pattern.
// i've tried my own , it works but 1st draft is not clean code.
const KEYWORDS = ["_replace_", "_push_", "_merge_"];

// const state = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: 2,
// };
// const newState = update(state, { a: { b: { c: { _replace_: 3 } } } });
// console.log(newState);

// const state2 = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: 2,
// };
// const newState2 = update(state2, { a: { b: { _merge_: { d: "done" } } } });
// console.log(newState2);

// const state3 = [1,2,3];
// const newState3 = update(state3, {_push_: [4,5]});
// console.log(newState3);

// const state4 = [1, 2, 3, 4];
// const newState4 = update(state4, { 0: { _replace_: 5 } });
// console.log(newState4);

// function immutabilityHelper(obj, path = "") {
//   const key = Object.keys(obj)?.[0];
//   if (KEYWORDS.includes(key)) {
//     return {
//       keyword: key,
//       value: obj[key],
//       path: path.slice(0, -1), // removing the last dot in a simple way
//     };
//   }
//   return immutabilityHelper(obj[key], path + key + ".");
// }

// function update(data, obj) {
//   const { keyword, value, path } = immutabilityHelper(obj);
//   if (Array.isArray(data)) {
//     switch (keyword) {
//       case "_push_": {
//         return [...data, ...value];
//       }
//       case "_replace_": {
//         data[path] = value;
//         return data;
//       }
//     }
//   } else {
//     path.split(".").reduce((acc, cur, index, arr) => {
//       if (index === arr.length - 1) {
//         if (keyword === "_merge_") {
//           acc[cur] = { ...acc[cur], ...value };
//         }
//         if (keyword === "_replace_") {
//           acc[cur] = value;
//         }
//       }
//       return acc[cur];
//     }, data);
//   }
//   return data;
// }

function deepFreeze(obj){
    for(let key in obj){
        obj[key] = typeof obj[key] === 'object' ? deepFreeze(obj[key]) : obj[key];
    }
    return deepFreeze(obj);
}

const obj = {
    id: 1,
  name: 'test',
  child: {
  id: 2,
  name: 'test child',
  child: {
  id: 3,
  name: 'test child child'
  }
  }
}

deepFreeze(obj);
obj.child.child.id = 4;

console.log()
