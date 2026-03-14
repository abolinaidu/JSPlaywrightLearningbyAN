/*
Reusable Step Runner with Callback
Write a higher-order function `runStep(stepName, actionFn)`
 that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. 
 If the callback throws an error, catch it and return `passed: false` with the error message.
*/

function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);

  try {
    const result = actionFn(); // Execute the callback
    return {
      stepName,
      passed: true,
      message: result !== undefined ? String(result) : "Step completed successfully"
    };
  } catch (error) {
    return {
      stepName,
      passed: false,
      message: error.message || "Unknown error"
    };
  }
}
const output = runStep("open dashboard", () => "Page loaded");
console.log(output);
