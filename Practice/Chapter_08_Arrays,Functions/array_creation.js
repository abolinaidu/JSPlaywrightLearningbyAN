//Array
//Everthing in JS is stored as object
let fruits =[]; //empty
let fresh_fruits =["apple","banana","mango"];
// 3 index          [0.1,2]


let arr = [10,20,30,40];
      //      [0,1,2,3,4]
console.log(arr.length); //length is property.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]); //returns "undefined"

let test_results = ["pass","fail","skip"];
let mixed = [1,"Aboli",true,null]; //Javascrript can hold any type (datatype)


//Array literal
let browsers = ["safari","firefox","Chrome"];

//Array constructor

let scores =new Array(3); //empty array created
let score2 =new Array(1,2,3); //created [1,2,3]
console.log(scores[0]);


//Array OF operator

let test =Array.of(10,20,30,40);
console.log(test);


//array FROM operator

let char = Array.from("hello"); //['h','e','l','l','o']
console.log(char);
