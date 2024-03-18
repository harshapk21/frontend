
/**
 *  acc is the return value of previous function
 */
// let x = [1, 2, 3, 4].reduce((acc, curr) => {
//   let x = acc + curr;
//   return x;
// }, 0);
// console.log(x);

// /**
//  * Type co-ersion rules are very important
//  */
// let xy = ['1', '2', '3', '4'].reduce((acc, curr) => {
//     let x = acc + curr;
//     return x;
//   },{});
// console.log(xy);

/**
 * Usually 
 * sum we do with reduce is aggregation
 * we can segregate as well using Object.groupBy polyfill , made out of reduce
 * run in sequence - reduce doesnt inheritly support async/await
 * 
 */

// const upperCase = (str) => {
//   return str.toUpperCase();
// };
// const reverse = (str) => {
//   return str.split('').reverse().join('');
// };
// const append = (str) => {
//   return 'Hello ' + str;
// };
// // array of functions to be piped
// const arr = [upperCase, reverse, append];
// // initial value
// const initialValue = 'learnersbucket';
 
/**
 *   question: methods like promise.all , promise.allSettled etc are sync or async or parallel in nature ??
 */
const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};



/**
 * Cant trust inbuilt functions with async awwait , unless you add 2 layer protection i.e remove callback and place it somewhere as async and also wrap async to OF
 * return p or return p.then() , will only return a promise
 * You can prove of sync or async only using logs insid then and catch
 * always remembee the priority of execution is sync code , promises(micro tasks) , macro like settimeout
 * you cant make syncrnous fn wait for async taks...make them also as async on the whole like last example
 */

    // create an array of tasks
    const promises = [
        asyncTask(3),
        asyncTask(1),
        asyncTask(7),
        asyncTask(2),
        asyncTask(5),
    ];

    // Execute promises sequentially
    // promises.reduce((prev,curr)=>{
    //     console.log('c');
    //     return prev.then((res)=>{
    //         return curr.then((res)=>{
    //             console.log(res);
    //         })
    //     })
    // },Promise.resolve())

//     const runTasksSequentially = async (tasks) => {
//       const results = [];
//       for (const task of tasks) {
//         const result = await task;
//         console.log(result);
//       }
//       return results;
//     };
//     runTasksSequentially(promises);

// //last example

// (async () => {
//     // create an array of tasks
//     const promises = [
//         asyncTask(3),
//         asyncTask(1),
//         asyncTask(7),
//         asyncTask(2),
//         asyncTask(5),
//     ];

//     // Execute promises sequentially and accumulate results
//     const result = await promises.reduce(async (prev, curr) => {
//         const accumulator = await prev;
//         const value = await curr;
//         accumulator.push(value);
//         return accumulator;
//     }, Promise.resolve([]));

//     console.log(result);
// })();

// let recursiveSequence = function(promises) {

// }
// recursiveSequence(promises)

/**
 * 
 * p.then() return promise of then i.e then returns a promise but its not p 
 */
const asyncSeriesExecuter = function (promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};
asyncSeriesExecuter(promises);


