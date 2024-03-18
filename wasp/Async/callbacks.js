let executeAsyncTasks = (inputs, task) => {
  let obj = [];let counter=0;
  return new Promise((res, rej) => { //return promise is key for async executions
    inputs.forEach((input, index) => {
      task(input, (succ, err) => {
        if(succ){
            counter++;
            obj[index] = succ; // this step ensures order of result = input even though its async execution
            if(counter>=inputs.length)
            res(obj);
        }else{
            rej(err);
        }
      });
    });
  });
};

let task = (input, fn) => {
  setTimeout(() => {
    // fn(input*2, null);
    if (input > 2) 
    fn(input*2, null);
    else fn(null, 'Error');
  }, input * 200);
};

executeAsyncTasks([1, 2, 3, 4], task)
.then((res)=>console.log(res,'res'))
.catch((err)=>console.log(err,'err'))
