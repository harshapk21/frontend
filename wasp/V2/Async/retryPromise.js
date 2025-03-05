function mockPromise(value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value > 2) res("success");
      else rej("failed ! retry again");
    }, 1000);
  });
}

// Using then
function retry(promise, limit = 5) {
  let count = 0;
  return new Promise((retryRes, retryRej) => {
    // Even if you return a promise , the promise callback fn body starts executing automatically unlike returning functions for which we have to trigger someway
    function retryWithinLimits() {
      promise(count)
        .then((res) => {
          console.log(`resolved with ${res}`);
          retryRes(res);
        })
        .catch((err) => {
          console.log(`Retry count - ${count}`);
          count++;
          if (count < limit) retryWithinLimits();
          else retryRej(err);
        });
    }
    retryWithinLimits();
  });
}

// In this case , resolving / rejecting final outcome is completely in our hands , we just need to call main resolve & reject.
//retry(mockPromise);



// async await way 
function retry(promise, limit = 5) {
  let count = 0;
  // here i returned an async fn bcos i thought i need to preserve count value between recursive calls.
  // i could have avoided returning functions if i just passed the updated count value in recursive calls.
  // code would have looked much simpler , only the return function(retryWithinLimits) would be needed , outer fn retry is not needed.
  return async function retryWithinLimits() {
    try {
      // awaiting on promise
      const res = await promise(count);
      console.log(`resolved with ${res}`);
      // for async functions , returning resolved value is most important , that demonstrates promise resolution
      return res;
    } catch (err) {
      console.log(`Retry count - ${count}`);
      count++;
      // If you're using recursion with async function , it's await on the recursive async functions
      // In this case , i think only value is returned at once to the main promise(_retry) after all recursion is over
      // This actually increases stack space every time a new recursion call is made
      // a bit un-sure of error propagation
      if (count < limit) return await retryWithinLimits();

      // It would also work if you don't await
      // In this case , a promise is returned again & again but the main promise(_retry) is resolved only when a value is returned by earlier nesting of promises.
      // Everytime the stack has only 1 fn as we return immediately without awaiting.
      // Relies heavily on concept that promises wont be wrapped , they just get resolved to a singular promise evntually , that's the reason even if you explicitly return new Promise from async & async anyways itself returns promise , but still both are merged to a single promise
      // Also the abv concept is also used by the hithesh's async/sequential promise handling reduce series
      // a bit un-sure of error propagation - they will be accessible direclty to top fn
      // if (count < limit) return retryWithinLimits();

      else throw err;
      // traditional way , just call rej() but here we need to throw err or throw new Error(err)
    }
  };
}

// This also could have been avoided had i persisted the count by passing as params to recursive calls
const _retry = retry(mockPromise);

_retry()
  .then((res) => console.log("final resolution", res))
  .catch((err) => console.log("final error", err));


// simplified async/await way

// you can also use a while loop with await for the retry promise logic as 3rd variation that i've done on
