/**
 *  IIFE with clousre -  excute outern fn oncce to return inner fn with clousre
 */
let outer = (() => {
  let count = 0;
  return () => {
    if (count % 2 == 0) console.log('Hi');
    count++;
  };
})();
outer();
outer();
outer();
outer();
outer();
outer();
outer();