//primitive datatypes
let unknowValue :unknown = "hello";

if (typeof unknowValue === "string") {
    console.log("Hi");
}

let messages: string = "Hello";
let username: string;
let userId: number;

// Function annotations
function greet1(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};