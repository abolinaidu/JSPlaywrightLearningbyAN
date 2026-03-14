//Sorting -Its alphabetical/lexical by default

let fruits =["apple","banana","cherry"];
console.log(fruits.sort()); //apple,banana,chery


let browsers =["opera","safari","firefox","chrome"];
console.log(browsers.sort()); //chrome,firefox,opera,safari
// for numbers it compares the first element of each value and sorts
let num = [10,2,30,40,5];
console.log(num.sort()); //[10,2,30,40,5]
//it compares the first element/char of each value ex.10 it considers 1 , for 2 it considers 2 for 30 it considers 3

console.log(num.sort((a,b) => a - b)); //ascending sort
console.log(num.sort((a,b) => b - a)); //descending sort


