//Create a program that checks whether a given string is a palindrome. A palindrome is a word or phrase that reads the same backward as forward (ignoring spaces, punctuation, and capitalization). Use an if-else statement to determine if the string is a palindrome.

///let str ="Minimum";
//let reverseStr = 'Minimum';
let str = prompt("enter a string to check if it is a palindrome:");
let reverseStr = str.split('').reverse().join('');

if (str === reverseStr)
{
    console.log(" The string is a palindrome.");
}
else{
    console.log(" The string is not a palindrome.");
}