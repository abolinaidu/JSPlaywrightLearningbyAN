//In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

//Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description

let envName = "STAGING";
let baseUrl;
let apiKeyPattern;
let timeOut;
let description = "Staging - Pre-production mirror";

switch (envName) {
    case "dev":
        baseUrl = "https://dev-api.testingacademy.com";
        apiKeyPattern = "DEV-XXXX-XXXX";
        timeOut = 5000;
        description = "DEV- Development environment";
        break;  
    case "STAGING":
        baseUrl = "https://staging-api.testingacademy.com";
        apiKeyPattern = "stg_key_xxxx-xxxx";
        timeOut = 8000;
        description = "Staging - Pre-production mirror";
        break;
    case "qa":
        baseUrl = "https://qa-api.testingacademy.com";
        apiKeyPattern = "qa_key_xxxx-xxxx";
        timeOut = 10000;
        description = "QA - Testing environment";
        break;
    case "production":
        baseUrl = "https://prod-api.testingacademy.com";
        apiKeyPattern = "prod_key_xxxx-xxxx";
        timeOut = 15000;
        description = "Production - Live environment";
        break;
    default:
        console.log("Environment not recognized");
}       
console.log("Environment: " + envName); 
console.log("Base URL: " + baseUrl);
console.log("API Key Pattern: " + apiKeyPattern);
console.log("Timeout: " + timeOut + " ms");
console.log("Description: " + description);
