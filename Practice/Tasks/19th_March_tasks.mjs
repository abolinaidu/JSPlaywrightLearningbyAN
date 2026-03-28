// ✅ Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));    //true

console.log(url.startsWith("https"));  //true

console.log(url.endsWith("/dashboard"));  //true

 // output : 500
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];
console.log(status);

//output : staging_auth_007
let env = "staging"; 
let module = "auth";
 let count = 7; 
 let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
 console.log(testId);

 //output :true
let actual = " PASS ";
 let expected = "pass"; 
 console.log(actual.trim().toLowerCase() === expected);

//output : { query: 'login', page: '2', sort: 'asc' }
let testUrl = "https://app.com/search?query=login&page=2&sort=asc";
 let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
 console.log(params);


 //output :Bearer ***REDACTED***
let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked);