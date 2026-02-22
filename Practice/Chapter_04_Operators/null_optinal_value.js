//null coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined. It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
let val =null ?? "Default Value";

console.log(val); // null   

val = val + "Aboli";
console.log(val); // default valueAboli 

val = val - "Aboli";
console.log(val); // NaN    

