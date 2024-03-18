const originalFetch = window.fetch;
// request interceptor
// perform all the pre-request actions
requestInterceptor = (args) => {
// original request does not contains page info
// assign the pagination in the interceptor
args[0] = args[0] + "2";
return args;
}
// response interceptor
// perform all the post-response actions
responseInterceptor = (response) => {
// convert the value to json
// to avoid parsing every time
return response.json();
}
// override the original fetch
window.fetch = async (...args) => {
//© JavaScript Interview Guide | learnersbucket.com 306
// request interceptor
// pass the args to request interceptor
console.log(args);
args = requestInterceptor(args);
// pass the updated args to fetch
let response = await originalFetch(...args);
// response interceptor
// pass the response to response interceptor
response = responseInterceptor(response);
// return the updated response
return response;
};

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(json => console.log(json));