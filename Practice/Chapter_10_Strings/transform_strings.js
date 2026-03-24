//Transforming string

let str = "Hello World !! ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Trim -remove unwanted spaces
console.log(str.trim());

console.log(str.trimStart());

console.log(str.trimEnd());

//Replace

let msg ="Test :Fail,Retry:Fail";
console.log(msg.replace("Fail","Pass"));
msg.replaceAll("Fail","Pass");
msg.replace(/Fail/g,"Pass");

//Concatenation

"Hello" + " " + "World";
"Hello".concat("","World");
`${"Hello"} ${"World"}`;

let url ="https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g,"qa"));

//Splitting & Joining

