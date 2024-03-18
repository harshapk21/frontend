/**
 * Don't write default and const together while exporting
 * either write 
 * export const fn = ()=>{} for named arrow
 * or
 * export default fn = ()=>{} for default arrow
 *  
 * Never write const/let to normal function
 * either do 
 * export function x(){} for named export normal fn
 * or
 * export default function x(){
 * }
 * 
 * or declare fn's and export them as you like at the end
 * 
 */



// const fn = ()=>{}

// export default fn;

function x(){

}
export default x;