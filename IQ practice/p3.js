//Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

let num1="Fizz";
let num2="Buzz";
let num3="FizzBuzz";

for (let i=1;i<=100;i++)
{
    if(i%3===0 && i%5===0)
    {
        console.log(num3);
    }
    else if (i%3===0)
    {
        console.log(num1);
    }
    else if(i%5===0)
    {
        console.log(num2);
    }
    else{
        console.log(i);
    
    }
}