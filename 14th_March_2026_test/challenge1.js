/*Playwright Result Summary Generator
You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, 
where status can be `"passed"`, `"failed"`, or `"skipped"`. 
Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration,
 and a comma-separated list of failed step names.
*/
let results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
const totalSteps = results.length;
let passedCount = results.filter(r => r.status === "passed").length;
let failedCount = results.filter(r => r.status === "failed").length;
let skippedCount =results.filter(r => r.status === "skipped").length
let totalDuration = results.reduce((sum,r) => sum + r.durationMs ,0)

let failedSteps = results.filter(r => r.status === "failed").map(r => r.name).join(" , ");

console.log("Playwright Result Summary Generator")
console.log("Total Steps:",totalSteps);
console.log("Passed:",passedCount);
console.log("Failed: ",failedCount);
console.log("Skipped: ",skippedCount);
console.log("Total Duration: ",totalDuration,"ms");
console.log("Failed Steps: ",failedSteps);
