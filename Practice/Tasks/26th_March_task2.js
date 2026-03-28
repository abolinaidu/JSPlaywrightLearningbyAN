
// pyramid triangle

let n = 5;
// upper pyramid
console.log("Upper Pyramid Triangle ");
for (let i = 1; i <= n; i++) 
    {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

let n1 = 5;
console.log("Lower Pyramid Triangle ");
// lower pyramid
for (let i =n-1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
    


