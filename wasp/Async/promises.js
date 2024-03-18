/**
 * p.then((res)=>,(rej)=>)
 */

// new Promise((res,rej)=>setTimeout(rej('hi'),2000)).then((res)=>console.log('res'),(rej)=>console.log('rej'))

// const p = new Promise((res,rej)=>res('')); // if no '' , undefined
// console.log(p);//Promise { '' }

// const p1 = new Promise((res,rej)=>setTimeout(()=>res(''),2000));
// console.log(p1);//Promise { <pending> } // success:fulfilled

/**
 * You can attach multiple handlers to a promise
 * Notice order of logs...
 * Order of attatching is imp , all similar types (then(null,rej) && catch((err))) 
 * are called at a time one after other based on order
 * before moving to next chain of promise
 * 
 * Finally(of all handlers) is executed at the end no matter how many handlers
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error 404');
  }, 5000);
});


promise
  .catch((error) => {
    console.log('inside catch'); //1
    return error;
  })
  .then((val) => {
    console.log('I am chained from catch', val); //3
  })
  .finally(() => {
    console.log(' Catch block finally done'); //5
  });

promise
  .then(null, (error) => {
    console.log('inside then'); //2
    return error;
  })
  .then((val) => {
    console.log('I am chained from then', val); //4
  })
  .finally(() => {
    console.log(' Then block finally done'); //6
  });

  /**
   * Promise.resolve(value) creates a resolved promise.
   * Promise.reject(reason) creates a rejected promise.
   */

  /**
   * async fn always returns a promise
   */

  const fn = async ()=>{
    //try should be around await logic not async
    try {
        let res = await setTimeout(()=>'',3000);
        return res;
    }
    catch (e) {

    }
    finally {

    }
  }
  console.log(fn(),'async-await'); // Promise { <pending> }

  let returnFromThen = new Promise((res,rej)=>setTimeout(rej('game'),1000))
  returnFromThen
  .then((res)=>console.log(res,'test'))
  .catch((err)=>console.log(err,'testE')) // as expected catch is called as we r waiting on original promise

  /**
   *   then and catch always returns a promise with resolved value as return value of then and catch ...unless 
   *    we throw new Error or Promise.reject()
   */
  let returnFromThen2 = new Promise((res,rej)=>rej('game')).catch((rej)=>rej)
  returnFromThen2
  .then((res)=>console.log(res,'test2')) // catch is not called as we r waiting on promise given by then handler
  .catch((err)=>console.log(err,'test2E'))


  let p = promise.then(value => {
    return Promise.reject("Rejected value"); // Rejects with "Rejected value"
  }).catch(error => {
    return error; 
  });
  
  p.then((res) => log('testa')).catch((rej) => log('testb'));
  //testb is ans


