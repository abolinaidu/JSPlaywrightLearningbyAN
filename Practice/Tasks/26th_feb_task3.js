//Increment and Decrement Operators

let a= 5;
let b = a++ + ++a;
let c= a++ + ++a + ++a + ++a + a++;
// exp A ->> 5
// exp B ->> 5 + 6 = 11
// exp C ->> 6+7+8+9+12
console.log(a);  // 
console.log(b);  //5 + 7 = 12
console.log(c);  // 8 + 9 + 10 + 11 = 45
