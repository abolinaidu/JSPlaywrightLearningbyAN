//Upper Pyramid Triangle
let n=5;
console.log("Upper Pyramid Triangle ");
for (let i = 1; i <= n; i++) 
    {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}


//Lower Pyramid Triangle

let n1=5;
console.log("Lower Pyramid Triangle ");

for (let j=n1-1;j>=1;j--)
{
    console.log(" ".repeat(n1-j)+"*".repeat(2*j-1));
}
