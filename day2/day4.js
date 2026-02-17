//Hoisting concept - A mental model of how JavaScript works under the hood. It is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code.
//for var variable, the declaration is hoisted but not the initialization. So, it will be undefined until it is assigned a value.
console.log(a); //undefined
var a = 10;  // If a is not declared- ReferenceError: a is not defined
console.log(a); //10   

//for let and const variables, the declaration is not hoisted. So, it will throw a ReferenceError if we try to access it before declaration.

//console.log(b); 
let b = "Aboli";
console.log(b); //Aboli

// Create a function to demonstrate hoisting with function declarations and function expressions
function getUserStatus() // Function declaration
{
   console.log(stat="Active"); 
    var stat = "Active";
    console.log(stat);
}
getUserStatus();


//Hoisting with let and const variables
//console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 100;
console.log(x); // 100

//HOISTING global scope with let
let y="global";
if (true) {
    console.log(y);
    // ReferenceError: Cannot access 'y' before initialization
}

//hoisting local scope with let
let z = "global scope";
if (true) {
   console.log(z); // block scope
     //let z = "blocked  scope"; // intialization of z is not possible for let keyword. It will throw a ReferenceError if we try to access it before declaration.
     // console.log(z); //reassigning value to z is not possible for let keyword.
}

//hoisting local scope with const
const m = "global scope";
 //m = "new value"; // TypeError: Assignment to constant variable.

 if (true) {
    console.log(m); // block scope
     //const m = "blocked  scope"; // intialization of m is not possible for const keyword. It will throw a ReferenceError if we try to access it before declaration.
     // console.log(m); //reassigning value to m is not possible for const keyword.
 }