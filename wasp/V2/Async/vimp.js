/**
 * API Rate limits , control parallel execution with concurrency limit
 * Do only n async activities at a time
 * All the above qn's have single ans which is below
 */
function async(time = 1) {
  return new Promise((res, rej) => setTimeout(() => res(time), time * 1000));
}

function rasync(time = 1) {
  return new Promise((res, rej) => setTimeout(rej, time * 1000));
}

let promises = Array.from({ length: 6 }, (_, index) => index + 1);
/**
 * batch 1 - 2 (1,2)
 * batch 2 - 4 (3,4)
 * batch 3 - 6 (5,6)
 */
const BATCH_SIZE = 2;
let start = 0,
  end = BATCH_SIZE;

function processBatch(start, end) {
  return Promise.all(promises.slice(start, end).map((delay) => async(delay)));
}

// async function hitAPIS(start, end) {
//   try {
//     await processBatch(start, end);
//     console.log(`Batch ${start} done`);
//     setTimeout(() => {
//       if (end < promises.length) hitAPIS(end, end + BATCH_SIZE);
//     },2000);
//   } catch {
//     console.log(`Something wrong at Batch ${start}. Terminating`);
//   }
// }

// hitAPIS(start, end);

/**
 * I went with recursive approach because i don't think loops will wait for previous loops resolution , they just run everything
 * I want to wait for a loop to resolve before starting new one...
 *
 * Remember , If you want to execute something in batches or cycles , if no promise is involved you can go with tradiotinal loops
 * But incase of a loop involving promsie , you can use await & recursion to control next loop invocation onlky when prev loop is resolved
 * else you can also go for controlled loop which i'm yet to learn :) , that's why i wwnt with recursion + await combo here
 */

// Turns out using await in loop body does stop iteration incase of for & also while loop

//* point to remmember , while doing bigger inc/dec , use i+=2 in JS

// async function hitAPIS() {
//   try {
//     for (let i = 0; i < promises.length; i += BATCH_SIZE) {
//       console.log(i, "i");
//       const result = await processBatch(i, i + BATCH_SIZE);
//       console.log(result);
//     }
//   } catch (e) {
//     console.log("caught");
//   }
// }
// hitAPIS();

/**
 * A logical thing with reduce is if you are awaiting for an async func for each iterations , just await acc bcos async function returns a promise even if you return a value.
 * It will make even more sense , if you explore that with reduce polyfill
 * V1 has already rightly said , async with reduce needs lot more async wrappers bcos even final result logging needs await & awiat needs async.
 * */
let a = [1, 2, 3];
// function delay(num) {
// 	return new Promise((res,rej)=>setTimeout(()=>res(num),num*1000));
// }

// a.reduce(async (acc,curr)=>{
// 	console.log(acc); // It logged promise objects
// 	const res =	await	delay(curr);
//   return res;
// },0)

// a.reduce(async (acc,curr)=>{
// 	console.log(await acc); // It logged actual retunred values from previous iterations & hence it's imp to do await acc in async reducers
// 	const res =	await	delay(curr);
//   return res;
// },0)

/**
 * VIMP:
 * Only async/await has the power to halt the code execution in JS.
 * When in loops , async / await awaits the completion of current iteration before starting with next itr.
 * if you use promise.then() in loops , loop iteration will be complete irrespective of promise resolution, no awaiting of iterations.
 *
 * Also , reduce doesn't await for curr iteration completion even if you have used async/await
 * It's how reduce is built & it just doesn't wait , it's same like for loops without await & async even though you have used await in reduce cb fn
 */

a.reduce(async (acc, curr) => {
  console.log(curr); // It logs everything immediately
  const res = await async(curr);
  console.log(curr); // It logs all elements within 3 seconds while for loop with await logs in 6 seconds
  return res;
}, 0);

//In above case, All the setTimeouts start at once, hence by 3sec they're done

/**
 * While you cant make the code wait , by proper use of promise chaining in loops or reduce , you can kind of simulate that
 * new promise timeout has started only after prev iteration timeout is done.
 *
 * remember that .then & .catch return promise , you can make use of the same in reduce or loops
 * While the enitre iteration still completes in a whisker , this chaining helps with nested chaining
 */

/**
 * If you're asked to create 5 promises , just do programticaaly , dont do it by hand
 */

// constant resolution
// let promiseArray = Array(5).fill(1).map((delay)=> fnThatReturnsPromise());
// // Incase you need incremental resolutions , You can use
// Array.from({length: 5},(_,index)=> index +1); //return array of promises

//Parallel execution - Just use Promise.all(promiseArray), forEach/map , for loop(without await) for parallel execution
// priority promise qn is very good example of managing parallel execution
//Sequential execution -  for...of  if you use await with it & recursion, map & forEach doesn't wait eeven if you use reduce
// Batch/rate limit - we have seen at the top both recursive/await way & iteration/await way

// Here we haven't used async await in loop , the iterations won't wait for anything but still promises execution is
// sequential , take a note of them for your ref

const p = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("${timer}");
    }, timer * 100);
  });
};

let num = 1;
let prev = Promise.resolve();
const arr = new Array(5).fill(1);

for (let i = 0; i < arr.length; i++) {
  // having let is v.imp in such cases. spend time to understand this
  // Also it's imp that prev = prev.then is done
  prev = prev.then((val) => {
    if (val) console.log(val);
    return Promise.all([p(num++), p(num++)]);
  });
}

// sequential process execution with reduce as well
new Array(4).fill(1).reduce((prev, cur, ind, arr) => {
  return prev.then((val) => {
    if (val) console.log(val);
    Promise.all([p(num++), p(num++)]);
    return Promise.resolve();
  });
}, Promise.resolve());


// Simulating an Async task without promise
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function(value,callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

// input list can be 
let cbfn = (value)=>{};
let asyncArray = [createAsyncTask(),createAsyncTask()].then((asyncfn)=> asyncfn(2,cbfn))

// In above case cbfn is called after timeout value

// The above system works well only with parallel executions , it becomes a nightmare with sequential execution