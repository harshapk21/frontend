// This question is very good example of how you can control the flow using then,catch & finally
// really good logic handling esp increments in catch & handling that changed increments logic in finally 

// LB Solution
// function resolvePromisesWithPriorityLB(promises){
//   // sort the promises based on priority
//   promises.sort((a, b) => a.priority - b.priority);
  
//   // track the rejected promise
//   let rejected = {};

//   // track the result
//   let result = {};

//   // track the position of the most priority
//   let mostPriority = 0;

//   // track the no of promises executed
//   let taskCompleted = 0;
  
//   // return a new promise
//   return new Promise((resolve, reject) => {
    
//     // run each task in parallel
//     promises.forEach(({task, priority}, i) => {
      
//       // if the task is done
//       // store it in the result
//       task.then((value) => {
//         result[priority] = value;
//         mostPriority = Math.min(mostPriority, i); 
//       }).catch((error) => {
//         // if the promise is rejected
//         // track the rejected promises just for reference
//         rejected[priority] = true;
        
//         // if the rejected task is the least priority one
//         // move to the next least priority
//         if(priority === promises[mostPriority].priority){
//           mostPriority++;
//         }
//       }).finally(() => {  
//         // if the value priority is not reject
//         // and is the least priority
//         //resolve with these value
//         if(!rejected[priority] && priority === promises[mostPriority].priority){
//           console.log(rejected);
//           resolve(priority);
//         }
        
//         // track the no of tasks completed
//         taskCompleted++;
        
//         // if all the tasks are finished and none of them have been resolved
//         // reject with custom error
//         if(taskCompleted === promises.length){
//           reject("All Apis Failed");
//         }
//       });
//     });     
// }); 
// };

// // My Solution
function resolvePromisesWithPriority(promises) {
  // sort the promises based on priority
  promises.sort((a, b) => a.priority - b.priority);

  // track the rejected promise
  let rejected = {};

  // track the result
  let result = {};

  // track the position of the most priority
  let mostPriorityIndex = 0;

  // track the no of promises executed
  let taskCompleted = 0;

  // return a new promise
  return new Promise((resolve, reject) => {
    // run each promise in parallel
    promises.forEach(({ task, priority }, i) => {
      // if the promise is done
      // store it in the result
      task
        .then((value) => {
          result[i] = value;
          // mostPriorityIndex = Math.min(mostPriorityIndex, i);
        })
        .catch((error) => {
          // if the promise is rejected
          // track the rejected promises just for reference
          rejected[i] = true;

          // if the rejected promise is the least priority one
          // move to the next least priority
          if (i === mostPriorityIndex) {
            mostPriorityIndex++;
          }
        })
        .finally(() => {
          if (!rejected[mostPriorityIndex] && result[mostPriorityIndex]) {
            resolve(promises[mostPriorityIndex].priority);
          } else if (rejected[mostPriorityIndex]) mostPriorityIndex++;

          // track the no of tasks completed
          taskCompleted++;

          // if all the tasks are finished and none of them have been resolved
          // reject with custom error
          if (taskCompleted === promises.length) {
            // console.log(taskCompleted,'klm')
            reject("All Apis Failed");
          }
        });
    });
  });
}

// This solution works only when all the promises have already started with concurrent execution
// async function resolvePromisesWithPriority(promises) {
//   // Sort promises by priority (ascending order)
//   promises.sort((a, b) => a.priority - b.priority);

//   try {
//     for (const { task,priority } of promises) {
//       try {
//         // Wait for the first promise to resolve or reject
//         await task;
//         return priority; // Immediately return the first resolved promise
//       } catch (error) {
//         // If the current promise is rejected, continue to the next one
//         continue;
//       }
//     }

//     // If no promise is resolved successfully, throw a custom error
//     throw new Error("All APIs Failed");

//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// }

function createAsyncTask(val) {
  const value = val;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 5) {
        reject(value);
      } else {
        resolve(value);
      }
    }, value * 100);
  });
}

const promises = [
  { task: createAsyncTask(16), priority: 1 },
  { task: createAsyncTask(1), priority: 4 },
  { task: createAsyncTask(12), priority: 3 },
  { task: createAsyncTask(14), priority: 2 },
];

// Uncomment to see diff in logs
//resolvePromisesWithPriority(promises)
resolvePromisesWithPriority(promises)
  .then((res) => console.log(res, "priority - success"))
  .catch((err) => console.log(err, "fail"));
