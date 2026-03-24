//Strings

let url = "https://app.vwo.com";
let status = "pass";
let message = `Test completed in ${320}ms`;

//template literals with backticks

let name1="Aboli";
let msg = `Hello, ${name1}! 2 + 2 = ${2+2}`
console.log(msg);

//Multiline
let report =`Test :Login
Status : Pass
Duration :320ms
`;
console.log(report);

//String constructor
String(true); //true
String(null); //null
String[1,2,3];  //