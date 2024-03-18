/**
 * for...of loop allows us to do async/await i.e execurte next loop only after resolve of first
 * But reduce explicitly doesnt allow to do this...you have make evrything async right from
 * initialvalue , asyn cbFn , await the result and wrap while with async
 */

/**
 * async fn always returns a promise
 */

async function asyncFunctionWithError() {
    throw new Error("Something went wrong!"); // Throws an error
  }
  
  asyncFunctionWithError().catch(error => {
    console.error(error.message); // Output: Something went wrong!
  });

  
  async function asyncFunction() {
    return "Hello, World!";
  }
  
  async function example1() {
    const result = await asyncFunction(); // Wait for asyncFunction to resolve
    console.log(result); // Output: Hello, World!
  }
  
  example1();

  
  async function asyncFunction1() {
    throw new Error("Something went wrong!"); // Simulate an error
  }
  
  async function example() {
    const promise = asyncFunction1(); // Start the async operation
    promise.catch(error => {
      console.error(error.message); // Handle the error thrown by asyncFunction
    });
  }
  
  example();

  const sleep = (milliseconds) => {
    return new Promise((resolve,reject) => setTimeout(()=>resolve(1), milliseconds))
    };
  
  const performAction = async () => {
    let val = await sleep(2000);
    console.log(val,'sleep--');
    return val;
    //do stuff
  };
  /**
   * As discussed earlier , async fn returns a promise when called. The resolved/rejected value is the result of await 
   * thats why 
   *  1st log is a promise and 
   *  2nd log is a resolved with value undefined bcos , no explicit return is there on async after await...it 
   */
  // console.log(performAction(),'sleep-->'); 
  performAction().then((res)=>console.log(res,'sleep'));