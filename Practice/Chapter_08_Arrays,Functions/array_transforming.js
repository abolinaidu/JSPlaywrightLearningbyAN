//Transforming - reduce/maximize/change the array

let scores =[45,82,92,60,73];

let grades =scores.map(s => s>70 ? "Pass" : "Fail");
console.log(grades);

//filter =reduce the value

let passingrate = scores.filter(s=>s >=70);
console.log(passingrate);


//reduce -accumulate to a single value acc to condition

let total =scores.reduce((sum,s) => sum + s ,0);
console.log(total);

//Flat = make it linear breaks down the arrays into a single array 

let nested =[[1,2],[3,4],[5,6]];
console.log(nested.flat());


