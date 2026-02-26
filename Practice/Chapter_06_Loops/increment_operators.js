//learn for ,do ,while loops
//for loop - print number 1 to 10.
for (let i=1;i<=10;i++)
{    console.log(i);
}

//pre /post increment
let a = 5;
console.log(++a);   //pre increment - first increment then use the value


let b = 5
let b1= ++b;   //pre increment - first increment then use the value
console.log(b1);  //6
console.log(b);   //6

let c = 5;
let c1 = c++;   //post increment - first use the value then increment
console.log(c1);  //5
console.log(c);   //6

//ERT expression and result table
//line no |a |result |b
//1       |10 | 10     |NA
//2       |11 | 11     |11
//3       |11 | print  |11
//4       |11|         |11 -print 11

let d=10;
console.log(d++ + d);  //10 + 11 = 21 - post increment

let e=10;
console.log(++e + e);  //11 + 11 = 22 -preincrement

let g=10;
console.log(g++ + ++g);  //10 + 12 = 22 - post increment and pre increment
//exp G->>10  g=11;
//exp G-->12  g =12;

let h=10;
console.log(++h + ++h); 
console.log(h);  //12
//Exp ++H --> 11
// Exp ++H--> 12 //11 + 12 = 23 - pre increment and post increment

//Decrement operator
let a1=10;
console.log(a1--);  //10 - post decrement - first use the value then decrement

let b2=10;
console.log(--b2);  //9 - pre decrement - first decrement then use the value    


