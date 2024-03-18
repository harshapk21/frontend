let obj = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const deepFlat = (obj)=>{ //You can still send prefix as param...first time when uyou call it , send only 1param , other will be undefined
    let result = {};
    let keys = Object.keys(obj);
    for(const key of keys){
        if(obj.hasOwnProperty(key) && typeof obj[key] === 'object'){
            let flattenedResult = deepFlat(obj[key]);
            let flattenedKeys = Object.keys(flattenedResult);
            flattenedKeys.forEach((flattendKey)=>result[key+'.'+flattendKey] = flattenedResult[flattendKey])
        }else{
            result[key] = obj[key]; // try to spread like result = { ...result,[key]:obj[key] }
        }
    }
    return result;
}



console.log(deepFlat(obj));

/**
 * recursion and promises are different , code execution is syncronous in recursion , no need of using it 
 * with promises. 
 */