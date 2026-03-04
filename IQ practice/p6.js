/*
Leap Year Checker:
Create a program that determines whether a given year is a leap year. 
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
*/
//let year = 2001;
let year = prompt("enter the year");
let isLeapYear = false;

if(year%4===0 && year%100!==0 || year%400===0)
{
    isLeapYear =true;
}
    if(isLeapYear)
    {
    console.log(year + " This is a leap year");
}
else
{
    console.log(year + " This not a leap year");
}