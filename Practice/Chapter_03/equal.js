// ==, ===, = 

let a = 5;

//console.log(5 = 5); //error: Invalid lefthand side in assignment. Assignment operator (=) is used to assign a value to a variable, not for comparison. 


console.log(5 == "5"); // == is the equality operator, it compares the values of the operands and returns true if they are equal, false otherwise. It performs type coercion if the operands are of different types, which means it converts one or both operands to a common type before making the comparison. In this case, it converts the string "5" to the number 5 before comparing, so it returns true.
console.log(5 === "5");  // number, string // === is the strict equality operator, it compares both the value and the type of the operands. It returns true only if both the value and the type are the same, otherwise it returns false. In this case, since 5 is a number and "5" is a string, it returns false.

console.log(null == undefined); // special rule, they only equal each other.
console.log(null === undefined);

console.log(5 == 5.0);
console.log(5 === 5.0);
console.log(5 === 5.01);