//Shallow copy - the original will not change
let o =[1,2,3];

let copy =[...o];

console.log(copy);
let copy2 =o.slice();
console.log(copy2);

let copy3=Array.from(o);
console.log(copy3);

let copy4 =o.concat();
console.log(copy4);

copy.push(99);
console.log(o);
console.log(copy);

//Deep copy -original data gets change

o.push(65);
console.log(o);
console.log(copy4);

