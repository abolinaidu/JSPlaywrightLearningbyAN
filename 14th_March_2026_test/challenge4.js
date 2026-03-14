/*
Browser Execution Planner
You have an array of all supported browsers and another array of temporarily blocked browsers.
Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as
 `"Run on: chromium, webkit | Skip: firefox"`.
*/
let allBrowser = ["chromium", "firefox", "webkit"];
let blockedBrowser = ["firefox"];
function browserExecutionPlanner(allBrowsers, blockedBrowsers) {
  
  const blockedSet = new Set(blockedBrowsers.map(b => b.toLowerCase()));

  const runnable = allBrowsers
    .map(b => b.toLowerCase())
    .filter(b => !blockedSet.has(b));

  const blocked = allBrowsers
    .map(b => b.toLowerCase())
    .filter(b => blockedSet.has(b));

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ") || "None"}`;

  return {
    runnable,
    blocked,
    plan
  };
}

const result = browserExecutionPlanner(allBrowser, blockedBrowser);
console.log(result);
