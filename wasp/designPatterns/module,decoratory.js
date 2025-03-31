// Module Pattern
const Module = (function () {
  let privateVar = "I am private";
  return {
    publicMethod: function () {
      console.log(privateVar);
    },
  };
})();


