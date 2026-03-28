/* Left handed Pyramid triangle pattern
*
**
***
****
*****
*/

console.log("Left handed pyramid triangle");

let num=5;
let i=1;
for(i=1;i<=num;i++)
{
    console.log("*".repeat(i));
}


/*  left handed inverted Pyramid triangle pattern
* * * * * *  
* * * * *  
* * * *  
* * *  
* *  
*  

*/

console.log("Inverted left handed pyramid triangle");
let num1=1;
let j=5;
for(j=5;j>=num1;j--)
{
    console.log("*".repeat(j));
}


// Right handed pyramid triangle
console.log("Right handed pyramid triangle");

let n = 5;

for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(i);

  console.log(spaces + stars);
}

// Inverted right handed pyramid triangle
console.log("Inverted Right handed pyramid triangle");

let n1 = 5;

for (let i = n1; i >= 1; i--) {
  let space = " ".repeat(n1 - i);
  let star = "*".repeat(i);

  console.log(space + star);
}