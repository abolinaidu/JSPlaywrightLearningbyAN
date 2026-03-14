let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
//console.log("Fastest:", sorted[0]);

//Issue : for numbers it compares the first element of each value and sorts
//Fix :
let sorted1 =responseTimes.sort((a,b) =>  a-b);
console.log("Fastest:", sorted1[0]);