function parse(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (typeof parseInt(str[i]) === 'number' && isFinite(parseInt(str[i]))) {
        let repeat = parseInt(str[i]);
        let subString = str.slice(i + 2, str.length - 1);
        let ans = parse(subString);
        //console.log(repeat,ans,'BBBpadend');
        let finalans = result.padEnd((repeat*ans.length)+result.length, ans); // Using finalans instead of ans
        //console.log(finalans,'padend');
        return finalans; // Return finalans instead of ans
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(parse("2[a2[b]]"));
  console.log(parse("3[b2[ca]]"));
  