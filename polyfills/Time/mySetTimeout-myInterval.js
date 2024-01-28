/*
setTimeout & setInterval polyfills are implemented on browser. so lets make browser work on them using requestIdleCallback. 
*/

/*
The code is correct , if browser has some time , you will see setTimeout log printing only
once but setInterval log multiple times , confirming its working
*/

function setTimeoutPolyfill(){
	let timerIds = {};
  let currentId = 0;
  function mySetTimeout(cb,waitTimeInMs,...args){
  	let id = currentId++;
    let initialTime = Date.now();
    timerIds[id] = true;
    function implementerFn(availableBrowserTime){
        console.log(availableBrowserTime.timeRemaining(),'availableBrowserTime')
    	if(!timerIds[id])
      return;
    	else if(Date.now() >= initialTime + waitTimeInMs){
      //console.log('Inside Success')
      	cb(args);
      }else{
       //console.log('Inside requesting browser again')
      	window.requestIdleCallback(implementerFn);
      }
    }
    window.requestIdleCallback(implementerFn)
    return id;
  }
  function myClearTimeout(id){
  	delete timerIds[id];
  }
  return {
  	mySetTimeout,
    myClearTimeout
  }
}

const {
  	mySetTimeout,
    myClearTimeout
    } = setTimeoutPolyfill();
    
const id = mySetTimeout(function(args){
    	console.log('Hi From Timeout +++++++++',args);
    },2000,'hpk');

function setIntervalPolyfill(){
	let timerIds = {};
  let currentId = 0;
	function mySetInterval(cb,repeatTime,args){
  		let id = currentId++;
    let initialTime = Date.now();
    timerIds[id] = true;
    function implementor(){
    	if(!timerIds[id])
      return;
      else{
      	mySetTimeout((args)=>{
        cb(args);									//This callback logic inside mySetTimeout is crucial
        if(timerIds[id])
         implementor();
        },repeatTime)
      }
    }
    implementor();
  }
  function myClearInterval(id){
  	delete timerIds[id]
  }
  return {
  	mySetInterval,
    myClearInterval
  }
}

const {
  	mySetInterval,
    myClearInterval
  } = setIntervalPolyfill();
/*const id2 = mySetInterval(function(args){
	console.log('hello from interval--------',args)
},1000,'hpk');
myClearInterval(id2);*/

    
