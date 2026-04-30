//Async - A cleaner way to write promises instead of chaining with .then() you write code that looks synchronousbut works asynchronously.
//Async functions always return a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.

//Example 1 - if we order something from a swiggy , it might take 20 min or 30 min or 40 min but we dont freeze(stop doing our work) thus it is asynchronous programing

//async --- put before a function to make it return a promise
//await - pause here, wait for the promise to finish then give me a value.
 let openBrowser = function() {
    return new Promise(function(resolve) {
        resolve('Browser opened');
    }); 
}
function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}
function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step1: Login page opened");
    let msg2 = await goToLogin();
    console.log("Step2: Navigated to login page");
    let msg3 = await enterCredentials();
    console.log("Step3: Credentials entered");
    let msg4 = await clickLogin();
    console.log("Step4: Login successful");
}

runLoginFlow();    