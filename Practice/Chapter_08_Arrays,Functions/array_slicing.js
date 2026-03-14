//Slicing & containing

let arr =[1,2,3,4,5,6,7,8,9,10];
//slice (start,end) -returns the new array and does not mutate actual -->(start,end-1).index =0

console.log(arr.slice(1,3)); //[2,3]
console.log(arr.slice(-2)); //[9,10] prints the last values
console.log(arr.slice(2,5)); // [3,4,5]
console.log(arr.slice(2)); // if end is not given then it will complete till end of the array -displaay all the elements of array
console.log(arr.slice(2,3));// [3]
console.log(arr.slice(0)); //prints all values in array

//if out of index - it will print till the available index
console.log(arr.slice(3,11));

//Concatenation - connecting two string/arrays

let arr1=[1,2,3,4,5];
let a =[1,2];
let b =[3,4];

let c= a.concat(b);
console.log(c);

//spread concatenation (...)
let d =[...a,...b];
console.log(d);

//Join
//...,===

let s =["pass","fail","skip"].join(" |");
console.log(s);



