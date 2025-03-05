/**
 * You cant give any type/kind of string and expect JSON.parse to convert it to JSON.
 * It have some rules esp w.r.t how it recognises a string.
 * It only treats "" as valid string but not ''
 * JSON parsing is striclty data based and hence any function/method , it just parses as string
 * i.e It only parses data that can be represented in JSON format. JSON is a text-based format that can represent basic data types such as objects, arrays, strings, numbers, booleans, and null.
 * it parses null back but not undefined
 */

/**
 * Anything that you put in JSON.parse is first checked by JS & then passes to parse fn(not sure but this idealogy helps with o/p based qns)
 * JSON.parse only cares about the body of '' or "" (string representaions of JS)
 * You can assume that JS sends the body to parse method & hence i say parse only cares about string body
 */

function log(op) { console.log(op)}
function JParse(str) { return JSON.parse(str)}

log(JParse('"hello"')) // valid bcos , parse only cares about body of JS string passed i.e "hello" , since it's "" , its valid string
log(JParse('hello')) // Invalid bcos , body of str is hello which is not known to JSON as it is a variable name
//log(JParse(""hello"")) // Invalid but you can add skippers
log(JParse('false')) // Valid bcos , body of str is false which is boolean datatype , so parse converts it back accordignly
// The same above condition hold true with number, boolean, null , object and arrays but strings observe 2st example

// Use Escaping when you want to print double quotes in a string
log(JParse('/"Test/"')) // still valid bcos , first JS comes into picture , reads str '' & then inside it encounters  / /
// which state they are actually part of string withing and not to be considered as limters , so JS sends parse only "Test"

log('{"name": "Alice"}') // JS give object to parse , parse recognises an object data type & its valid till now , 
// object keys & values both are wrapped with double quotes , so all valid & a JSON object is returned

JSON.parse("{\"name\": \"Alice\", \"age\": 30}"); // Again Valid
JSON.parse("{\"name\": 'Alice', \"age\": 30}"); // Invalid as JSON doesn't consider '' as valid string rep & 
//also JSON doesn't allow '' to be around "" as valid terminators
JSON.parse("'\"name\"'") // not valid

JSON.parse("{\"name\": \"Alice\", \"age\": 30}"); // Valid
JSON.parse('{"name": "Alice", "age": 30}'); // Valid

/**
 * but JSON.parse() does not automatically convert a date string to a Date object.
If you need a Date, you'll have to manually parse it or handle it inside a reviver function (which is an optional argument in JSON.parse()).
 */
const jsonString = '{"date": "2022-10-05T14:48:00.000Z"}';
const obj = JSON.parse(jsonString, (key, value) => {
    if (key === 'date') {
      return new Date(value); // Manually converting to Date
    }
    return value;
  });

// Attached SS of parse what can & can't be supported

/** Polyfill for JSON.parse code is very good as well. 
 * Learnt Sky is the limit with code , you just have to think 
 * WYSIWYG also proves the same
 * */

/** 2 basic learnings:
 *  1) if input is "test" , s[0] = t
 *     but if input is '"test"' , s[0] = '"' and also can be s[0] = '\"' (escaped string)
 *  2) if you want to check if a string has numeric value
 *      Number(str) !== NaN or !isNaN(+str) 
 *  3) small nuances in code is very imp , in this case , remove all whitespace in the string is important as having white-spaces 
 *     disturbs the pattern of checking {,[ or " at oth index
 *  4) power of slice , str.slice(1,-1) gives str by removing 1st & last index
 *  5) NaN === NaN (false)
 *  Attached Key diff ss btw Number,parseInt,parseFloat
 **/