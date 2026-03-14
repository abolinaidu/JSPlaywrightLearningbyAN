let [first,second,third]=[10,20,30];
console.log(first);
console.log(second);
console.log(third);

//spread

let [first1,second1, ...third1] =[10,20,30,40,50];
console.log(third1); // includes all the remaining values


let arr =[1,2,3]
let copy=arr;
copy.push(5);
console.log(arr.length); //4 - copy is reference , not new array, both point to same array



 
