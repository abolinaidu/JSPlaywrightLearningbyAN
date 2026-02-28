//As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

const userRoles = ["admin", "editor", "viewer", "tester", "manager"];
var userCounter = 1;
let totalUsers = 8;    

for (let i = 1; i <totalUsers; i++) {
    userCounter++;

    // Unique ID in USR-0001 format
    let userId = "USR-" + String(userCounter).padStart(4, "0");

    // Name and email based on counter
    let name = "TestUser" + "_" +userCounter;
    let email = "testuser" + userCounter + "@testingacademy.com";
    let role = userRoles[(i - 1) % userRoles.length];

    // Every 3rd user inactive
    let ACTIVE = (i % 3 !== 0) ? "Active" : "Inactive";

    // Print user object
    console.log(userId +"|"+ name +"|"+ email +" | " + role + " | " + ACTIVE);
}
