//Retry failed API's
/**
 * when you call an async fn with fn() , it returns a promise , and then even if u do recursion , if u make sure
 * to do return fn()
 * when u return ans at final base condition or api success condition , return it successfully passes the data
 * to initial call maker
 */

//Retry failed API's

const asyncTask = (function x(){
    let count = 0;
    
    return function(){
    count++;
    if(count>5){
    //console.log(count,'inside task - success')
    return Promise.resolve(count);
    }
    else{
    //console.log(count,'inside task - fail')
    return Promise.reject('retry')
    }
    }
    })();
    
    function retry(task,retryCount){
    let count = 0;
      async function workerFn(){
      if(count > retryCount)
      return Promise.reject('Count Exceeded');
      else{
          count++;
        try{
        let ans = await task()
            return ans;
        }catch(e){
    
            if(count<retryCount){
          let ans = workerFn();
               return ans;
          }else{
           throw 'Retry Limit Exceeded';
           }
        }
      }
    }
    return workerFn();
    }
    
    
    retry(asyncTask,4)
    .then((res)=>console.log(res,'success'))
    .catch((err)=>console.log(err,'err'))