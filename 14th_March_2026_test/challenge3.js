/*Normalize Locator Error Messages
Given a raw Playwright error message string,
 write a function that trims extra spaces, 
 converts the message to lowercase, collapses multiple spaces into a single space, 
 and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.
*/

function normalizelocatorErrorMessage(rawMessage) {
  // Trim leading/trailing spaces
  let normalized = rawMessage.trim();

  // Convert to lowercase
  normalized = normalized.toLowerCase();

  // Collapse multiple spaces into one
  normalized = normalized.replace(/\s+/g, " ");

  // Determine category
  let category;
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  return { normalized, category };
}
const rawErrorMSG = "Locator not found after TIMEOUT ";

console.log(normalizelocatorErrorMessage(rawErrorMSG));
// { normalized: "Locator not found after TIMEOUT", category: "TIMEOUT" }

