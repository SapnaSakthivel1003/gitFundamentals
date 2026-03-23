let arr=[1,2,3,4,5,5];
const max=Math.max(...arr);
console.log(max);
const min=Math.min(...arr);
console.log(min);
let a=new Set(arr);
let a1=[...a]
console.log("Duplicates removed",a1);
