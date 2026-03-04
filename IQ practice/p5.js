/*Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

//let finalmarks = 80;
let finalmarks = prompt("Enter your marks:");
 
if(finalmarks>90 && finalmarks<=100)
{
    console.log("The grade is A")
}
else if(finalmarks>=80 && finalmarks<=89)
{
    console.log("The grade is B");
}
else if(finalmarks>=70 && finalmarks<=79)
{
    console.log("The grade is C");
}
else if(finalmarks>=60 && finalmarks<=69)
{
    console.log("The grade is D");
}
else if(finalmarks>=0 && finalmarks<=59)
{
    console.log("The grade is E");
}
else
{
    console.log("Invalid marks");
}