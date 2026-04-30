import { get } from "node:http";

function getFirstResult(name: string): string {
    return `Result for ${name}`;
}

getFirstResult("Amit");

function getFirstResultGeneric<T>(results: T[]): T {
    return results[0];
}

let firstCode =getFirstResultGeneric<string>(["Amit", "John", "Doe"]);  
console.log(firstCode);
let firstNumber = getFirstResultGeneric<number>([1, 2, 3, 4]);
console.log(firstNumber);
    