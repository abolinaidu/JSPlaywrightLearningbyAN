//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.
//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let elementState = {
    isPresent: true,
    isDisplayed: true,
    isEnabled: false
};

let elementStatus;
if (elementState.isPresent && elementState.isDisplayed && elementState.isEnabled) {
    elementStatus = "READY";
} else if (elementState.isPresent && elementState.isDisplayed && !elementState.isEnabled) {
    elementStatus = "DISABLED";
} else if (elementState.isPresent && !elementState.isDisplayed) {
    elementStatus = "HIDDEN";
} else {
    elementStatus = "NOT FOUND";
}

let severityLevel = !elementState.isPresent ? "CRITICAL" : (!elementState.isDisplayed || !elementState.isEnabled) ? "WARNING" : "OK";

console.log("Element Status: " + elementStatus);
console.log("Severity Level: " + severityLevel);
 if (elementStatus === "READY") {
    console.log("Action: Element is ready for interaction.");
} else if (elementStatus === "DISABLED") {
    console.log("Action: Element is visible but disabled. Wait for enable state or check preconditions.");
} else if (elementStatus === "HIDDEN") {
    console.log("Action: Element is hidden. Verify if it should be visible and check CSS properties.");
}   else {
    console.log("Action: Element not found.");
}

    