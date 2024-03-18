<input type='text' id='search'/>


const handleInput = (e)=>console.log(e.target.value);

const handleDebounce = (fn,delay)=>{
let timerId;
return (e)=>{
clearTimeout(timerId);
timerId = setTimeout(()=>{
			fn(e);
  },delay)
}
};

const handleInputClick = handleDebounce(handleInput,500);

document.addEventListener('input',handleInputClick)