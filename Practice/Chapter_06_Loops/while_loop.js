let attempts =0;
while (attempts < 3) {
    console.log("Attempt number: " + (attempts + 1));
    attempts++;
}
//this loop will execute 5 times because of the condition.
let count =1
while (count <= 5) {
    console.log(count);
    count++;
} 

// This loop will not execute at all because the condition is false from the beginning.
let x = 10; 
while (x < 10) {
    console.log("This will not be printed.");
    x++;
}