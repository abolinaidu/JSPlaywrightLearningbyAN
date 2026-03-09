//Searching 

let results =["pass","fail","skip","error","pass","fail"];

//indexof =returns 1st index or -1 if not found

console.log(results.indexOf("fail"));
console.log(results.indexOf("unknown"));

//lastindex of = returns the last index
console.log(results.lastIndexOf("pass"));

//includes - returns boolean value
console.log(results.includes("error")); //true
console.log(results.includes("skip"));  //false


// find - returns 1st matching element

let num =[10,25,30,40,50];
console.log(num.find(x => x > 20)); //25 - gives the indexvalue which is greater than 20

//findindex
console.log(num.findIndex(c => c >20)); //1 -gives the number having value greater than 20

//findlast
console.log(num.findLast(d=>d>20)); //50 -gives the last index value of array


//find lastindex
console.log(num.findLastIndex(e=>e>20)); //4 - gives the last index number of the array 



