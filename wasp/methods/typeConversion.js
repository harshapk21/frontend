/**
 * parseInt has int in it , so it converts to int
 * parseInt('12',radix) => 12 (10 redix by default)
 * 12.toString() => '12'
 * 
 * string->slice(startIndex, tillEndIndexExcluding)
 * returns between start and end
 * but if u put -index , just index count happens from end
 * always flows left to right...
 * from last...last digit is -1 cos no -0, if u put -1 then as per rules , 0 to lastbutone is shown
 * read -> gfg
 * 
 * splice changes original array and gives new array , slice doesnt change original array
 */
const convert12TO24 = (time)=>{
    let hours = time.split(':')[0];
    let minutes = time.split(':')[1].slice(0,2);
    console.log(time.split(':')[1].slice(0,-2));
    if(time.endsWith('AM')){
        if(hours==12)
      hours='00';
    }else{
    
        if(hours!=12){
         let h = parseInt(hours)+12;
      hours=h.toString(); 
      }
    }
    return hours+':'+minutes;
    }
    console.log(convert12TO24("2:10PM"));

    /**
     * padStart is awesome
     */

    let x = '11';
    //string methods seems to operate on str.method(str.toString(int)) unlike parseInt('',radix)
    console.log(x.padStart(3,0));
//o/p = 011

/**
 * similar to how split(',') has literal based on which we split , join has a condition that works as seperator 
 * between array elements in str.
 */
let y = '1,2,3';
console.log(y.split(',').join('+'));