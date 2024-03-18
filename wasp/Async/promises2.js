//priority promises in async manner
function resolvePromisesWithPriority(promises){
    let size = promises.length;
    let count=0;
    promises.sort((a,b)=>a.priority - b.priority)
    let priorities = promises.map((promise)=>promise.priority)

    return new Promise((resolve, reject) => {
        promises.forEach(({promise,priority})=>{
            promise
              .then((res) => {
                let index = priorities.indexOf(priority);
                if(index==0){
                    resolve(res)
                }
              })
              .catch((err) => {
                if (count >= size) reject('All failed');
                let index = priorities.indexOf(priority);
                priorities.splice(index,1);
                count++;
              });    
        })
    });
}

function createAsyncTask(val) {
  const value = val;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 7) {
        reject(value);
      } else {
        resolve(value);
      }
    }, value * 100);
  });
}
const promises = [
  { promise: createAsyncTask(5), priority: 1 },
  { promise: createAsyncTask(10), priority: 4 },
  { promise: createAsyncTask(2), priority: 3 },
  { promise: createAsyncTask(4), priority: 2 },
];
resolvePromisesWithPriority(promises)
.then((res)=>console.log(res,'success'))
.catch((err)=>console.log(err,'fail'))
