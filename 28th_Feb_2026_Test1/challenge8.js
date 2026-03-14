//Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

const correctUsername = "admin@testingacademy.com";
const correctPassword = "Test@1234";
const maxAttempts = 3;
var attemptCounter = 0;
const loginAttempts = [
    { username: "admin@testingacademy.com", password: "wrongpass" },
    { username: "admin@testingacademy.com", password: "wrongpass" },
    { username: "admin@testingacademy.com", password: "wrongpass" },
    { username: "admin@testingacademy.com", password: "Test@1234" }
];      

let i = 0; // loop variable
let failedAttempts = 0; // counter for failed attempts

do {
    let attempt = loginAttempts[i];
    
    // Check if account is locked
    if (failedAttempts >= maxAttempts) {
        console.log(`Attempt ${i + 1}:ACCOUNT LOCKED - Rejected`);
    } else {
        
        if (attempt.username === correctUsername && attempt.password === correctPassword) {
            console.log(`Attempt ${i + 1}: SUCCESS - Logged in`);
            break; // stop loop on success
        } else {
             failedAttempts++;
            console.log(`Attempt ${i + 1}: FAILED - Strike ${failedAttempts}/${maxAttempts}`);
                       // Lock account after threshold
            if (failedAttempts === maxAttempts) {
                console.log(`: ACCOUNT LOCKED`);
            }
        }
    }

    i++;
} while (i < loginAttempts.length);

