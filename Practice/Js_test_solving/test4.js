function retry(testName, maxRetries = 3) 
{ console.log(maxRetries); } 
retry("login-test");

//
//console.log(A.charCodeAt(0));
//
let str1 = " PASS ";
 console.log(str1.trim().toLowerCase());

 console.log("pass,fail,skip".split(",").length);
 let str = "hello"; 
 str[0] = "H"; 
 console.log(str);

 let url ="https://staging.example.com"
 console.log(
url.slice(8, 15));
console.log(url.split("://")[1].split(".")[0]);

console.log("Error: 404 Not Found".match(/\d+/g));

let a = { status: "pass" }; 
let b = a; 
b.status = "fail"; 
console.log(a.status);