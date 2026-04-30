//Promise is upgraded version of callback, it provides more structured way to handle asynchronous operations and manage success and failure cases. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell. The finally method is used to specify a block of code that will be executed regardless of whether the promise is resolved or rejected. It is often used for cleanup tasks or to perform actions that should happen after the promise has settled, regardless of the outcome.


let testRun = new Promise(function(resolve, reject) {
    reject('Test run failed');
});

testRun.then(function(result) {    //resolve
    console.log(result);
}).catch(function(error) {          //reject
    console.log(error);
}).finally(function() {             //finally always executes-whether test has passed or failed.
    console.log('Test run completed');
});

//no parameter is passed in finally, it is used for cleanup tasks or to perform actions that should happen after the promise has settled, regardless of the outcome.
//finally always runs  -whether the test is passed or failed ,just like afterEach() in cypress/playwright