let retry = 0;
do {
    console.log("execute the code!");
    console.log("Retry attempt: ",retry);
    retry++;
} while (retry < 3);

// this loop will executes 10 times because of the condition.
let number=1;
do {
    console.log("The number is: " + number);
    number++;
} while (number <= 10);


// This loop will execute at least once, even though the condition is false, because the condition is checked after the first execution of the loop body.
let a = 10;
do{
    console.log("The value of a is: " + a);
    a++;    
}   while (a <10);

//85% - for loop
//10% - while loop
//5% - do while loop
