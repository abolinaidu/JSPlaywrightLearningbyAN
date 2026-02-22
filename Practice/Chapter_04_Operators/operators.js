/* assignedment operator -> =
loose equality operator -> ==
strict equality operator -> ===
loose inequality operator -> != 
strict inequality operator -> !==
greater than operator -> >
greater than or equal to operator -> >= 
less than operator -> <
less than or equal to operator -> <=
logical AND operator -> &&
logical OR operator -> ||
logical NOT operator -> !
*/

console.log(3 > 4); //false
console.log(3 < 4); //true
console.log(3 >= 4); //false
console.log(3 <= 4); //true
console.log(5 == 5); //false [loose comparison operator]
console.log(5 === 5); //true [strict not allowed]
console.log(5 !="5"); //false 5 is integer & "5" is string and both are not equal
console.log(5 !== "5"); //true 5 is integer & "5" is string and both are not equal
//console.log(5 !=== 5); //does not exist

let a = 30;
let b = 20;
console.log(a > b && a < b);
console.log(a > b || a < b);
console.log(!(a > b));