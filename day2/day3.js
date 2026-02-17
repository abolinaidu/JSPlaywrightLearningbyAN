// use of var ,let and const identifiers
var a = 10;
console .log(a); // 10

let b = 20;
console .log(b); // 20  
const c = 30;
console .log(c); // 30
// use of var ,let and const identifiers in block scope
if (true) {
    var x = 40;
    let y = 50;
    const z = 60;
    console .log(x); // 40
    console .log(y); // 50
    console .log(z); // 60
}
console .log(x); // 40
