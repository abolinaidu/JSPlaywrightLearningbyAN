/*
Write a program that classifies a triangle based on its side lengths.
 Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal),
  isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
*/

let side1 = 4 ;
let side2= 4;
let side3 = 4;

if(side1===side2 && side2===side3 && side1===side3)
{
    console.log("This is an equilateral triangle");
}
else if(side1!==side2 && side2===side3 && side1!==side3)
{
    console.log("This is an isoceles triangle")
}
else if(side1!==side2 && side2!==side3 && side1!==side3)
{
    console.log("This is a scalene triangle")
}