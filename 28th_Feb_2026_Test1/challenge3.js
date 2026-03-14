//In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

let maxRetries=5;
let attempt = 0;
let success = false;

do{
    attempt++;
    let randomValue = Math.random();
    console.log("Attempt " + attempt + ": " + (randomValue > 0.6 ? "Success (Response 200 OK)" : "Failed (Timeout/Error)"));
    if (randomValue > 0.6) {
        success = true;
    }
}while (attempt < maxRetries && !success);

if (success) {
    console.log("API call succeeded after " + attempt + " attempts.");
} else {
    console.log("API call failed after " + maxRetries + " attempts.");
}   