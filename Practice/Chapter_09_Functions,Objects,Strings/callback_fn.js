//callback function - calling function later on
// Callback Functions
//A callback is a function passed as an argument to another function, to be called later.



function runTest(testName, callback) {
    let result = "pass";
    // 100 lines
    callback(testName, result)   //called at last
}

function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}

runTest("loginTest", onComplete)