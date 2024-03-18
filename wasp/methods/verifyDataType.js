//check if a value is a number
function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

let a = [1,2,3,4];
let [first,...rest] = a;

