//Checking Arrays

let result =Array.isArray([1,2,3]);
console.log(result); //true
let result1=Array.isArray("a");
console.log(result1);

//Every -to validate if the every element matches the condition
let result2 =[80,90,60].every(s => s>=70); //true
let result3 =[80,90,60].some(a =>a >=70); //false

