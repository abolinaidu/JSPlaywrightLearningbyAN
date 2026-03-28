let grid=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

//Access the elements of array

console.log(grid[0][0]); //10
console.log(grid[2][1]);   //80
console.log(grid[1][3]);    //undefined


//Modify the value
grid[0][1]=78;
console.log(grid);

//Length of the grid

console.log(grid.length);  //3-gives the number oof rows
console.log(grid[0].length);  //3-gives the number of columns in the row[0]
console.log(grid[grid[0].length-1],[grid[0].length -1]);  //to get last element

let testMatrix=
[
    ["login","pass",200],
    ["checkout","pass",400],
    ["search","pass",300]
];

for(let i=0;i<testMatrix.length;i++)
{
    for(let j=0;j<testMatrix[i].length;j++)
    {
        console.log(testMatrix[i][j] +" ");
    }
    console.log(" ");
}

for (let row of testMatrix)
{
    for(let cell of row)
    {
    process.stdout.write(cell +" ")
    }
console.log();
}